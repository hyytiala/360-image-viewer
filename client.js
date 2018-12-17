
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('kolo', {
      photos: [
        {uri: './static_assets/sudarihuone.jpg', title: 'Sudenpentuhuone', format: '2D'},
        {uri: './static_assets/kantti.jpg', title: 'Kantti', format: '2D'},
        {uri: './static_assets/roundroom.jpg', title: 'Pyöreähuone', format: '2D'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};