import { useQuery } from "react-query";
import { api } from "../client/axios";
import { UserHeader } from "../interfaces";

export function useGithubSearch(username: string) {
  
  return useQuery<UserHeader[]>(["users-list", username], async () => {
    if (!username) {
      return [];
    }

    const response = await api.get(`/search/users?q=${username}`);
    const data = response.data;

    const users: UserHeader[] = data.items.map((user: UserHeader) => {
      return {
        avatar_url: user.avatar_url,
        login: user.login,
      };
    });
    return users;
  });
}
