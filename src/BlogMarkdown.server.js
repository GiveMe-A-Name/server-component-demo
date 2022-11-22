/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import marked from 'marked';
import sanitizeHtml from 'sanitize-html';
import * as fs from 'fs';
import * as path from 'path';

const allowedTags = sanitizeHtml.defaults.allowedTags.concat([
  'img',
  'h1',
  'h2',
  'h3',
]);
const allowedAttributes = Object.assign(
  {},
  sanitizeHtml.defaults.allowedAttributes,
  {
    img: ['alt', 'src'],
  }
);

function readFile(filename) {
  const filepath = path.join(__dirname, `../blogs/${filename}`);
  const content = fs.readFileSync(filepath, 'utf-8');

  return content;
}

export default function BlogMarkdown({ filename }) {
  const text = filename ? readFile(filename) : "# 请选择你的 blog";

  return (
    <div
      className="text-with-markdown"
      dangerouslySetInnerHTML={{
        __html: sanitizeHtml(marked(text), {
          allowedTags,
          allowedAttributes,
        }),
      }}
    />
  );
}
