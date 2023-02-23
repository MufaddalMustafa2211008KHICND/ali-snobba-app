import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import ProductCard from './ProductCard';

import mockData from '../../mockData'
import { BrowserRouter, Router } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


test('ProductCard renders', async () => {
    //Arrange
    render(<BrowserRouter><ProductCard product={mockData[0]}/></BrowserRouter>)
    //Act
    const element = await screen.findByText(mockData[0].name);
    //Assert
    expect(element).toBeInTheDocument();
});

test('canAddToCart props is true by default, so Add to cart button will be displayed', async () => {
    //Arrange
    render(<BrowserRouter><ProductCard product={mockData[0]}/></BrowserRouter>)
    //Act
    const button = await screen.findByText('Add to Cart');
    //Assert
    expect(button).toBeInTheDocument();
});

test('when canAddToCart props is false, Add to cart button will not be displayed', async () => {
    //Arrange
    render(<BrowserRouter><ProductCard canAddToCart={false} product={mockData[0]}/></BrowserRouter>)
    //Act
    const button = screen.queryByText('Add to Cart');
    //Assert
    expect(button).toBeNull();
});

test('when canAddToCart props is false, x button is displayed', async () => {
    //Arrange
    render(<BrowserRouter><ProductCard canAddToCart={false} product={mockData[0]}/></BrowserRouter>)
    //Act
    const xIcon = screen.queryByTestId('closeBtn');
    //Assert
    expect(xIcon).toBeInTheDocument();
});

test('onAddToCart Callback is called when the Add to cart button is called', (done) => {
    const callback = (event) => {
        //ASSERT
        done();
    };
    // ARRANGE
    render(<BrowserRouter><ProductCard onAddToCart={callback} product={mockData[0]}/></BrowserRouter>)
    //ACT
    screen.findByText('Add to Cart').then(button => {
      userEvent.click(button);
    })
   
  });