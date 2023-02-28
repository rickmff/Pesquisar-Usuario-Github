import { DetailsHeader } from "./DetailsHeader";
import { DetailsInfos } from "./DetailsInfos";
import { DetailsStats } from "./DetailsStats";

import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import { useGithubUserDetails } from "../../hooks/useGithubUserDetails";
import { useNavigate, useParams } from "react-router-dom";
import { X } from "react-feather";

export const UserDetailsModal = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isError, isLoading } = useGithubUserDetails(id ?? "");

  const navigate = useNavigate();

  const handleClose = () => {
    return navigate(-1);
  };

  return (
    <S.Container>
      {!isLoading && data && (
        <Dialog.Root open onOpenChange={handleClose}>
          <Dialog.Portal>
            <S.BackgroundModal />
            <S.ContentModal>
              <S.CloseModal>
                <X />
              </S.CloseModal>
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
            </S.ContentModal>
          </Dialog.Portal>
        </Dialog.Root>
      )}
      {isError && (
        <Dialog.Root open onOpenChange={handleClose}>
          <Dialog.Portal>
            <S.BackgroundModal />
            <S.ContentModal>
              <Dialog.Close />
              <h1>Erro ao carregar os dados do Usuário</h1>
            </S.ContentModal>
          </Dialog.Portal>
        </Dialog.Root>
      )}
    </S.Container>
  );
};
