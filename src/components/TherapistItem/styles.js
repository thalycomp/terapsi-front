import styled from 'styled-components';

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
margin-bottom: 30px;

p {
  margin-top: 15px;
  color: #383838;
}
`;

