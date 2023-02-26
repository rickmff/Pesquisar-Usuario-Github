import axios from "axios";
import { UserProps } from "../types";
import formatDate from "../utils/formatDate";

export async function getUser(username: string) {
  try {
    const apiUrl = import.meta.env.VITE_API_URL;
    const response = await axios.get(`${apiUrl}/users/${username}`);
    const data = response.data;

    const user: UserProps = {
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

    return user;

  } catch (error) {
    console.error(error);
  }
}
