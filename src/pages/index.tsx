import { FunctionalComponent } from 'preact';
import { definePage } from 'microsite/page';
import { Head, seo } from 'microsite/head';
import { HydratedComponentA } from '../components/hydrated-component-a';
import HydratedComponentB from '../components/hydrated-component-b';

interface IndexProps {}

const Index: FunctionalComponent<IndexProps> = () => {
  return (
    <>
      <Head>
        <seo.title>Microsite</seo.title>

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Microsite!</h1>
        <HydratedComponentA />
        <HydratedComponentB />
        <p>
          Ready to build something amazing? <a href="https://github.com/natemoo-re/microsite/tree/main/docs">Read the docs</a> to get started.
        </p>
      </main>
    </>
  );
};

export default definePage(Index);
