import React from 'react'
import { CardMedia, Card, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

import useStyles from './styles'

const Product = ({product}) => {

    const classes = useStyles();

    return (
        <Card className = {classes.root} >
            <CardMedia className = {classes.media}  image = {product.image} title = {product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" >
                       Price: {product.price}
                    </Typography>
                    <Typography variant="h7" color="textSecondary"  >{product.description}</Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={classes.CardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCartIcon/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
