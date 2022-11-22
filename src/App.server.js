import React from 'react';
import * as fs from 'fs';
import * as path from 'path';
import BlogMenu from './BlogMenu.client';
import BlogMarkdown from './BlogMarkdown.server';

function getBlogsFilename(searchText) {
  const blogsDir = path.join(__dirname, '../blogs');
  const dirs = fs.readdirSync(blogsDir).filter((dir) => dir.includes(searchText || ''));
  return dirs;
}

export default function App({ selectedFile, searchText }) {

  const blogsFilename = getBlogsFilename(searchText);

  return (
    <main className='app_server__container'>
      <BlogMenu menu={blogsFilename} />
      <BlogMarkdown filename={selectedFile} />

    </main>
  );
}
