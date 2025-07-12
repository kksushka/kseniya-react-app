import { useState } from 'react';
import { Layout } from '../Components/Layout/Layout';
import { Success } from '../Components/Forms/Success';
import { SignInForm } from '../Components/Forms/SignInForm';


function SignInPage() {
  const [signedIn, setSignedIn] = useState(false);

  return (
    <Layout title={signedIn ? 'Success' : 'Sign In'}>
      {signedIn ? (
        <Success onClick={() => setSignedIn(false)} />
      ) : (
        <SignInForm onClick={() => setSignedIn(true)} />
      )}
    </Layout>
  );
}

export default SignInPage;
