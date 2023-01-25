import { FC } from "react";
import Accordions from "./Accordions";
import Richtext from "./Richtext";

interface Props {
  contentSection: any;
}

const sectionComponents: { [key: string]: any } = {
  "section.richtext": Richtext,
  "section.accordions": Accordions,
};

const Sections: FC<Props> = ({ contentSection }) => {
  return (
    <div className="flex flex-col">
      {contentSection?.map((sectionData: any, index: number) => {
        const SectionComponent = sectionData?.__component
          ? sectionComponents[sectionData?.__component]
          : null;
        if (!SectionComponent) return null;
        return (
          <SectionComponent
            key={`${sectionData?.__component}${index}`}
            data={sectionData}
          />
        );
      })}
    </div>
  );
};

export default Sections;
