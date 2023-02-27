export interface UserProps {
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

export interface UsersList {
  avatar_url: string;
  login: string;
  url: string;
}

export interface SearchBarProps {
  setUser: (user: UserProps | null ) => void;
}

export interface UserDetailProps {
  user: UserProps;
}


