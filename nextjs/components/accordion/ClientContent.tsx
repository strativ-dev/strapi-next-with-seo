"use client";
import { FC, ReactNode, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface AccordionProps {
  content?: ReactNode;
  title?: string;
}

const ClientContent: FC<AccordionProps> = ({ content, title }) => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((current) => !current);
  return (
    <div className="flex flex-col">
      <button
        onClick={toggle}
        className="py-2 bg-orange-500 text-white px-2 flex items-center justify-between"
      >
        <div>{title}</div>
        <div>{show ? <AiFillCaretUp /> : <AiFillCaretDown />}</div>
      </button>
      {show ? (
        <div className="border-gray-200 border px-2 pt-4 pb-8">{content}</div>
      ) : null}
    </div>
  );
};

export default ClientContent;
