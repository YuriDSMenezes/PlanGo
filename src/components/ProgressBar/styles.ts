import styled from 'styled-components';

export const Container = styled.div`
  height: 10px;
  width: 100%;
  progress[value] {
    width: 100%;
    appearance: none;
    border-radius: 4px;
    height: 10px;
    ::-webkit-progress-bar {
      background-color: rgba(234, 234, 234, 1);
      border-radius: 4px;
    }
    ::-webkit-progress-value {
      background: linear-gradient(to right, #00de76, #00b9e9);
    }
  }
`;
