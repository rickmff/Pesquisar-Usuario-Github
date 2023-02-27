import * as S from "./styles";

interface UsersListProps {
  list: object[];
}

export const UsersList = ({ list }: UsersListProps) => {

  console.log(list);
  

  return (
    <S.Container>
      {list.map((user: any) => (
        <S.UserCard key={user.id}>
          <p>{user.name}</p>
          <img src={user.avatar_url} alt={user.name} />
          <p>{user.url}</p>
        </S.UserCard>
      ))}
    </S.Container>
  );
};

export default UsersList;
