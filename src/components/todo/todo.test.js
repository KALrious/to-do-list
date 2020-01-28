import React from "react";
import {renderWithRedux} from "../input/input.test";
import Todo from "./todo";


describe('Input testing', () => {
    test('should render a todo', () => {
        const todo = "dire que je suis une merde";
        const { getByText } = renderWithRedux(
            <Todo todo={todo}/>
        );
        expect(getByText(todo)).toBeInTheDocument();
    });

});