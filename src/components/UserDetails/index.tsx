import { DetailsHeader } from "./DetailsHeader";
import DetailsInfos from "./DetailsInfos";
import { DetailsStats } from "./DetailsStats";
import { UserDetailProps } from "../../types";
import * as S from "./styles";

export const UserDetails = ({ user }: UserDetailProps) => {
  return (
    <S.Container>
      <S.Avatar src={user.avatar} alt={user.name} />

      <S.SideArea>
        <DetailsHeader
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          avatar={user.avatar}
        />

        <DetailsStats
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <DetailsInfos links={user.links}/>
      </S.SideArea>
    </S.Container>
  );
};

export default UserDetails;
