import axios from "axios";
import { UserDetails } from "../types";
import { useQuery } from "react-query";

export function useGithubUserDetails(id: string) {
  const config = {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    },
  };

  return useQuery<UserDetails>(["user", id], async () => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/users/${id}`, config);
    const user = response.data;
    const userLinks = {
      ...user,
      links: {
        location: user.location,
        blog: user.blog,
        twitter: user.twitter_username,
        company: user.company,
        email: user.email,
      },
    };
    return userLinks;
  });
}
