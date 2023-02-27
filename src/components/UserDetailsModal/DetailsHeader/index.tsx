import formatDate from "../../../utils/formatDate";
import * as S from "./styles";

interface DetailsHeaderProps {
  username: string;
  bio: string;
  name: string;
  joinedAt: string;
  avatar: string;
}

export const DetailsHeader = ({
  username,
  name,
  joinedAt,
  bio,
  avatar,
}: DetailsHeaderProps) => {

  const date = formatDate(joinedAt);
  return (
    <>
      <S.Info>
        <S.Avatar src={avatar} alt={name} />
        <S.Info>
          <S.Name>{name}</S.Name>
          <span>
            <a href={`https://github.com/${username}`}>@{username}</a>
          </span>
          <span>{date}</span>
        </S.Info>
      </S.Info>
      <S.Bio>{bio}</S.Bio>
    </>
  );
};
