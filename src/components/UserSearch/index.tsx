import { useContext, useState, useRef } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import { useGithubSearch } from "../../Hooks/useGithubSearch";
import { UsersList } from "../UsersList";
import { Moon, Search, Sun } from "react-feather";

export const UserSearch = () => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState("");

  const { data, isError, isLoading } = useGithubSearch(user);

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

      {isLoading && <S.Loading>Carregando...</S.Loading>}

      {!isLoading && data && <UsersList list={data} />}
    </S.Container>
  );
};
