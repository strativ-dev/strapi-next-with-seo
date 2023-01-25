import { FC, ReactNode } from "react";
import ClientContent from "./ClientContent";

interface AccordionProps {
  title?: string;
  content?: ReactNode;
}

export const Accordion: FC<AccordionProps> = ({ title, content }) => {
  return (
    <div className="">
      <div className="hidden">{title}</div>
      <div className="hidden">{content}</div>
      <ClientContent content={content} title={title} />
    </div>
  );
};

export default Accordion;
