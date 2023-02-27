import { DetailsHeader } from "./DetailsHeader";
import { DetailsInfos } from "./DetailsInfos";
import { DetailsStats } from "./DetailsStats";
import * as S from "./styles";
import { useGithubUserDetails } from "../../Hooks/useGithubUserDetails";
import * as Dialog from "@radix-ui/react-dialog";
import { useNavigate, useParams } from "react-router-dom";

export const UserDetails = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useGithubUserDetails(id ?? "");

  const navigate = useNavigate();

  const handleClose = () => {
    return navigate(-1);
  };

  console.log(data);

  return (
    <S.Container>
      {!isLoading && data && (
        <>
          <S.Avatar src={data.avatar_url} alt={data.name} />
          <S.SideArea>
            <Dialog.Root open onOpenChange={handleClose}>
              <Dialog.Portal>
                <S.BackgroundModal />
                <Dialog.Content>
                  <Dialog.Close />
                  <DetailsHeader
                    username={data.login}
                    bio={data.bio}
                    name={data.name}
                    joinedAt={data.created_at}
                    avatar={data.avatar_url}
                  />
                  <DetailsStats
                    repos={data.public_repos}
                    followers={data.followers}
                    following={data.following}
                  />
                  <DetailsInfos links={data.links} />
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </S.SideArea>
        </>
      )}
    </S.Container>
  );
};
