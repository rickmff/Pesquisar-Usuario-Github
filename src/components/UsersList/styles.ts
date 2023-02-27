import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 48% 48%;
  list-style: none;
  grid-column-gap: 4%;

  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }

  a {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.textNorm};
    text-decoration: none;
  }
`;

export const UserCard = styled.li`
  padding: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  transition: 0.5s;

  &:hover {
    box-shadow: 0px 0px 15px -3px rgba(70, 96, 187, 1);
    transition: 1s;
    cursor: pointer;
  }

  img {
    width: 100px;
    margin-right: 2rem;
    border-radius: 50%;
  }
`;
