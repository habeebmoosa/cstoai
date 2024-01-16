import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './public/pages/Home';
import { NotFound } from './public/pages/404';
import { About } from './public/pages/About';
import { Contact } from './public/pages/Contact';
import { PostPage } from './public/pages/PostPage';
import { ListOfPostByTag } from './public/components/ListOfPostByTag';
import { AuthorInfoAndPosts } from './public/components/AuthorInfoAndPosts';
import { BlogLayout } from './public/layouts/BlogLayout';
import { ListOfPostBySearch } from './public/components/ListOfPostBySearch';
import { DashboardLayout } from './admin/layouts/DashboardLayout';
import { CreatePost } from './admin/pages/CreatePost';
import { ListOfPosts } from './admin/pages/ListOfPosts';
import { EditPost } from './admin/pages/EditPost';
import { ContactFeedback } from './admin/pages/ContactFeedback';
import { AuthLayout } from './admin/layouts/AuthLayout';
import { Signup } from './admin/pages/auth/Signup';
import { Signin } from './admin/pages/auth/Signin';
import { AdminHome } from './admin/pages/AdminHome';
import { ListOfUsers } from './admin/pages/ListOfUsers';
import { Settings } from './admin/pages/Settings';
import { ResetPaaaword } from './admin/pages/auth/ResetPassword';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<BlogLayout />}>
          <Route index element={<Home />} />
          <Route path=':url' element={<PostPage />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path='author/:username' element={<AuthorInfoAndPosts />} />
          <Route path='tags/:tag' element={<ListOfPostByTag />} />
          <Route path='search' element={<ListOfPostBySearch />} />

        </Route>

        <Route path='admin'>
          <Route index element={<AdminHome />} />

          <Route path='auth' element={<AuthLayout />}>
            <Route path='signup' element={<Signup />} />
            <Route path='signin' element={<Signin />} />
            <Route path='forgotpassword' element={<h1>forgotpassword</h1>} />
            <Route path='resetpassword' element={<ResetPaaaword />} />
          </Route>

          <Route path='dashboard' element={<DashboardLayout />}>
            <Route path='posts'>
              <Route index element={<ListOfPosts />} />
              <Route path='create' element={<CreatePost />} />
              <Route path='edit/:url' element={<EditPost />} />
            </Route>
            <Route path='contacts' element={<ContactFeedback />} />
            <Route path='users' element={<ListOfUsers />} />
            <Route path='settings' element={<Settings />} />
          </Route>

        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
