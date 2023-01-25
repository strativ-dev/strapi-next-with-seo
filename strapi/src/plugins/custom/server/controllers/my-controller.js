'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('custom')
      .service('myService')
      .getWelcomeMessage();
  },
  async getPages(ctx){
    ctx.body = await strapi
      .plugin('custom')
      .service('myService')
      .getAllPages();
  },

  async updatePageSeo(ctx){
    const {id}= ctx.params
    ctx.body = await strapi
      .plugin('custom')
      .service('myService')
      .updatePage(id);
  }
});
