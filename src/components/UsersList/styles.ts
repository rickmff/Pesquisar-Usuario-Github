import styled from "styled-components";

export const Container = styled.ul`
  display: grid;
  grid-template-columns: 50% 50%;
  list-style: none;
`;

export const UserCard = styled.li`
  padding: 20px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.colors.card};
  border-radius: 10px;

  &:nth-child(2n + 1) {
    margin-right: 30px;
  }

  p {
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.textNorm};
  }

  img {
    width: 100px;
    margin-right: 2rem;
    border-radius: 50%;
  }
`;
