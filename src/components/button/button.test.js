import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {renderWithRedux} from "../input/input.test";
import Button from "./button";

const Label = ({label}) => <label>{label}</label>;
describe('Input testing', () => {
    test('should render an input with a submit button', () => {
        const label = "button";
        const buttonLabel = "Add Todo";
        const { getByText } = renderWithRedux(
            <Button active onClick={()=>console.log('click')}>
                <Label label={label}/>
            </Button>
        );
        expect(getByText(label)).toBeInTheDocument();
    });

});
