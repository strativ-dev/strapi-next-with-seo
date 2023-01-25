'use strict';

module.exports = ({ strapi }) => ({
  getWelcomeMessage() {
    return 'Welcome to Strapi 🚀';
  },
  async getAllPages() {
    try {
      const pages = await strapi.entityService.findMany("api::page.page", {
        populate: "*",
      });
      console.log(pages)
      return pages
    }catch (e){
        console.log(e)
    }
  },
  async updatePage(id){
    console.log(id)
    try {
      const rootLayout = await strapi.entityService.findMany(
        "api::root-layout.root-layout",
        {
          populate: "*",
        }
      );
      const entity = await strapi.entityService.findOne("api::page.page", id, {
        populate: "*",
      });

      const seoMeta = await strapi.config.seoformatter.formatSoMeta(
        {
          title: `${entity.name} - Strativ`,
          description: entity?.description,
          seoImage: entity?.displayImage,
          slug: entity?.slug,
          shortName: entity?.name,
        },
        rootLayout
      );
      console.log(seoMeta)
      const response = await strapi.entityService.update(
        "api::page.page",
        entity.id,
        {
          data: {
            seo: seoMeta,
          }
        })
      console.log("response",response)
      return {status : "success", data  : response}
    }catch(e){
      console.log(e)
      return {error : e?.response}
    }
  }
});
