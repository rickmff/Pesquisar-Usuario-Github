import React, { useEffect } from "react";
import { UserProps } from "../../types";
import * as S from "./styles";

export const RearchBar = () => {
  const username = "rickmff";

  async function fetchUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    if (response.status !== 200) {
      throw new Error(data.message);
      return;
    }
  }

  /*   console.log(data); */

  /*   const user: UserProps = {
    name: data.name,
    pfp: data.avatar_url,
    bio: data.bio,
    followers: data.followers,
    following: data.following,
    repos: data.public_repos,
    joinedAt: data.created_at,
    username: data.login,
    links: {
      blog: data.blog,
      twitter: data.twitter_username,
      company: data.company,
      location: data.location,
    },
  } */

  useEffect(() => {
    fetchUser(username);
  }, []);

  return (
    <div>
      <S.Container></S.Container>
    </div>
  );
};

export default RearchBar;
