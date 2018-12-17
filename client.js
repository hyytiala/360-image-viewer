// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Location, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const label = new Surface(300, 300, Surface.SurfaceShape.Flat);
  label.setAngle(-0.9, -0.1);
  r360.renderToSurface(
    r360.createRoot('label'),
    label,
  );
  const closet = new Surface(300, 300, Surface.SurfaceShape.Flat);
  closet.setAngle(10.7, -0.1);
  r360.renderToSurface(
    r360.createRoot('closet'),
    closet,
  );
  const bench = new Surface(300, 300, Surface.SurfaceShape.Flat);
  bench.setAngle(15, -0.35);
  r360.renderToSurface(
    r360.createRoot('bench'),
    bench,
  );
  // Render your app content to the default cylinder surface
  r360.renderToSurface(
    r360.createRoot('kolo', { /* initial props */ }),
    r360.getDefaultSurface()
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('sudarihuone.jpg'));
}

window.React360 = {init};
