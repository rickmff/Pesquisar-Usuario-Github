import styled from "styled-components"
import { ThemeContextProvider} from "./context/ThemeContext"
import UserSearch from "./components/UserSearch";
import { useState } from "react";
import { UserProps } from "./types";
import UserDetails from "./components/UserDetails";

function App() {
  const [user, setUser] = useState<UserProps | null>(null)

  function setUserData (user: UserProps | null): void {
    setUser(user)
  }

  return (
    <ThemeContextProvider>
      <Container>
        <UserSearch setUser={setUserData} />
        {user && <UserDetails user={user} />}
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
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;

export default App