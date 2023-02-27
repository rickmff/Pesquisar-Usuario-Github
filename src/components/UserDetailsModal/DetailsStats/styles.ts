import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 1rem;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.background};
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;

export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 1rem;
  padding: 1.5rem 1rem;
  margin: 0 .5rem;
  width: 150px;
  @media (max-width: 768px) {
    width: 100px;
    padding: 0.5rem;
    margin: 0.5rem;
  }
  span {
    font-size: clamp(0.8rem, 1.5vw, 1.2rem);
    line-height: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme.colors.textNorm};
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  strong {
    font-weight: bold;
    font-size: 1.8em;
    line-height: 2.4rem;
    margin-top: 0.8rem;
 
    color: ${(props) => props.theme.colors.textBolded};
    @media (min-width: 768px) {
      margin-top: 1rem;
      font-size: 2.4rem;
    }
  }
`;