import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import TestForm from './Form';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<Provider>
    <TestForm />
</Provider>

, document.getElementById('root'));
registerServiceWorker();
