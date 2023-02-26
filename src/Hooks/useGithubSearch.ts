import axios from "axios";
import { useQuery } from "react-query";
import { UsersList } from "../types";

export function useGithubSearch(username: string) {
  return useQuery<UsersList[]>(["users", username], async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/search/users?q=${username}`);
    const data = response.data;
    const users = data.items.map((user: UsersList) => {
      return {
        avatar: user.avatar,
        name: user.name,
        url: user.url,
      };
    });
    return users;
  });
}
