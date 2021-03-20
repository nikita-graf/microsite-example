import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';
import posts from './data.json';

interface PostProps {
  title: string;
}

const Post: FunctionalComponent<PostProps> = ({title}) => {
  return (
    <>
      <Head>
        <seo.title>{title}</seo.title>
      </Head>
      <main>
        <h1>{title}</h1>
      </main>
    </>
  );
};

export default definePage(Post, {
  path: '/posts/[id]',
  async getStaticProps({params: {id}}) {
    return {
      props: posts[+id - 1],
    };
  },
  async getStaticPaths() {
    return {
      paths: posts.map((p, i) => ({ params: { id: String(i + 1) } }))
    };
  }
});
