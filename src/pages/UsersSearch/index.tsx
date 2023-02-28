import { UsersList } from "../../components/UsersList";
import { Frown, Moon, Search, Sun } from "react-feather";
import * as S from "./styles";
import { useGithubSearch } from "../../hooks/useGithubSearch";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext, useState, FormEvent, useEffect } from "react";
import { FadeIn } from "../../animations/fadeIn";
import { DropDown } from "../../animations/dropDown";

export const UsersSearch = () => {
	const { changeTheme, lightMode } = useContext(ThemeContext);

	const [user, setUser] = useState("");
	const [warning, setWarning] = useState(false);
	const { data, isError, isLoading } = useGithubSearch(user);
	const location = useLocation();

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		const input = e.target as HTMLFormElement;
		console.log(input.username.value);
		if (
			input.username.value.trim() === "" ||
			input.username.value === undefined
		) {
			return;
		}
		setUser(input.username.value);
	}

	useEffect(() => {
		if (data?.length !== 0 || user === "") {
			setWarning(false);
		} else {
			setWarning(true);
		}
	}, [handleSubmit]);

	return (
		<S.Container>
			<S.ThemeArea>
				<S.ChangeThemeBtn type="button" onClick={changeTheme}>
					{lightMode ? <Moon /> : <Sun />}
				</S.ChangeThemeBtn>
			</S.ThemeArea>

			<FadeIn delay={1}>
				<S.InputArea
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(e);
					}}
				>
					<S.SubmitBtn type="submit">
						<S.InputLabel>
							<Search />
						</S.InputLabel>
					</S.SubmitBtn>
					<S.Input
						name="username"
						id="username"
						type="text"
						pattern="[a-zA-Z0-9]+"
						placeholder="Digite um nome de usuário e pressione Enter ..."
						required
						title="Digite um nome de usuário válido sem caracteres especiais"
					/>
				</S.InputArea>

				<S.Warn>
					{!isLoading && (warning || isError) && (
						<DropDown delay={1}>
							<Frown />
							Nenhum usuário encontrado
						</DropDown>
					)}
				</S.Warn>
			</FadeIn>

			{isLoading && <S.Loading>Carregando...</S.Loading>}

			{!isLoading && data && (
				<UsersList list={data} location={location} />
			)}
		</S.Container>
	);
};
