import { UsersList } from "../UsersList";
import { Moon, Search, Sun } from "react-feather";
import * as S from "./styles";
import { useGithubSearch } from "../../hooks/useGithubSearch";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState } from "react";
import { FadeIn } from "../../animations/fadeIn";
import { DropDown } from "../../animations/dropDown";

export const UserSearch = () => {
  const { changeTheme, lightMode } = useContext(ThemeContext);

  const [user, setUser] = useState("");
  const { data, isLoading } = useGithubSearch(user);
  const [notFound, setNotFound] = useState<boolean>(false);
  const location = useLocation();

  const dataEmpty = data?.length === 0;

  function handleSubmit(e: any) {

    console.log(e);
    if (
      e.target.username.value.trim() === "" ||
      e.target.username.value === undefined
    ) {
      setNotFound(true);
      return;
    }
    setNotFound(false);
    setUser(e.target.username.value);
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
            handleSubmit(e);
          }}
        >
          <S.SubmitBtn type="submit">
            <S.InputLabel>
              <Search />
            </S.InputLabel>
          </S.SubmitBtn>
          <S.Input
            name="username"
            id="username"
            type="text"
            placeholder="Digite um nome de usuário e pressione Enter ..."
          />
        </S.InputArea>

        <S.Warn>
          {!isLoading && (notFound || dataEmpty) && (
            <DropDown delay={1}>Digite um nome de usuário válido</DropDown>
          )}
        </S.Warn>
      </FadeIn>

      {isLoading && <S.Loading>Carregando...</S.Loading>}

      {!isLoading && data && <UsersList list={data} location={location} />}
    </S.Container>
  );
};

/*
- Padronizar os design tokens (media queries, tamanhos etc)
- Acho que os tipos que voce passa pra cada componente lá de details 
por ex poderiam ser derivados dos tipos das respostas da api em si 
*/
