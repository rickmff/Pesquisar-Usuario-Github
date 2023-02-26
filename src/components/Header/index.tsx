import { useContext, useEffect, useState, useRef } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchBarProps, UserProps } from "../../types";
import formatDate from "../../utils/formatDate";
import MoonIcon from "../../assets/icons/moon.svg";
import SunIcon from "../../assets/icons/sun.svg";
import Search from "../../assets/icons/search.svg";

export const Header = ({ setUser }: SearchBarProps) => {
  const { changeTheme, lightMode } = useContext(ThemeContext);
  const [notFound, setNotFound] = useState<boolean>(false);
  const usernameRef = useRef<HTMLInputElement>(null);
  const [inputUser] = useState("");

  function hadleSubmit() {
    if (
      usernameRef.current?.value.trim() === "" ||
      usernameRef.current?.value === undefined
    ) {
      setUser(null);
      return;
    }
    fetchUser(usernameRef.current.value);
  }

  async function fetchUser(username: string) {
    const response = await fetch(
      `https://api.github.com/search/users?q=${username}`
    );
    const data = await response.json();

    if (response.status != 200) {
      setNotFound(true);
      setUser(null);
      return;
    }

    setNotFound(false);

    const user: UserProps = {
      avatar: data.avatar_url,
      name: data.name,
      joinedAt: formatDate(data.created_at),
      username: data.login,
      bio: data.bio,
      repos: data.public_repos,
      followers: data.followers,
      following: data.following,
      links: {
        location: data.location,
        twitter: data.twitter_username,
        company: data.company,
        blog: data.blog,
      },
    };
    console.log(data);

    setUser(user);
  }

  useEffect(() => {
    fetchUser(inputUser);
  }, [inputUser]);

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
          hadleSubmit();
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
        {notFound && <S.Warn>Não Encontrado</S.Warn>}

        <S.SubmitBtn type="submit">Pesquisar</S.SubmitBtn>
      </S.InputArea>
    </S.Container>
  );
};

export default Header;
