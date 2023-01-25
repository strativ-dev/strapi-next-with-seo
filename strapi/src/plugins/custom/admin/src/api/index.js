import {request} from "@strapi/helper-plugin";

export const getPages = async () => {
  return await request(`/custom/get-pages`, {
    method: "GET",
  });
};

export const updatePageSeo = async (id) => {
  return await request(`/custom/update-page-seo/${id}`, {
    method: "GET",
  });
};
