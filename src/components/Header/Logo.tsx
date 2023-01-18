import logoPng from "../../assets/logo_png.png";
import logoWebp from "../../assets/logo_webp.webp";
import * as S from "./styles";

const Logo = () => {
  return (
    <S.DanceTransition>
      <img
        src={logoPng}
        srcSet={logoWebp}
        loading="lazy"
        alt="Logo da Optsol"
      />
    </S.DanceTransition>
  );
};

export default Logo;
