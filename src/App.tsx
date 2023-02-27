import styled from "styled-components"
import { ThemeContextProvider} from "./context/ThemeContext"
import { UserSearch } from "./components/UserSearch";

function App() {
  return (
    <ThemeContextProvider>
      <Container>
        <UserSearch />
      </Container>
    </ThemeContextProvider>
  );
}

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3rem 2.5rem;
  @media (min-width: 768px) {
    padding: 3rem 7rem;
  }
`;

export default App