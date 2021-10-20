const { sanitizeEntity } = require('strapi-utils');
function slugify(string) {
    return string
      .toString()
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w\-]+/g, "")
      .replace(/\-\-+/g, "-")
      .replace(/^-+/, "")
      .replace(/-+$/, "");
  }
  
module.exports = {
  

  async findGroup(ctx) {
    let entities;
    if (ctx.query._q) {
      entities = await strapi.services.students.search(ctx.query);
    } else {
      entities = await strapi.services.students.find({group:'展示会B'});
      console.log(slugify(ctx.req._parsedUrl.path))
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.students }));
  },
  
};
 