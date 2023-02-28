import { DetailsHeader } from "../../components/UserDetailsModal/DetailsHeader";
import { DetailsLinks } from "../../components/UserDetailsModal/DetailsLinks";
import { DetailsStats } from "../../components/UserDetailsModal/DetailsStats";

import * as S from "./styles";
import * as Dialog from "@radix-ui/react-dialog";

import { useNavigate, useParams } from "react-router-dom";
import { X } from "react-feather";
import { useGithubUserDetails } from "../../hooks/useGithubUserDetails";

export const UserDetails = () => {
	const { login } = useParams<{ login: string }>();
	const { data, isError, isLoading } = useGithubUserDetails(login ?? "");

	const navigate = useNavigate();

	const handleClose = () => {
		return navigate("/");
	};

	return (
		<S.Container>
			{!isLoading && data && (
				<Dialog.Root open onOpenChange={handleClose}>
					<Dialog.Portal>
						<S.BackgroundModal />
						<S.ContentModal>
							<S.CloseModal aria-label="close modal">
								<X />
							</S.CloseModal>
							<DetailsHeader
								login={data.header.login}
								bio={data.header.bio}
								name={data.header.name}
								created_at={data.header.created_at}
								avatar_url={data.header.avatar_url}
							/>
							<DetailsStats
								public_repos={data.stats.public_repos}
								followers={data.stats.followers}
								following={data.stats.following}
							/>
							<DetailsLinks
								location={data.links.location}
								blog={data.links.blog}
								company={data.links.company}
								email={data.links.email}
							/>
						</S.ContentModal>
					</Dialog.Portal>
				</Dialog.Root>
			)}
			{isError && (
				<Dialog.Root open onOpenChange={handleClose}>
					<Dialog.Portal>
						<S.BackgroundModal />
						<S.ContentModal>
							<S.CloseModal>
								<X />
							</S.CloseModal>
							<h1>Erro ao carregar os dados do Usuário</h1>
						</S.ContentModal>
					</Dialog.Portal>
				</Dialog.Root>
			)}
		</S.Container>
	);
};
