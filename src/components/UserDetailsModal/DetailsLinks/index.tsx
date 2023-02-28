import { useContext } from "react";
import * as S from "./styles";
import { ThemeContext } from "../../../context/ThemeContext";
import { MapPin, Link2, AtSign, Briefcase } from "react-feather";
import { UserLinks } from "../../../interfaces";

export function DetailsLinks({ company, location, blog, email }: UserLinks) {
  const { lightMode } = useContext(ThemeContext);

  return (
    <S.Container theme={lightMode}>
      <S.Link>
        <MapPin />
        <span>{location || "Não tem"}</span>
      </S.Link>

      <S.Link>
        <Link2 />
        <a href={blog} target="_blank">
          {blog || "Não tem"}
        </a>
      </S.Link>

      <S.Link>
        <AtSign />
        <a href={`${email ? `mailto:${email}` : null}`} target="_blank">
          {email || "Não tem"}
        </a>
      </S.Link>

      <S.Link>
        <Briefcase />
        <span>{company || "Não tem"}</span>
      </S.Link>
    </S.Container>
  );
}
