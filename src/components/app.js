import React from 'react';
import '../assets/css/app.scss';
import Demo from './demo';

const App = () => (
    <div>
        <h1 className="center">Image Loading Demo</h1>

        <Demo />

        <h2 className="center">This is at the bottom, below loading image</h2>
    </div>
);

export default App;
