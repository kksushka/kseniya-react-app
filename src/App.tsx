import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostCardList from './Components/Posts/PostCardList';
import PostPage from './pages/PostPage';
import SearchPage from './Components/Search/SearchPage';
import { SignInForm } from './Components/Forms/SignInForm';
import { RegistrationForm } from './Components/Forms/RegistrationForm';
import { RegConfirmation } from './Components/Forms/RegConfirmation';
import { Success } from './Components/Forms/Success';
import { NotFoundPage } from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import Layout from './Components/Layout/Layout';


export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/posts" element={<PostCardList />} />
          <Route path="/posts/:id" element={<PostPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/sign-in" element={<SignInForm onClick={() => console.log('Sign In')} />} />
          <Route path="/register" element={<RegistrationForm onClick={() => console.log('Register')} />} />
          <Route path="/confirmation" element={<RegConfirmation onClick={() => console.log('Confirm')} />} />
          <Route path="/success" element={<Success onClick={() => console.log('Success')} />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}