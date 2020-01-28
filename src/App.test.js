import React from "react";
import App from "./App";
import {renderWithRedux} from "./components/input/input.test";
import { fireEvent } from '@testing-library/react';


describe('Input testing', () => {
    test('should render a todo when click on the a submit button', () => {
        const { getByPlaceholderText, getByText } = renderWithRedux(
            <App />
        );
        fireEvent.change(getByPlaceholderText("input-text"), {
            target: { value: "new value" }
        });
        fireEvent.click(getByText("Submit todo"));
        expect(getByText("new value")).toBeInTheDocument();
    });

});