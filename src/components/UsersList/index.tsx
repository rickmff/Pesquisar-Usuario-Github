import { User } from "../../types";
import * as S from "./styles";


interface UsersListProps {
  list: User[];
}

export const UsersList = ({ list }: UsersListProps) => {
  return (
    <S.Container>
      {list.map((user: User) => (
        <S.UserCard key={user.id}>
          <img src={user.avatar_url} alt={`Foto de perfil do ${user.login}`} />
          <p>{user.login}</p>
        </S.UserCard>
      ))}
    </S.Container>
  );
};
