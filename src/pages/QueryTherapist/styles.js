import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
`;

export const Banner = styled.div`
  background-color: var(--verde);
  height: 300px;
  margin-bottom: 20px;
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
  flex-direction: column;
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
  text-align: center;
  > h1 {
    font-size: 25px;
    font-family: 'Ubuntu', sans-serif;
  }
  > p {
    font-size: 18px;
    max-width: 300px;
    margin-top: 10px;
  }
`;

export const Query = styled.section`
  width: 100%;
  border-top: 1px solid #fff;
  padding-top: 20px;
  margin-top: 20px;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  div {
    display: flex;
    flex-direction: column;
    > strong {
      margin-bottom: 5px;
    }
  }
  input {
    border: 0;
    border-radius: 4px;
    height: 30px;
    padding: 0 15px;
    color: #fff;
  }
  button {
    height: 20px;
    background: none;
    font-weight: bold;
    color: #fff;
    font-size: 14px;
    text-transform: uppercase;
    border: 2px solid #fff;
    border-radius: 4px;
    padding: 15px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 14px;
  }
`;

export const Info = styled.article`
  margin: 0 auto;
  width: 600px;
  padding: 30px;
  background-color: #fff;
  border-radius: 4px;

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

`;

export const HgroupInfo = styled.hgroup`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    > span {
      margin-top: 3px;
    }
    > strong {
      margin-bottom: 8px;
    }
  }

  img {
    width: 68px;
    height: 68px;
    border-radius: 50%;
  }
`;

export const CostDuration = styled.aside`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
  padding: 10px;
  border-radius: 4px;
  background-color: var(--verde);
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-right: 10px;
  }
`;


export const HeaderInfo = styled.header`
  hr {
    color: #eee;
  }
`;

export const Description = styled.article`
  margin-top: 20px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding-top: 20px;
  padding-bottom: 20px;

  p {
    margin-top: 15px;
    color: #383838;
  }
`;


/*
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

*/



