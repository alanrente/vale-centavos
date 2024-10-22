import { CliqueAquiStyled } from "./index.styled";

export default function CliqueAqui({
  texto = "Clique aqui",
  color,
  onclick
}: {
  texto?: string;
  color?: string;
  onclick?: () => void | any;
}) {
  return <CliqueAquiStyled onClick={onclick} color={color}>{texto}</CliqueAquiStyled>;
}
