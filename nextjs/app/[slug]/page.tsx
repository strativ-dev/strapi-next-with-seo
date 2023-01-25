import Sections from "@/components/sections";
import {strapiFetch} from "@/utils/http";

export default async function DynamicPages({
  params,
}: {
  params: { slug: string };
}) {
  const dynamicData = params?.slug
    ? await strapiFetch(
        "pages",
        ["contentSection.richtext", "contentSection.accordion","seo"],
        {
          slug: {
            $eq: params?.slug,
          },
        },
      )
    : null;

  const { contentSection ,seo } = dynamicData[0]?.attributes || {};
console.log("se0 page",seo)
  return (
      <>
          {seo &&  <script  type={'application/ld+json'} dangerouslySetInnerHTML={{__html : JSON.stringify(seo?.structuredData)}} />}
    <main className="container mx-auto">
      <Sections contentSection={contentSection} />
    </main>
    </>
  );
}
