import { FC } from "react";
import parse from "html-react-parser";
import Accordion from "../accordion/Accordion";

interface Props {
  data: any;
}

const Accordions: FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col my-8">
      <div className="mb-4">{parse(data?.richtext || "")}</div>
      <div className="flex gap-8">
        {data?.accordion?.map((item: any) => (
          <div key={item?.id} className="w-1/3">
            <Accordion
              title={item?.title}
              content={parse(item?.richtext ?? "")}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordions;
