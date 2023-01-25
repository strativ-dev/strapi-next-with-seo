/**
 * page controller
 */

import {factories} from '@strapi/strapi'

export default factories.createCoreController('api::page.page',({ strapi }) => ({
  async findOne(ctx) {
    const { id } = ctx.params;
    console.log(id)

    const entity = await strapi.db.query('api::page.page').findOne({
      where: { slug: id },
      // @ts-ignore
      populate :["seo"]
    });
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    console.log(sanitizedEntity)
    return this.transformResponse(sanitizedEntity);
  }
}));
