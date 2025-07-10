import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './Components/Theme/ThemeContext';
import SignInPage from './Pages/SignInPage';
import SignUpPage from './Pages/SignUpPage';
import PostsPage from './Pages/PostsPage';
import PostDetailsPage from './Pages/PostDetailsPage';
import NotFoundPage from './Pages/NotFoundPage';
import Layout from './Components/Layout/Layout';


function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/signin" replace />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
