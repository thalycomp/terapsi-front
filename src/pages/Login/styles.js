import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  display: flex;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  max-width: 315px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
      border: 1px solid var(--verde);
      box-sizing: border-box;
      border-radius: 4px;
      padding: 10px 15px;
      margin: 5px;
      width: 280px;

      &::placeholder {
        color: var(--verde);
      }
    }

    button {
      margin: 20px 0 0 0;
      height: 40px;
      background: var(--verde);
      color: #fff;
      text-transform: uppercase;
      border: 0;
      border-radius: 4px;
      font-weight: bold;
      opacity: 1;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  h1 {
    font-family: Ubuntu, sans-serif;
    margin-top: 20px;
    margin-bottom: 10px;
    font-size: 20px;
    color: #383838;
  }

  p {
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 20px;
  }

  a {
    text-decoration: none;
    color: var(--verde);
    font-size: 14px;
    font-weight: bold;
    opacity: 1;

    &:hover {
      opacity: 0.8;
    }
  }
`;
