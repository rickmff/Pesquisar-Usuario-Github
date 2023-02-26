import * as S from "./styles";

interface UserInfos {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  avatar: string;
}

export const UserInfos = ({
  username,
  name,
  joinedAt,
  bio,
  avatar,
}: UserInfos) => {
  return (
    <>
      <S.Info>
        <S.Avatar src={avatar} alt={name} />
        <S.SideInfo>
          <S.Name>{name}</S.Name>
          <S.Username>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </S.Username>

          <S.JoinedAt>{joinedAt}</S.JoinedAt>
        </S.SideInfo>
      </S.Info>
      <S.Bio>{bio}</S.Bio>
    </>
  );
};
