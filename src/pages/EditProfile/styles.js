import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #eee;
`;

export const Banner = styled.div`
  background-color: var(--verde);
  height: 100px;
  margin-bottom: 100px;
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
  margin-bottom: 20px;

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

export const Links = styled.aside`
  margin-left: 60px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    margin-right: 8px;
  }
  a {
    text-decoration: none;
    color: var(--verde);
  }
`;


export const HeaderInfo = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const Description = styled.article`
  margin-top: 20px;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  p {
    margin-top: 15px;
    color: #383838;
  }
`;



