import React from 'react';
import useStyle from './styles';
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';

const CartItem = ({
  item,
  handleUpdateCartQty,
  handleRemoveFromCart,
}) => {
  const classes = useStyle();
  return (
    <Card>
      <CardMedia
        image={item.image.url}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name}</Typography>
        <Typography variant="h5">
          {item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="buton"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity - 1);
            }}
          >
            -
          </Button>
          <Typography>{item.quantity}</Typography>
          <Button
            type="buton"
            size="small"
            onClick={() => {
              handleUpdateCartQty(item.id, item.quantity + 1);
            }}
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => {
            handleRemoveFromCart(item.id);
          }}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
