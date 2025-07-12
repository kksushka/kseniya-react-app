import { useState } from 'react';
import { Layout } from '../Components/Layout/Layout';
import { RegConfirmation } from '../Components/Forms/RegConfirmation';
import { RegistrationForm } from '../Components/Forms/RegistrationForm';


function SignUpPage() {
  const [registered, setRegistered] = useState(false);

  return (
    <Layout title={registered ? 'Registration Confirmation' : 'Sign Up'}>
      {registered ? (
        <RegConfirmation onClick={() => setRegistered(false)} />
      ) : (
        <RegistrationForm onClick={() => setRegistered(true)} />
      )}
    </Layout>
  );
}

export default SignUpPage;
