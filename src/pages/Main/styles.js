import styled from 'styled-components';

export const Container = styled.div`

`;

export const Banner = styled.div`
  background-color: var(--verde);
  height: 480px;
`;

export const Header = styled.header`
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  margin: 0 auto;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  strong {
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    text-transform: uppercase;
  }
  > a {
    text-decoration: none;
    color: #fff;
    font-size: 16px;
    border-left: 3px solid #fff;
  }
`;

export const BannerInterno = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

export const TitleSubtitle = styled.article`
  @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500;700&display=swap');
  max-width: 400px;
  padding-left: 20px;
  padding-right: 20px;
  color: #fff;
  h1 {
    font-size: 30px;
    font-family: 'Ubuntu', sans-serif;
  }
  p {
    font-size: 20px;
    max-width: 300px;
    margin-top: 20px;
  }
`;

export const ConteinerAbout = styled.div`
`;

export const About = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: var(--verde);
    margin-top: 30px;
    text-align: center;
  }
  button {
    background-color: var(--verde);
    text-align: center;
    text-transform: uppercase;
    border: none;
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
    margin-top: 8px;
    padding: 10px 10px;
    font-weight: bold;
  }
`;

export const Users = styled.section`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
`;


export const Psi = styled.article`
  margin-left: 20px;
  h2 {
    margin: 20px;
    color: var(--verde);
    text-align: center;
    border: 2px solid var(--verde);
  }
  ul {
    margin-top: 20px;
    list-style: none;
    li {
      display: block;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  li {
    padding-top: 10px;
  }
`;





