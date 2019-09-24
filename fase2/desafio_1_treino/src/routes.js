import { Router } from "express";
const routes = Router();

let numberOfRequest = 0;
const projects = [];

function logRequests(req, res, next) {
  numberOfRequest++;
  console.log(`O número de requisições foi: ${numberOfRequest}`);
  return next();
}
routes.use(logRequests);

function checkId(req, res, next) {
  const { id } = req.params;
  const project = projects.find(item => item.id === id);
  if (!project) {
    return res.status(400).json({ error: "Project not found" });
  }
  return next();
}

routes.post("/projects", (req, res) => {
  const { id, title } = req.body;
  const project = {
    id,
    title,
    task: []
  };
  projects.push(project);

  return res.json(project);
});

routes.get("/projects", (req, res) => {
  return res.json(projects);
});

routes.put("/projects/:id", checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(item => item.id === id);
  project.title = title;
  return res.json(projects);
});

routes.delete("/projects/:id", checkId, (req, res) => {
  const { id } = req.params;
  const project = projects.findIndex(item => item.id === id);
  projects.splice(project, 1);
  return res.json(projects);
});

routes.post("/projects/:id/tasks", checkId, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const project = projects.find(item => item.id === id);
  project.task.push(title);
  return res.json(projects);
});

export default routes;
