import * as S from "./styles";

interface DetailsStatsProps {
  repos: number;
  followers: number;
  following: number;
}

export const DetailsStats = ({ repos, followers, following }: DetailsStatsProps) => {
  return (
    <S.Container>
      <S.Data>
        <span>Repos</span>
        <strong>{repos}</strong>
      </S.Data>

      <S.Data>
        <span>Followers</span>
        <strong>{followers}</strong>
      </S.Data>

      <S.Data>
      <span>Following</span>
        <strong>{following}</strong>
      </S.Data>
    </S.Container>
  );
};