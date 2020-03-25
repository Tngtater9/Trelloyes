import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';



describe("<Card />", () => {
    it("checks to see if Card with props crashes", () => {
        const container = document.createElement('div');
        ReactDOM.render(<Card title="some title" content="some content" />, container);

        ReactDOM.unmountComponentAtNode(container);
    })
    it("checks snapshot of Card",() => {
        const tree = renderer
        .create(<Card title="some title" content="some content" />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
} )