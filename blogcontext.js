import React,{useContext} from "react";
import {BlogContext} from './App';

function BlogContextDemo() {
const binfo = useContext(BlogContext);
return (
<div>
<p><h2>Topic : {binfo.React.post}</h2></p>
<p><h2>Author : {binfo.React.author}</h2></p>
</div>

);
}

export default BlogContextDemo;

//App.js
import React from 'react';
import BlogContextDemo from './BlogContextDemo'

const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};
export const BlogContext = React.createContext(blogInfo);

export default function App() {
  return (
   
    <div>
    <h1>useContext() Demo</h1>
    <BlogContext.Provider  value={blogInfo}>
   
    <BlogContextDemo />
    </BlogContext.Provider>
    </div>
 
  );
}



