
import {ReactInstance} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    fullScreen: true,
    ...options,
  });

  r360.renderToSurface(
    r360.createRoot('kolo', {
      photos: [
        {uri: './static_assets/sudarihuone.jpg', title: 'Sudenpentuhuone', format: '2D', mapUri: './static_assets/sudari_map.png'},
        {uri: './static_assets/roundroom.jpg', title: 'Pyöreähuone', format: '2D', mapUri: './static_assets/round_map.png'},
        {uri: './static_assets/kantti.jpg', title: 'Kantti', format: '2D', mapUri: './static_assets/kantti_map.png'},
        {uri: './static_assets/komuutti.jpg', title: 'Komuutti', format: '2D', mapUri: './static_assets/komuutti_map.png'},
        // Add your own 180 / 360 photos to this array,
        // with an associated title and format
      ],
    }),
    r360.getDefaultSurface(),
  );
}

window.React360 = {init};