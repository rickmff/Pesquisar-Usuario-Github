import { UserInfos } from "./UserInfos";
import UserSocials from "./UserSocials";
import { UserNumbers } from "./UserNumbers";
import { UserDetailProps } from "../../types";
import * as S from "./styles";

export const UserDetails = ({ user }: UserDetailProps) => {
  return (
    <S.Container>
      <S.Avatar src={user.avatar} alt={user.name} />

      <S.SideArea>
        <UserInfos
          username={user.username}
          bio={user.bio}
          name={user.name}
          joinedAt={user.joinedAt}
          avatar={user.avatar}
        />

        <UserNumbers
          repos={user.repos}
          followers={user.followers}
          following={user.following}
        />

        <UserSocials links={user.links}/>
      </S.SideArea>
    </S.Container>
  );
};

export default UserDetails;
