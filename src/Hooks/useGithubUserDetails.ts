import axios from "axios";
import { UserProps } from "../types";
import formatDate from "../utils/formatDate";
import { useQuery } from "react-query";

export function useGithubUserDetails(username: string) {
  return useQuery<UserProps[]>(["users", username], async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/users/${username}`);
    const data = response.data;

    const user = data.items.map((user: UserProps) => {
      return {
        avatar: data.avatar_url,
        name: data.name,
        joinedAt: formatDate(data.created_at),
        username: data.login,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        links: {
          location: data.location,
          twitter: data.twitter_username,
          company: data.company,
          blog: data.blog,
        },
      };
    });
    return user;
  });
}
