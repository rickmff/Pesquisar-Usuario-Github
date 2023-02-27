import { useContext, useState, useRef } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchBarProps } from "../../types";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sun.svg";
import Search from "../../assets/icons/search.svg";
import { useGithubSearch } from "../../Hooks/useGithubSearch";
import { UsersList } from "../UsersList";

export const UserSearch = () => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");

  const { data, isError, isLoading } = useGithubSearch(query);

  function handleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      return;
    }
    setQuery(usernameRef.current.value);
  }

  console.log(data);

  return (
    <S.Container>
      <S.ThemeArea>
        <S.ChangeThemeBtn type="button" onClick={changeTheme}>
          {lightMode ? (
            <img src={MoonIcon} alt="dark mode" />
          ) : (
            <img src={SunIcon} alt="light mode" />
          )}
        </S.ChangeThemeBtn>
      </S.ThemeArea>

      <S.InputArea
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        <S.InputLabel>
          <img src={Search} alt="search .." />
        </S.InputLabel>

        <S.Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Pesquisar Usuário ..."
        />

        <S.SubmitBtn type="submit">Pesquisar</S.SubmitBtn>
      </S.InputArea>

      {isLoading && <S.Loading>Carregando...</S.Loading>}

      {!isLoading && data && <UsersList list={data}/>}
    </S.Container>
  );
};
