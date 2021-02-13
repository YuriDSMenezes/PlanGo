import styled from 'styled-components';

export const GraphicContainer = styled.div`
  border-radius: 4px;
  border-radius: 4px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 250px;

  p {
    align-self: flex-start;
    color: ${props => props.theme.colors.textLight};
    font-size: 1rem;
    text-transform: uppercase;
  }
`;
