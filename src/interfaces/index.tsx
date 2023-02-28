export interface UserDetails {
  header: UserHeader;
  stats: UserStats;
  links: UserLinks;
}

export interface UserHeader {
  bio?: string;
  name: string;
  login: string;
  avatar_url: string;
  created_at: string;
}

export interface UserStats {
  public_repos: number;
  followers: number;
  following: number;
}

export interface UserLinks {
  company: string;
  location: string;
  blog: string;
  email: string;
}

export interface SearchBarProps {
  setUser: (user: UserDetails | null) => void;
}
