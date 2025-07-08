import { Layout } from './Components/Layout/Layout';
import { useState } from 'react';
// import { RegistrationForm } from './Components/Form/RegistrationForm';
// import { RegConfirmation } from './Components/Confirmation/RegConfirmation';
import { ThemeProvider } from './Components/Theme/ThemeContext';
import { Success } from './Components/Forms/Success';
import { SignInForm } from './Components/Forms/SignInForm';
import SearchPage from './Components/Search/SearchPage';
import PostCardList from './Components/Posts/PostCardList';

function App() {
  const [state, setState] = useState(false);

  return (
    
    <ThemeProvider>
      <><Layout title={state ? 'Success' : 'Sign In'}>
        {state ? <Success onClick={() => setState(false)} /> : <SignInForm onClick={() => setState(true)} />}
      </Layout><PostCardList /><SearchPage /></>
    </ThemeProvider>
  )
}

export default App;

{/* <Layout title={state ? 'Registration Confirmation' : 'Sign up'}>
      {state ? < RegConfirmation onClick={() => setState(false)} /> : <RegistrationForm onClick={() => setState(true)} />}
    </Layout> */}