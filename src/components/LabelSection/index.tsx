import { LabelSectionStyled } from "./index.styled";

interface LabelSectionProps {
  qtd: number;
  title: string;
  description: string;
  color?: string;
};

export default function LabelSection({
  qtd,
  title,
  description,
  color,
}: LabelSectionProps) {
  return (
    <LabelSectionStyled color={color}>
      <div className="header-content">
        <span className="header-title">{title}</span>
        <span className="header-description">({qtd})</span>
      </div>
      <span className="header-content header-description">
        {description}
      </span>
    </LabelSectionStyled>
  );
}
