const path = require('path');
const _ = require('lodash');

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve('./src/templates/post.js');
  const tagTemplate = path.resolve('./src/templates/tags.js');

  const result = await graphql(`
    {
      postsRemark: allMdx(sort: { order: DESC, fields: [frontmatter___date] }, limit: 2000) {
        edges {
          node {
            slug
            frontmatter {
              tags
              url
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);

  // Ловим ошибки
  if (result.errors) {
    reporter.panicOnBuild(
      `Случилась какая-то ошибка при загрузке статей. Попробуйте обновить страницу, должно помочь.`,
    );
    return;
  }

  const posts = result.data.postsRemark.edges;

  // Создаём страницы для постов
  posts.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.url,
      component: blogPostTemplate,
      context: { url: node.frontmatter.url },
    });
  });

  // Создаём страницу со всеми записями
  const postsPerPage = 30;
  const numPages = Math.ceil(posts.length / postsPerPage);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve('./src/templates/blog.js'),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const tags = result.data.tagsGroup.group;

  // Создаём страницу категории
  tags.forEach((tag, i) => {
    createPage({
      path: `/blog/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
