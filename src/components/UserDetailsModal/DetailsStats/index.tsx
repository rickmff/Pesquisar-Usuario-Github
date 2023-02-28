import * as S from "./styles";
import { UserStats } from "../../../interfaces";

export const DetailsStats = ({ public_repos, followers, following }: UserStats) => {
  return (
    <S.Container>
      <S.Stats>
        <span>Repos</span>
        <strong>{public_repos}</strong>
      </S.Stats>

      <S.Stats>
        <span>Followers</span>
        <strong>{followers}</strong>
      </S.Stats>

      <S.Stats>
      <span>Following</span>
        <strong>{following}</strong>
      </S.Stats>
    </S.Container>
  );
};