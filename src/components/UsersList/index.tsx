import { UserHeader } from "../../interfaces";
import * as S from "./styles";
import { Link, type Location } from "react-router-dom";
import { FadeIn } from "../../animations/fadeIn";

interface UsersListProps {
	list: UserHeader[];
	location: Location;
}

export const UsersList = ({ list, location }: UsersListProps) => {
	return (
		<S.Container data-testid="user-list">
			{list.map((user: UserHeader, index) => (
				<Link
					to={`/user/${user.login}`}
					key={user.login}
					state={{ backgroundLocation: location }}
				>
					<FadeIn delay={0.15 * index}>
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
