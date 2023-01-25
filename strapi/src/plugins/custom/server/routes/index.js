module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: 'myController.index',
    config: {
      policies: [],
      auth: false,
    },
  },
  {
    method: 'GET',
    path: '/get-pages',
    handler: 'myController.getPages',
    config: {
      policies: [],
       auth: false,
    },
  },
  {
    method: 'GET',
    path: '/update-page-seo/:id',
    handler: 'myController.updatePageSeo',
    config: {
      policies: [],
    },
  },
];
