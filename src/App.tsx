import { Layout } from './Components/Layout/Layout';
import { useState } from 'react';
import { RegistrationForm } from './Components/Form/RegistrationForm';
import { RegConfirmation } from './Components/Confirmation/RegConfirmation';

function App() {

  const [state, setState] = useState(false);

  return (
    <Layout title={state ? 'Registration Confirmation' : 'Sign up'}>
      {state ? < RegConfirmation onClick={() => setState(false)} /> : <RegistrationForm onClick={() => setState(true)} />}
    </Layout>
  )
}

export default App;