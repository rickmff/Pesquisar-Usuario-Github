import { UserDetails } from "../interfaces";
import { useQuery } from "react-query";
import { api } from "../client/axios";

export function useGithubUserDetails(id: string) {

  return useQuery<UserDetails>(["user", id], async () => {
    const response = await api.get(`/users/${id}`);
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
        public_repos: user.repos,
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
