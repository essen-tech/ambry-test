const Promise = require("bluebird");
const path = require("path");
const slash = require("slash");
const queryPage = require("./src/libs/graphql/queryPage.ts");
const queryRecipe = require("./src/libs/graphql/queryRecipe.ts");
const queryProduct = require("./src/libs/graphql/queryProduct.ts");

const getOnlyPublished = (nodes) =>
  nodes.filter(
    (node) =>
      node.status === "publish" ||
      node.status === "inherit" ||
      taxonomies.includes(node.type)
  );

const createPagesBase = (actions, template, pages) => {
  const { createPage, createRedirect } = actions;

  const homePage = pages.find((page) => page.slug === "home");
  pages = pages.filter((page) => page.slug !== "home");

  createRedirect({
    fromPath: `/home`,
    toPath: "/",
    redirectInBrowser: true,
    isPermanent: true,
  });

  if (homePage) {
    createPage({
      path: "/",
      component: slash(template),
      context: {
        id: homePage.id,
      },
    });
  }

  let pageTypeUrl = "";

  pages.forEach((page) => {
    switch (page.type) {
      case "Page":
        pageTypeUrl = page.slug;
        break;
      case "Recipe":
        pageTypeUrl = "recipe/" + page.slug;
        break;
      case "Product":
        pageTypeUrl = "product/" + page.slug;
        break;
    }

    createPage({
      path: `/${pageTypeUrl}/`,
      component: slash(template),
      context: {
        id: page.id,
      },
    });
  });
};

exports.createPages = ({ graphql, actions }) => {
  generatePagesByType = (type) => {
    let query = null;
    let template = null;
    let pageKey = "";

    switch (type) {
      case "recipe":
        query = queryRecipe;
        pageKey = "allWpRecipe";
        template = path.resolve("./src/views/pages/Recipe.tsx");
        break;
      case "product":
        query = queryProduct;
        pageKey = "allWpProduct";
        template = path.resolve("./src/views/pages/Product.tsx");
        break;
    }

    graphql(query).then((result) => {
      if (result.errors) {
        return reject(result.errors);
      }
      const allNodes = result.data[pageKey].nodes;

      const nodes =
        process.env.NODE_ENV === "production" ? getOnlyPublished(allNodes) : allNodes;

      createPagesBase(actions, template, nodes);
    });
  };

  return new Promise((resolve, reject) => {
    const pageTemplate = path.resolve("./src/views/pages/Page.tsx");
    resolve(
      graphql(queryPage)
        .then((result) => {
          if (result.errors) {
            log.e(result.errors);
            return reject(result.errors);
          }
          const pages = result.data.allWpPage.nodes;

          createPagesBase(actions, pageTemplate, pages);
        })
        .then(async () => await generatePagesByType("recipe"))
        .then(async () => await generatePagesByType("product"))
    );
  });
};
