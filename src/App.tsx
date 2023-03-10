import styled from "styled-components";
import { ThemeContextProvider } from "./context/ThemeContext";
import { UsersSearch } from "./pages/UsersSearch";
import { UserDetails } from "./pages/UserDetails";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();
  let state = location.state as { backgroundLocation?: Location };

  return (
    <ThemeContextProvider>
      <Container>
        <Routes location={state?.backgroundLocation || location}>
          <Route path="/">
            <Route index element={<UsersSearch />} />
            <Route path="/user/:login" element={<UserDetails />} />
          </Route>
        </Routes>
        {state?.backgroundLocation && (
          <Routes>
            <Route path="/user/:login" element={<UserDetails />} />
          </Routes>
        )}
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
  background: ${(props) => props.theme.colors.background};
  padding: 3rem 2.5rem;
  @media (min-width: 768px) {
    padding: 3rem 7rem;
  }
`;

export default App;
