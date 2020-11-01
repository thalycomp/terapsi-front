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
    color: var(--verde);
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
