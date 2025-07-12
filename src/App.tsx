import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import PostsPage from './Pages/PostsPage';
import PostDetailsPage from './Pages/PostDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';



function App() {
  return (
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/posts" replace />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
