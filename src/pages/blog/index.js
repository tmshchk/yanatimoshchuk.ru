import * as React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout';
import Seo from '../../components/seo';
import Card from '../../components/Card';

import * as blog from '../../components/blog.module.scss';

function BlogPage({ data }) {
  return (
    <Layout>
      <Seo title="Статьи" />
      <main className={`${blog.container} ${blog.blog}`}>
        {data.allMdx.nodes.map((post) => (
          <Card
            key={post.id}
            category={post.frontmatter.tags.map((tag) => {
              return (
                <Link key={post.id} to={`/tags/${tag}`} className={blog.categoryLink}>
                  {tag}
                </Link>
              );
            })}
            title={post.frontmatter.title}
            description={post.frontmatter.description}
            link={`/${post.frontmatter.url}`}
          />
        ))}
      </main>
    </Layout>
  );
}

export const PostsQuery = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          title
          description
          date(formatString: "DD.MM.YYYY")
          tags
          url
        }
        id
        body
        slug
      }
    }
  }
`;

export default BlogPage;
