import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import { Footer } from './components/Footer';
import { NotFound } from './pages/404';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { PostPage } from './pages/PostPage';
import { ListOfPostByTag } from './components/ListOfPostByTag';
import { AuthorInfoAndPosts } from './components/AuthorInfoAndPosts';
import { BlogLayout } from './layouts/BlogLayout';
import { ListOfPostBySearch } from './components/ListOfPostBySearch';

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
        <Route path='/admin' element={<h1>admin dashboard</h1>}>
          <Route path='auth'>
            <Route path='signup' element={<h1>signup</h1>} />
            <Route path='signin' element={<h1>signin</h1>} />
            <Route path='forgotpassword' element={<h1>forgotpassword</h1>} />
            <Route path='resetpassword' element={<h1>resetpassword</h1>} />
          </Route>
          <Route path='dashboard'>
            <Route path='posts' element={<h1>posts</h1>} >
              <Route path='create' element={<h1>create</h1>} />
              <Route path='edit/:id' element={<h1>edit</h1>} />
            </Route>
            <Route path='contacts' element={<h1>contacts</h1>} />
            <Route path='comments' element={<h1>comments</h1>} />
            <Route path='users' element={<h1>users</h1>} />
            <Route path='tags' element={<h1>tags</h1>} />
            <Route path='settings' element={<h1>settings</h1>} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}
