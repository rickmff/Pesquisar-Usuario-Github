import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 2.4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Link = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1.6rem;
  color: ${(props) => props.theme.colors.textNorm};
  transition: 0.5s;

  a,
  span {
    text-decoration: none;
    color: ${(props) => props.theme.colors.textNorm};
    margin-left: 1rem;
    transition: 0.5s;
    &:hover {
      color: ${(props) => props.theme.colors.textBolded};
      cursor: pointer;
      transition: 0.5s;
    }
  }

  &.unavailable {
    opacity: 0.5;
  }
`;

export const LinkItem = styled.span`
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${(props) => props.theme.colors.textNorm};
  word-break: break-all;
  margin-left: 2rem;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;
