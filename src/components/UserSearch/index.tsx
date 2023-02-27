import { UsersList } from "../UsersList";
import { Moon, Search, Sun } from "react-feather";
import * as S from "./styles";
import { useGithubSearch } from "../../hooks/useGithubSearch";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, useRef } from "react";
import { FadeIn } from "../../animations/fadeIn";

export const UserSearch = () => {
  const { changeTheme, lightMode } = useContext(ThemeContext);

  const usernameRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState("");
  const { data, isError, isLoading } = useGithubSearch(user);
  const location = useLocation();

  function handleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      return;
    }
    setUser(usernameRef.current.value);
  }

  return (
    <S.Container>
      <S.ThemeArea>
        <S.ChangeThemeBtn type="button" onClick={changeTheme}>
          {lightMode ? <Moon /> : <Sun />}
        </S.ChangeThemeBtn>
      </S.ThemeArea>

      <FadeIn delay={1}>
        <S.InputArea
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <S.InputLabel>
            <Search />
          </S.InputLabel>

          <S.Input
            ref={usernameRef}
            name="username"
            id="username"
            type="text"
            placeholder="Pesquisar Usuário ..."
          />

          {<S.SubmitBtn type="submit">Pesquisar</S.SubmitBtn>}
        </S.InputArea>
      </FadeIn>

      {isLoading && <S.Loading>Carregando...</S.Loading>}

      {!isLoading && data && <UsersList list={data} location={location} />}
    </S.Container>
  );
};
