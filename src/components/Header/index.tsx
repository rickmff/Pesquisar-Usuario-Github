import { useContext, useEffect, useState, useRef } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../context/ThemeContext";
import { SearchBarProps, UserProps } from "../../types";
import formatDate from "../../utils/formatDate";

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
    const response = await fetch(`https://api.github.com/users/${username}`);
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

  useEffect(()=> {
    fetchUser(inputUser)
  },[inputUser])

  return (
    <S.Container>
      <S.ThemeArea>
        <S.ChangeThemeBtn type="button" onClick={changeTheme}>
          {lightMode ? (
            <>
              DARK
              <img src="/assets/icon-moon.svg" alt="dark mode" />
            </>
          ) : (
            <>
              LIGHT
              <img src="/assets/icon-sun.svg" alt="light mode" />
            </>
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
          <img src="/assets/icon-search.svg"  alt="search .."/>
        </S.InputLabel>

        <S.Input
          ref={usernameRef}
          name="username"
          id="username"
          type="text"
          placeholder="Search username ..."
        />
        {notFound && <S.Warn>Não Encontrado</S.Warn>}

        <S.SubmitBtn type="submit">Search</S.SubmitBtn>
      </S.InputArea>
    </S.Container>
  );
};

export default Header;