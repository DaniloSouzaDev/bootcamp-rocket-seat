import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  border-radius: 4px;
  background-color: #fff;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg {
      margin-right: 10px;
    }
  }
`;
export const Form = styled.form`
  margin-top: 38px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    font-size: 16px;
    border: 1px solid #cecece;
    border-radius: 4px;
    padding: 10px 15px;
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #7159c1;
  border-radius: 4px;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
