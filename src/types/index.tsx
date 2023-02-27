export interface UserDetails {
  name: string;
  avatar: string;
  bio: string;
  followers: number;
  following: number;
  repos: number;
  joinedAt: string;
  username: string;
  links: {
    blog: string;
    twitter: string;
    company: string;
    location: string;
  };
}

export interface User {
  avatar_url: string;
  login: string;
  url: string;
  id: number;
}

export interface SearchBarProps {
  setUser: (user: UserDetails | null ) => void;
}

export interface UserDetailProps {
  user: UserDetails;
}


