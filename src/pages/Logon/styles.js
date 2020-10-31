import styled from 'styled-components';

export const Container = styled.main`
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

  > form {
    display: flex;
    flex-direction: column;
    justify-content: center;


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

  div {
    display: flex;
    flex-direction: row;
  }

  label {
    margin: 0 auto;
    margin-top: 20px;
  }
`;

export const Radio = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  margin: 0 auto;
  margin-top: 15px;

  input {
    padding: 0;
    margin: 0;
  }

  label {
    padding: 0;
    margin: 0;
  }
`;
