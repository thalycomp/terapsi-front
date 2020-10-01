import styled from 'styled-components';

export const Container = styled.div`
  footer {
    img {
      width: 90px;
      height: 30px;
    }
    color: #fff;
    background-color: var(--verde);
    margin-top: 60px;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > div {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin: 5px;
      strong {
        margin-bottom: 10px;
      }
    }
  }

`;
