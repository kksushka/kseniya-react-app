import { Layout } from './Components/Layout/Layout';
import { useState } from 'react';
// import { RegistrationForm } from './Components/Form/RegistrationForm';
// import { RegConfirmation } from './Components/Confirmation/RegConfirmation';
import { SignInForm } from './Components/Form/SignInForm';
import { Success } from './Components/Confirmation/Success';

function App() {

  const [state, setState] = useState(false);

  return (
    <Layout title={state ? 'Success' : 'Sign In'}>
      {state ? < Success onClick={() => setState(false)} /> : <SignInForm onClick={() => setState(true)} />}
    </Layout>
  )
}

export default App;

{/* <Layout title={state ? 'Registration Confirmation' : 'Sign up'}>
      {state ? < RegConfirmation onClick={() => setState(false)} /> : <RegistrationForm onClick={() => setState(true)} />}
    </Layout> */}