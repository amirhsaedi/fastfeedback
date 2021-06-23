import Head from 'next/head';
import { Button, Heading, Text, Code } from '@chakra-ui/react';

import { useAuth } from '@/lib/auth';

const Home = () => {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>

      <main>
        <Heading as="h1">Fast Feedback</Heading>
        <Text>
          Current user : <Code>{auth.user ? auth.user.email : 'None'}</Code>
        </Text>
        {auth.user ? (
          <Button onClick={() => auth.signOut()}>SignOut</Button>
        ) : (
          <Button onClick={() => auth.signInWithGithub()}>SignIn</Button>
        )}
      </main>
    </div>
  );
};

export default Home;
