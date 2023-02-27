import { useContext } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";
import { MapPin, Link2, Twitter, Briefcase } from "react-feather";

interface DetailsInfosPropos {
  links: {
    location: string;
    blog: string;
    company: string;
    email: string;
    twitter_username: string;
  };
}

export function DetailsInfos({ links }: DetailsInfosPropos) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <S.Container theme={lightMode}>
      <S.Link>
        <MapPin />
        <span>{links.location || "Não tem"}</span>
      </S.Link>

      <S.Link>
        <Link2 />
        <a href={links.blog} target="_blank">
          {links.blog || "Não tem"}
        </a>
      </S.Link>

      <S.Link>
        <Twitter />
        <a
          href={`https://twitter.com/${links.twitter_username}`}
          target="_blank"
        >
          {links.twitter_username || "Não tem"}
        </a>
      </S.Link>

      <S.Link>
        <Briefcase />
        <span>{links.company || "Não tem"}</span>
      </S.Link>
    </S.Container>
  );
}
