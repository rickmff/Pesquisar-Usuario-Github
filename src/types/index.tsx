export interface UserDetails {
  id: number;
  name: string;
  avatar_url: string;
  bio: string;
  followers: number;
  following: number;
  public_repos: number;
  created_at: string;
  login: string;
  links: {
    company: string;
    location: string;
    blog: string;
    email: string;
  };
}

export interface User {
  avatar_url: string;
  login: string;
  url: string;
  id: number;
}

export interface SearchBarProps {
  setUser: (user: UserDetails | null) => void;
}
