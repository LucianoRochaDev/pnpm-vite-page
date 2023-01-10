import { PropsWithChildren } from "react";
import * as S from "./styles";

function Header({ children }: PropsWithChildren) {
  return <S.Header>{children}</S.Header>;
}

export default Header;
