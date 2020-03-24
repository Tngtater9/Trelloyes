import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card.js';



describe("<Card />", () => {
    
    it("checks to see if Card crashes", () => {
        const container = document.createElement('div');
        ReactDOM.render(<Card />, container);

        ReactDOM.unmountComponentAtNode('div');
    })
} )