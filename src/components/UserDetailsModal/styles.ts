import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog'

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
  @media (min-width: 900px) {
    padding: 4.8rem;
  }
  a {
    all: unset;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Avatar = styled.img`
  height: 117px;
  width: 117px;
  border-radius: 50%;
  margin-right: 3.7rem;
  display: none;
  @media (min-width: 900px) {
    display: block;
  }
`;

export const SideArea = styled.div`
  width: 100%;
`;

export const BackgroundModal = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.5);
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
  width: 1000px;
  margin: 50px auto;
  padding: 50px;
  flex-direction: column; 
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 1.5rem;
`;