import logoPng from "../../assets/logo_png.png";
import logoWebp from "../../assets/logo_webp.webp";

function Logo() {
  return (
    <img src={logoPng} srcSet={logoWebp} loading="lazy" alt="Logo da Optsol" />
  );
}

export default Logo;
