import axios from "axios";
import { useQuery } from "react-query";
import { UsersList } from "../types";

export function useGithubSearch(username: string) {

  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };

  return useQuery<UsersList[]>(["users", username], async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!username) {
      return [];
    }
    const response = await axios.get(`${apiUrl}/search/users?q=${username}`, config);
    const data = response.data;
    const users = data.items.map((user: UsersList) => {
      return {
        avatar: user.avatar_url,
        name: user.login,
        url: user.url,
      };
    });
    return users;
  });
}
