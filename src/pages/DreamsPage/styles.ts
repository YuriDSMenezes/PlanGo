import { darken } from 'polished';
import styled from 'styled-components';

interface DreamsProps {
  bgColor?: string;
  color?: string;
}

export const DreamsContainer = styled.div`
  flex: 1;
  height: 100vh;
`;
export const Container = styled.div`
  flex: 1;
  margin: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
export const Dream = styled.div<DreamsProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${props => (props.bgColor ? props.bgColor : 'none')};
  width: 25%;
  margin: 30px;
  height: 220px;
  border-radius: 4px;
  cursor: pointer;
  @media (max-width: 1600px) {
    flex-direction: column;
    justify-content: center;
    div {
      margin: 0 5px;
    }
  }

  &:hover {
    background-color: ${props =>
      props.bgColor ? darken(0.05, `${props.bgColor}`) : ''};
    animation-duration: 0.4s;
    animation-name: animeCard;
  }
  @keyframes animeCard {
    from {
      transform: translateY(0px);
    }
    to {
      transform: translateY(20px);
    }
  }
`;
export const ImageDream = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const DescriptionDream = styled.div`
  span {
    color: ${props => (props.color ? props.color : 'none')};
    font-size: 1rem;
    font-weight: 400;
  }
  p {
    color: ${props => props.theme.colors.white};
    font-weight: 400;
    font-size: 3rem;
  }
  @media (max-width: 1600px) {
    p {
      font-size: 2.5rem;
    }
  }
`;
