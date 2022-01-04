const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const pages = await graphql(`
    {
      blog: allPrismicBlogPost {
        nodes {
          uid
          lang
        }
      }
      press: allPrismicPres {
        nodes {
          uid
          lang
        }
      }
      page: allPrismicPa {
        nodes {
          uid
          lang
        }
      }
    }
  `)
  const postsPerPage = 3
  const numPages = Math.ceil(pages.data.blog.nodes.length / postsPerPage)
  const insightsTemplate = path.resolve("src/templates/insights.js")
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/insights` : `/insights/${i + 1}`,
      component: insightsTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
  const postTemplate = path.resolve("src/templates/post.js")
  pages.data.blog.nodes.forEach(node => {
    if (node.lang == "ene-us") {
      createPage({
        path: `/blog/${node.uid}`,
        component: postTemplate,
        context: {
          uid: node.uid,
          lang: node.lang,
        },
      })
    } else {
      createPage({
        path: `/blog/${node.lang}/${node.uid}`,
        component: postTemplate,
        context: {
          uid: node.uid,
          lang: node.lang,
        },
      })
    }
  })
  const pressPerPage = 6
  const numPressPages = Math.ceil(pages.data.press.nodes.length / pressPerPage)
  const pressIndexTemplate = path.resolve("src/templates/pressindex.js")
  Array.from({ length: numPressPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/press` : `/press/${i + 1}`,
      component: pressIndexTemplate,
      context: {
        limit: pressPerPage,
        skip: i * pressPerPage,
        numPressPages,
        currentPage: i + 1,
      },
    })
  })
  const pressTemplate = path.resolve("src/templates/press.js")
  pages.data.press.nodes.forEach(node => {
    if (node.lang == "en-us") {
      createPage({
        path: `/press/${node.uid}`,
        component: pressTemplate,
        context: {
          uid: node.uid,
          lang: node.lang,
        },
      })
    } else {
      createPage({
        path: `/press/${node.lang}/${node.uid}`,
        component: pressTemplate,
        context: {
          uid: node.uid,
          lang: node.lang,
        },
      })
    }
  })
  const pageTemplate = path.resolve("src/templates/page.js")
  pages.data.page.nodes.forEach(node => {
    if (node.lang == "en-us") {
      if (node.uid == "home") {
        createPage({
          path: `/`,
          component: pageTemplate,
          context: {
            uid: node.uid,
            lang: node.lang,
          },
        })
      } else {
        createPage({
          path: `/${node.uid}`,
          component: pageTemplate,
          context: {
            uid: node.uid,
            lang: node.lang,
          },
        })
      }
    } else {
      if (node.uid == "home") {
        createPage({
          path: `/${node.lang}`,
          component: pageTemplate,
          context: {
            uid: node.uid,
            lang: node.lang,
          },
        })
      } else {
        createPage({
          path: `/${node.lang}/${node.uid}`,
          component: pageTemplate,
          context: {
            uid: node.uid,
            lang: node.lang,
          },
        })
      }
    }
  })
}

function convertToSlug(Text) {
  return Text.toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
}
