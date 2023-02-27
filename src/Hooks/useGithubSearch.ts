import axios from "axios";
import { useQuery } from "react-query";
import { User } from "../types";

export function useGithubSearch(username: string) {

  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };

  return useQuery<User[]>(["users-list", username], async () => {
    const apiUrl = import.meta.env.VITE_API_URL;

    if (!username) {
      return [];
    }
    const response = await axios.get(`${apiUrl}/search/users?q=${username}`, config);
    const data = response.data;
    const users = data.items.map((user: User) => {
      return {
        avatar_url: user.avatar_url,
        login: user.login,
        url: user.url,
        id: user.id,
      };
    });
    return users;
  });
}
