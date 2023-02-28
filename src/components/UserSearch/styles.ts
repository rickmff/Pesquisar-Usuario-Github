import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

export const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Warn = styled.small`
  font-weight: bold;
  font-size: 1.5rem;
  z-index: -1;
  color: #f74646;
  margin-right: 2.4rem;
  svg {
    margin-right: 0.5rem;
    vertical-align: top;
  }
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  font-weight: bold;
  font-size: 3rem;
  opacity: 0.5;
  color: ${(props) => props.theme.colors.textNorm};
`;

export const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeIcon};
  cursor: pointer;
  transition: opacity 0.5s;

  &:hover {
    opacity: 0.7;
    transition: opacity 0.5s;
  }
`;

export const InputArea = styled.form`
  margin-top: 3.6rem;
  border-radius: 1.5rem;
  background: ${(props) => props.theme.colors.card};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  transition: height 0.3s ease;
  position: relative;
  margin-bottom: 3rem;
`;

export const InputLabel = styled.label`
  height: 2.5rem;
  color: ${(props) => props.theme.colors.textNorm};
  padding-top: 5px;
`;

export const Input = styled.input`
  flex: 1;
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 192%;
  color: ${(props) => props.theme.colors.textNorm};
  background: none;
  border: none;
  margin: 0 0.8rem;
  width: 100%;

  &:focus {
    outline-style: none;
  }

  &:-internal-autofill-selected {
    background-color: #fff !important;
  }

  @media (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 2.4rem;
  }
`;

export const SubmitBtn = styled.button`
  background: transparent;
  border: none;
`;
