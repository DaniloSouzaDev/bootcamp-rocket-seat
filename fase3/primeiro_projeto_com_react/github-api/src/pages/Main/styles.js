import styled, { keyframes, css } from 'styled-components';

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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border-radius: 4px;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
export const List = styled.ul`
  list-style: none;
  margin-top: 30px;

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
    position: relative;

    & + li {
      border-top: solid 1px #eee;
    }
  }

  li > button:first-of-type {
    position: absolute;
    right: 70px;
  }

  a {
    color: #7159c1;
    text-decoration: none;
  }
`;
