import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputTodo from "./input";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {todoList, defaultState} from "../../store/todo-list";


// this is a handy function that I normally make available for all my tests
// that deal with connected components.
// you can provide initialState for the entire store that the ui is rendered with
export const renderWithRedux = (
    ui,
    { initialState, store = createStore(todoList, defaultState) } = {}
) => {
    return {
        ...render(<Provider store={store}>{ui}</Provider>),
        // adding `store` to the returned utilities to allow us
        // to reference it in our tests (just try to avoid using
        // this to test implementation details).
        store,
    }
};

describe('Input testing', () => {
    test('should render an input with a submit button', () => {
        const texteInput = "Add an Item:";
        const buttonLabel = "Add Todo";
        const { getByText } = renderWithRedux(
            <InputTodo buttonLabel={buttonLabel} texteInput={texteInput}/>
        );
        expect(getByText(texteInput)).toBeInTheDocument();
        expect(getByText(buttonLabel)).toBeInTheDocument();
    });
});
