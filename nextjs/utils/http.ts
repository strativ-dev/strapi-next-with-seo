import qs from "qs";

export const strapiFetch = async (
  collection: string,
  populate?: string[] | string,
  filters?: any,
) => {
  return fetch(
    `http://localhost:1337/api/${collection}?${qs.stringify({
      populate: populate ?? "*",
      filters,
    })}`,
  ).then(async (response) => (await response.json())?.data);
};

export const strapiFetchBySlug = async (
    slug:string,
    collection: string,
) => {
    return fetch(
        `http://localhost:1337/api/${collection}/${slug}?${qs.stringify({
            populate: "seo",
        })}`,
    ).then(async (response) => (await response.json())?.data);
};