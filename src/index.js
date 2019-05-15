import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Cropper from  './pages/blogs-create/cropper';
import '../src/pages/blogs-create/style.css';
// import CircularProgress from './pages/blogs-create/circular-progressBar';

ReactDOM.render( <
    App / > ,
    document.getElementById('root')
);
registerServiceWorker();