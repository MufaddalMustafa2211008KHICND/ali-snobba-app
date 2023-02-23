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

test('button renders as primary button by default', async () => {
    //Arrange
    render(<Button>I'm a button</Button>)
    //Act
    const button = await screen.findByText("I'm a button");
    //Assert
    expect(button).toHaveClass('primary');
});

test('button should render as danger button when passed the type danger props', async () => {
    //Arrange
    render(<Button type='danger'>I'm a button</Button>)
    //Act
    const button = await screen.findByText("I'm a button");
    //Assert
    expect(button).toHaveClass('danger');
});

test('button should be disabled when disabled is true in the props', async () => {
    //Arrange
    render(<Button disabled={true}>I'm disabled</Button>)
    //Act
    const button = await screen.findByText("I'm disabled");
    //Assert
    expect(button).toHaveClass('disabled');
});

test('button should trigger callback on click', (done) => {
    const callback = (event) => {
        //ASSERT
        done();
    };
    // ARRANGE
    render(<Button onClick={callback}>Click me</Button>) 
    //ACT
    screen.findByText('Click me').then(button => {
      userEvent.click(button);
    })
   
  });

  test('button uses a link when a href is provided', async () => {
    // ARRANGE
    render(<Button href="/example">Link button</Button>)
    //ACT
    const link = await screen.findByRole('link');
    expect(link).toBeDefined();
  });
