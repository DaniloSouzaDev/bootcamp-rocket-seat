//##################################################################################

// const express = require("express");
// const app = express();

// app.use(express.json());
// app.use(logRequests);

// const projects = [];
// let numberOfRequests = 0;

// function checkProjectExists(req, res, next) {
//   const { id } = req.params;
//   const project = projects.find(item => item.id === id);
//   if (!project) {
//     return res.status(400).json({ err: "Prject not found!" });
//   } else {
//     return next();
//   }
// }

// function logRequests(req, res, next) {
//   numberOfRequests++;
//   console.log(`number of requests: ${numberOfRequests}`);
//   return next();
// }

// app.get("/projects", (req, res) => {
//   return res.json(projects);
// });

// app.post("/projects", (req, res) => {
//   const { id, title } = req.body;
//   const project = { id, title, tasks: [] };
//   projects.push(project);
//   return res.json(projects);
// });

// app.put("/projects/:id", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const project = projects.find(item => item.id === id);
//   project.title = title;
//   return res.json(projects);
// });

// app.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const project = projects.find(item => item.id === id);
//   project.tasks.push(title);
//   return res.json(projects);
// });

// app.delete("/projects/:id", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const project = projects.findIndex(item => item.id === id);
//   projects.splice(project);
//   return res.send();
// });

//###############################################################################3

// const express = require("express");
// const server = express();

// server.use(express.json());

// const projects = [];
// let numberOfRequests = 0;

// function logRequests(req, res, next) {
//   numberOfRequests++;
//   console.log(`number of requests is: ${numberOfRequests}`);
//   return next();
// }
// server.use(logRequests);

// function checkProjectExists(req, res, next) {
//   const { id } = req.params;
//   const project = projects.find(item => item.id === id);

//   if (!project) {
//     return res.status(400).json({ err: "Project not found!" });
//   } else {
//     return next();
//   }
// }

// server.get("/projects", (req, res) => {
//   return res.json(projects);
// });

// server.post("/projects", (req, res) => {
//   const { id, title } = req.body;
//   const project = {
//     id,
//     title,
//     tasks: []
//   };
//   projects.push(project);
//   return res.json(projects);
// });

// server.put("/projects/:id", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const project = projects.find(item => item.id === id);
//   project.title = title;

//   return res.json(projects);
// });

// server.post("/projects/:id/tasks", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const { title } = req.body;
//   const project = projects.find(item => item.id === id);
//   project.tasks.push(title);
//   return res.json(project);
// });

// server.delete("/projects/:id", checkProjectExists, (req, res) => {
//   const { id } = req.params;
//   const projectIndex = projects.findIndex(item => item.id === id);
//   projects.splice(projectIndex, 1);
//   return res.send();
// });

// server.listen(3000);
