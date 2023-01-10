import { PropsWithChildren } from "react";
import * as S from "./styles";

const Main = ({ children }: PropsWithChildren) => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
