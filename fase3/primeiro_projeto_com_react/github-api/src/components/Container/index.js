import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
