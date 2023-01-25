import Sections from "@/components/sections";
import {strapiFetch} from "@/utils/http";

export default async function Home() {
  const homePageData = await strapiFetch(
    "pages",
    ["contentSection.richtext", "contentSection.accordion"],
    {
      slug: {
        $null: true,
      },
    },
  );

  const { contentSection } = homePageData[0]?.attributes;

  return (
    <main className="container mx-auto">
      <Sections contentSection={contentSection} />
    </main>
  );
}
