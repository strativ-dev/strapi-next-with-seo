module.exports = {
  async formatSoMeta(data, rootLayout) {
    return {
      metaTitle: data?.title,
      metaDescription: data?.description,
      canonicalURL: data?.slug
        ? `${rootLayout?.hostName}/${data?.slug}`
        : rootLayout?.hostName,

      metaImage: data?.seoImage,
      structuredData: [{
        "@id": `${rootLayout?.hostName}`,
        "@type": `WebPage`,
        name: data?.title,
        primaryImageOfPage: data?.slug
          ? `${rootLayout?.hostName}/${data?.slug}/#primaryimage`
          : `${rootLayout?.hostName}/#primaryimage`,
        isPartOf: `${rootLayout?.hostName}/#website`,
        breadcrumb: {
          '@id': data?.slug
            ? `${rootLayout?.hostName}/${data?.slug}/#breadcrumb`
            : `${rootLayout?.hostName}/#breadcrumb`
        },
        url: `${rootLayout?.hostName}`,
        description: data?.description,
        about: {
          "@id": `${rootLayout?.hostName}/#organization`
        }
      }, {
        "@id": `${rootLayout?.hostName}/#organization`,
        "@type": "Organization",
        url: `${rootLayout?.hostName}`,
        name: `${rootLayout?.organizationSlogan}`,
        logo: {
          '@type': "ImageObject",
          "url": data?.seoImage?.data?.attributes?.url
        },
        sameAs: [
          "https://www.instagram.com/custom",
          "https://www.youtube.com/user/custom",
          "https://www.facebook.com/custom",
        ],
      }, {
        "@id": data?.slug
          ? `${rootLayout?.hostName}/${data?.slug}/#breadcrumb`
          : `${rootLayout?.hostName}/#breadcrumb`,
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            item: `${rootLayout?.hostName}/`,
            name: "Home",
            "@type": "ListItem",
            position: 1,
          },
          {
            name: `${data?.shortName}`,
            "@type": "ListItem",
            position: 2,
          },
        ],
      }],
    }

  },
};
