import { Link } from "react-router-dom";
import { User } from "../../types";
import * as S from "./styles";

interface UsersListProps {
  list: User[];
  location: Location;
}

export const UsersList = ({ list, location }: UsersListProps) => {
  return (
    <S.Container>
      {list.map((user: User) => (
        <Link to={`/user/${user.login}`} key={user.id} state={{ backgroundLocation: location }}>
          <S.UserCard>
            <img
              src={user.avatar_url}
              alt={`Foto de perfil do ${user.login}`}
            />
            <p>{user.login}</p>
          </S.UserCard>
        </Link>
      ))}
    </S.Container>
  );
};
