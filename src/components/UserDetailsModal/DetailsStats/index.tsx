import * as S from "./styles";
import { UserStatsProps } from "../../../interfaces";

export const DetailsStats = ({ repos, followers, following }: UserStatsProps) => {
  return (
    <S.Container>
      <S.Stats>
        <span>Repos</span>
        <strong>{repos}</strong>
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