import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Container = styled.section`
  width: 100%;
  padding: 3rem 2.4rem;
  background: ${(props) => props.theme.colors.card};
  border-radius: 1.5rem;
  margin-top: 1.6rem;
  max-width: 73.3rem;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  display: flex;
  @media (min-width: 768px) {
    padding: 5.2rem 4.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const BackgroundModal = styled(Dialog.Overlay)`
  background: ${(props) => props.theme.colors.background};
  filter: invert(5%);
  position: fixed;
  inset: 0;
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`;

export const ContentModal = styled(Dialog.Content)`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90vw;
  max-height: 90vh;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 2rem;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1.5rem;
  text-align: center;

  &:focus-visible {
    outline: none;
  }
  @media (max-width: 768px) {
  }
`;

export const CloseModal = styled(Dialog.Close)`
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.background};
  border: none;
  height: 25px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.textNorm};
  position: absolute;
  top: 20px;
  right: 25px;
  transition: .5s;

  &:hover {
    color: #f74646;
    transition: .5s;
    cursor: pointer;
  }
  &:focus {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.background};
  }
`;
