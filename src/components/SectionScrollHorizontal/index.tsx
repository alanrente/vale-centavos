import { HTMLProps } from "react";
import { SectionScrollHorizontalStyled } from "./index.styled";
import { SectionScrollHorizontalProps } from "./index.interface";

export default function SectionScrollHorizontal({
  children,
  args,
  props,
}: {
  children: React.ReactNode;
  args?: HTMLProps<HTMLDivElement>;
  props?: SectionScrollHorizontalProps;
}) {
  return (
    <SectionScrollHorizontalStyled {...args} {...props}>{children}</SectionScrollHorizontalStyled>
  );
}
