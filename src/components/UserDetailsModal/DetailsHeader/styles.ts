import styled from "styled-components";

export const Info = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  span,
  a {
    font-size: 1.4rem;
    line-height: 2rem;
    color: ${(props) => props.theme.colors.textNorm};
    margin-bottom: 0.6rem;
    opacity: 0.8;
    
    @media (min-width: 768px) {
      font-size: 1.6rem;
      margin-top: 0.5rem;
    }
  }

  a {
    text-decoration: none;
    transition: .5s;
    &:hover {
      opacity: 1;
      transition: .5s;
    }
  }
`;

export const Bio = styled.p`
  color: ${(props) => props.theme.colors.textNorm};
  font-size: clamp(0.8rem, 1.5vw, 1.2rem);
  line-height: 200%;
  margin: 3rem 0 2rem;
  @media (min-width: 768px) {
    margin: 2rem 0 3rem;
    font-size: 1.6rem;
  }
`;

export const Avatar = styled.img`
  height: clamp(5rem, 20vw, 10rem);
  border-radius: 50%;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const SideInfo = styled.div`
  display: grid;
  @media (min-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    span:last-of-type {
      grid-column: 2 /3;
      grid-row: 1 /2;
      justify-self: end;
    }
  }
`;

export const Name = styled.strong`
  font-weight: bold;
  font-size: 1.7rem;
  line-height: 2.4rem;
  color: ${(props) => props.theme.colors.textBolded};
  @media (min-width: 768px) {
    font-size: 2.7rem;
  }
`;

export const JoinedAt = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
