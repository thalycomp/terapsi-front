import styled from 'styled-components';

export const Info = styled.ul`
margin: 0 auto;
width: 600px;


display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

li {
  list-style: none;
  background-color: #fff;
  padding: 30px;
  border-radius: 4px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > button {
    height: 20px;
    background: none;
    font-weight: bold;
    color: var(--verde);
    font-size: 14px;
    text-transform: uppercase;
    border: 2px solid var(--verde);
    border-radius: 4px;
    padding: 15px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
  }

}
`;
