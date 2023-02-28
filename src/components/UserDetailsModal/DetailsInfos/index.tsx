import { useContext } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";
import { MapPin, Link2, AtSign, Briefcase } from "react-feather";

interface DetailsInfosPropos {
  links: {
    location: string;
    blog: string;
    company: string;
    email: string;
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
        <AtSign />
        <a
          href={`${links.email ? `mailto:${links.email}` : null}`}
          target="_blank"
        >
          {links.email || "Não tem"}
        </a>
      </S.Link>

      <S.Link>
        <Briefcase />
        <span>{links.company || "Não tem"}</span>
      </S.Link>
    </S.Container>
  );
}
