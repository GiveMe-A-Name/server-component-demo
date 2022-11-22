/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { useState, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { useServerResponse } from './Cache.client';
import { LocationContext } from './LocationContext.client';

export default function Root({ initialCache }) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundary FallbackComponent={Error}>
        <Content />
      </ErrorBoundary>
    </Suspense>
  );
}

function Content() {
  // client 维护这部分状态
  const [location, setLocation] = useState({
    selectedFile: "blog-01.md"
  });
  const response = useServerResponse(location);
  return (
    <LocationContext.Provider value={[location, setLocation]}>
      {/* 直接在 Root.client.js 中引入的 client.component 会直接被打包进行 main.bundle.js  */}
      {response.readRoot()}
    </LocationContext.Provider>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Application Error</h1>
      <pre style={{ whiteSpace: 'pre-wrap' }}>{error.stack}</pre>
    </div>
  );
}
