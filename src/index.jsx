import React from 'react';
import ReactDOM from 'react-dom';
import Number from './number';


function App() {
    return (
        <div>
            <Number value={42} /> {/* Passing any number (e.g., 42) as a prop */}
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));
