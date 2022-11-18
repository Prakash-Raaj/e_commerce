import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Button,
} from '@material-ui/core';
import useStyle from './CartStyles';
import CartItem from './CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = ({
  cart,
  handleUpdateCartQty,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyle();
  console.log(cart);

  const EmptyCart = () => (
    <Typography variant="subtitle1">
      You have no items in the shopping cart,{' '}
      <Link to="/" className={classes.link}>
        start adding some
      </Link>
    </Typography>
  );

  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cartDetails}>
        <Typography variant="h4">
          Subtotal:{cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            variant="contained"
            color="secondary"
            type="button"
            onClick={handleEmptyCart}
          >
            Empty Cart
          </Button>
          <Button
            className={classes.checkoutButton}
            size="large"
            variant="contained"
            color="primary"
            type="button"
            component={Link}
            to="/checkout"
          >
            Check out
          </Button>
        </div>
      </div>
    </>
  );
  if (!cart.line_items) return 'Loading...';
  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
