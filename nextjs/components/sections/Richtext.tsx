import React, { FC } from "react";
import parse from "html-react-parser";

interface Props {
  data: any;
}
const Richtext: FC<Props> = ({ data }) => {
  return <div className="mx-auto">{parse(data?.content || "")}</div>;
};

export default Richtext;
