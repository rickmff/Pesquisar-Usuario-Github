import { User } from "../../types";
import * as S from "./styles";
import { Link, type Location } from "react-router-dom";
import { FadeIn } from "../../animations/fadeIn";

interface UsersListProps {
  list: User[];
  location: Location;
}

export const UsersList = ({ list, location }: UsersListProps) => {
  return (
    <S.Container>
      {list.map((user: User, index) => (
        <Link
          to={`/user/${user.login}`}
          key={user.id}
          state={{ backgroundLocation: location }}
        >
          <FadeIn delay={0.25 * index}>
            <S.UserCard>
              <img
                src={user.avatar_url}
                alt={`Foto de perfil do ${user.login}`}
              />
              {user.login}
            </S.UserCard>
          </FadeIn>
        </Link>
      ))}
    </S.Container>
  );
};
