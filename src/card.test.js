import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store'
import Card from './Card';

describe('Card component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const card = STORE.allCards.a;
        ReactDOM.render(<Card title={card.title} content = {card.content} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const card = STORE.allCards.a;
        const tree = renderer
        .create(<Card title={card.title} content = {card.content} />)
        .toJSON();
        expect(tree).toMatchSnapshot();
    });
});