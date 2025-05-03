import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  // Redirect to the /doctors page on load
  useEffect(() => {
    router.push('/doctors');
  }, [router]);

  return (
    <div>
      <Head>
        <title>Apollo 24/7 Clone - Healthcare Platform</title>
        <meta
          name="description"
          content="A clone of Apollo 24/7 healthcare platform. Consult doctors online with ease."
        />
        <meta
          name="keywords"
          content="healthcare, Apollo 24/7, doctor consultation, online doctors"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="AyushVishu15" />
        <meta property="og:title" content="Apollo 24/7 Clone - Healthcare Platform" />
        <meta
          property="og:description"
          content="A clone of Apollo 24/7 healthcare platform. Consult doctors online with ease."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.apollo247.com/" />
        <meta property="og:image" content="/logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Apollo 24/7 Clone - Healthcare Platform" />
        <meta
          name="twitter:description"
          content="A clone of Apollo 24/7 healthcare platform. Consult doctors online with ease."
        />
        <meta name="twitter:image" content="/logo.jpg" />
        <link rel="canonical" href="https://www.apollo247.com/" />
      </Head>
      <main>
        <h1>Redirecting to Doctors Page...</h1>
        <p>If you are not redirected, <a href="/doctors">click here</a>.</p>
      </main>
    </div>
  );
}