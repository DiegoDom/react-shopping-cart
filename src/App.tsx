import { useState } from 'react';
import { useQuery } from 'react-query';

//Components
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Item from './components/Item';

//Styles
import { Wrapper } from './App.styles';

//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const getProducts = async(): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts );

  const getTotalItems = () => null;

  const handleAddToCart = () => null;

  const handleRemoveFromCart = (clickedItem: CartItemType) => null;

  if (isLoading) return <LinearProgress/>;
  if (error) return <div>Something went wrong...</div>;

  return (
    <Wrapper>
      <Drawer anchor='right' open={ cartOpen } onClose={ () => setCartOpen(false) }>
        Cart goes here
      </Drawer>
      <Grid container spacing={3}>
        { data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={ item } handleAddToCart={ handleAddToCart } />
          </Grid>
        )) }
      </Grid>
    </Wrapper>
  );
}

export default App;
