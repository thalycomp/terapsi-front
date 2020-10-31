import styled from 'styled-components';

export const Container = styled.div`
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
`;
