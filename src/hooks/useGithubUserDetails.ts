import { UserDetails } from "../interfaces";
import { useQuery } from "react-query";
import { api } from "../client/axios";

export function useGithubUserDetails(username: string) {

  return useQuery<UserDetails>(["user", username], async () => {
    const response = await api.get(`/users/${username}`);
    const user = response.data;
    
    const userData:UserDetails = {
      header: {
        name: user.name,
        avatar_url: user.avatar_url,
        bio: user.bio,
        created_at: user.created_at,
        login: user.login
      },
      stats: {
        public_repos: user.public_repos,
        followers: user.followers,
        following: user.following,
      },
      links: {
        location: user.location,
        blog: user.blog,
        company: user.company,
        email: user.email,
      },
    };
    return userData;
  });
}
