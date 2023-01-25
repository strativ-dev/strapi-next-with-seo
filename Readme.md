<h1 align="center"><br>Headless CMS with strapi and next js<br></h1>


## Frontend

#### Introduction
This is a demo project built with Next JS 13.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd nextjs

# Install dependencies
$ yarn install or npm i

# Run the app for development scope
$ yarn dev 

# Build the app
$ yarn build

# Serve the app
$ yarn start


```

## Pages
Currently we have 3 pages

- Home `/`
- About `/about`
- Contact `/contact`

Pages are controlled by strapi backend. 

## Seo Plugins

### [Next Seo](https://github.com/garmeeh/next-seo)
It is an open sourced plugin and had  many features like structured data and seo components support. It has also support for custom props. To add more context, these components already has some predefined props for each component. But sometimes we need to pass additional field which are supported by [Schema.org](https://schema.org). Most of the components has support for this. There are also some minor bugs I faced in some schema, like previously [BreadcrumbJsonLD](https://github.com/garmeeh/next-seo#breadcrumb) has a bug that it doesn't accept additional props. On that scenario I had to add that script manually using `dangerouslyInnerHtml`. But if anyone faces this type of issues, he/she can post bug as issue on their repo. This package is well managed and they respond quite fast.

## Backend
#### Introduction
This is demo project made with strapi 4.

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. Recommended to use [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable) for the project.

From your command line:

```bash
# Clone this repository
$ git clone repo-link

# Clone this repository
$ git clone repo-link

# Go into the repository
$ cd strapi

# Install dependencies
$ yarn install or npm i

# Run the app for development scope
$ yarn develop 

# Build the app
$ yarn build

# Serve the app
$ yarn start

# Work with custom plugin
$ yarn develop --watch-admin


```
## DB

Currently, this demo project is integrated with sqlite.

## Seo plugins

### [Strapi Seo](https://market.strapi.io/plugins/@strapi-plugin-seo)
This is an official seo plugin by strapi. For smaller project it is quite handy. But for larger projects, we need to build our own custom plugin according to business logic.

## Custom plugin
A custom plugin is used to sync seo data named custom. This is only applicable for pages collections. 

## Helpful links for seo

### [Schema.org](https://www.schema.org)
Schema.org is a collaborative, community activity with a mission to create, maintain, and promote schemas for structured data on the Internet, on web pages, in email messages, and beyond.

### [Google structured data gallery](https://developers.google.com/search/docs/appearance/structured-data/search-gallery)

Google uses structured data to understand the content on the page and show that content in a richer appearance in search results, which is called a rich result. To make your site eligible for appearance as one of these rich results, follow the guide to learn how to implement structured data on your site. 

### [Schema validator](https://developers.google.com/search/docs/appearance/structured-data)
Google recommends that you start with the Rich Results Test to see what Google rich results can be generated for your page. For generic schema validation, use the Schema Markup Validator to test all types of schema.org markup, without Google-specific validation.

### [Lighothouse api to check seo score](https://developers.google.com/speed/docs/insights/v5/get-started)
The PageSpeed Insights API returns real-world data from the Chrome User Experience Report and lab data from Lighthouse.
