import {NextSeo} from 'next-seo';
import {strapiFetchBySlug} from "@/utils/http";

export default async function Head({ params }: { params: { slug: string } }) {

    const homePageData = await strapiFetchBySlug(
        params?.slug,
        "pages"
    );
    const {seo} =  homePageData?.attributes || {}
    return (
        <>
            {seo && <NextSeo
                useAppDir={true}
                titleTemplate="%s"
                title={seo?.metaTitle}
                description={seo?.metaDescription}
                canonical={seo?.canonicalURL}

            />}
            {/*<script  type={'application/ld+json'} dangerouslySetInnerHTML={{__html : homePageData?.attributes?.seo?.structuredData}} />*/}
        </>
    );
}