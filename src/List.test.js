import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from './store';

const list = {
    id: '1',
    header: 'First list',
    cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
  }

const store = STORE;

describe("<List />", () => {
    it("checks to see if List with props crashes", () => {
        const container = document.createElement('div');
        ReactDOM.render(<List key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])} />, container);

        ReactDOM.unmountComponentAtNode(container);
    })
    it("checks snapshot of List",() => {
        const tree = renderer
        .create(<List key={list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    })
} )