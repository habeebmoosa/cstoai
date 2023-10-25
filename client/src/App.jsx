import React from 'react';
import {Route, Routes} from 'react-router-dom';
import { Home } from './pages/Home';
import { Navbar } from "./components/Navbar";
import { Footer } from './components/Footer';
import { NotFound } from './pages/404';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import {PostPage} from './pages/PostPage';
import { ListOfPostByTag } from './components/ListOfPostByTag';
import { AuthorInfoAndPosts } from './components/AuthorInfoAndPosts';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/:url' element={<PostPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/author/:username' element={<AuthorInfoAndPosts/>} />
        <Route path='/tags/:tag' element={<ListOfPostByTag/>} />
      </Routes>
      <Footer />
    </div>
  )
}
