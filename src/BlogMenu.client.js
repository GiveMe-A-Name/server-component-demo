import React, { useTransition } from 'react';
import { useLocation } from './LocationContext.client';
import BlogSearch from './BlogSearch.client';

/**
 * 
 * @param {object} props 
 * @param {string[]} props.menu
 * @returns 
 */
const BlogMenu = ({ menu }) => {
  const [location, setLocation] = useLocation();
  const [_, startTransition] = useTransition();

  return <div style={{
    margin: '30px'
  }}>
    <h3>Blog Menu</h3>
    <BlogSearch />
    <ul style={{
      padding: 0
    }}>
      {menu.map(filename => <li
        className='blog-menu-item'
        onClick={() => {
          startTransition(() => {
            setLocation({
              ...location,
              selectedFile: filename
            })
          })
        }}
        key={filename}>{filename}</li>)}
    </ul>
  </div>
}

export default BlogMenu;