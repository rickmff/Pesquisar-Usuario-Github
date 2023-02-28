import formaterDate from "../../../utils/formaterDate";
import * as S from "./styles";
import { UserHeader } from "../../../interfaces";

export const DetailsHeader = ({
  login,
  name,
  bio,
  created_at,
  avatar_url,
}: UserHeader) => {
  const date = formaterDate(created_at);
  return (
    <>
      <S.Info>
        <S.Avatar src={avatar_url} alt={name} />
        <S.Info>
          <S.Name>{name}</S.Name>
          <span>
            <a href={`https://github.com/${login}`}>@{login}</a>
          </span>
          <span>{date}</span>
        </S.Info>
      </S.Info>
      <S.Bio>{bio}</S.Bio>
    </>
  );
};
