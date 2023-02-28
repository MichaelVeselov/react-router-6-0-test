import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';

import LoginPage from './pages/LoginPage';

import BlogPage from './pages/BlogPage';
import SinglePostPage from './pages/SinglePostPage';
import CreateNewPostPage from './pages/CreateNewPostPage';
import EditPostPage from './pages/EditPostPage';

import AboutPage from './pages/AboutPage';

import NotFoundPage from './pages/NotFoundPage';

import Layout from './layout/Layout';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='login' element={<LoginPage />} />
            <Route path='posts' element={<BlogPage />} />
            <Route path='posts/:id' element={<SinglePostPage />} />
            <Route path='posts/:id/edit' element={<EditPostPage />} />
            <Route
              path='posts/new'
              element={
                <RequireAuth>
                  <CreateNewPostPage />
                </RequireAuth>
              }
            />
            <Route path='about' element={<AboutPage />}>
              <Route path='contacts' element={<p>Our contacts</p>} />
              <Route path='team' element={<p>Our team</p>} />
            </Route>
            <Route path='about-us' element={<Navigate to={'/about'} replace />} />
            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
