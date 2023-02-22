import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Button from './Button';

test('button renders', async () => {
    //Arrange
    render(<Button>I'm a button</Button>)
    //Act
    const button = await screen.findByText("I'm a button");
    //Assert
    expect(button).toBeInTheDocument();
});