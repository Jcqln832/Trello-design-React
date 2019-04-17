import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import STORE from './store'
import App from './App';
import List from './List';

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={Object.keys(STORE.allCards).map((key,index,array) => {
            const item = array[index];
            return {
                id: key,
                title: item.title,
                content: item.content
            }
        })} />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List cards={Object.values(STORE.allCards)}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});