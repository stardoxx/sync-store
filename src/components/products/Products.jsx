import React from 'react'
import {Grid} from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';

const products = [
    {id: 1, name:'shoes', price:12, description: 'running shoes...',image:'https://i0.wp.com/post.healthline.com/wp-content/uploads/2020/01/268453-Best_Running_Shoes_for_Flat_Feet-1296x728-header-1296x728.jpg?w=1155&h=1528'},
    {id: 2, name:'book', price: 23, description: 'best selling...', image: 'https://d2r68eeixpqexd.cloudfront.net/41fd2ced63aa8d47a3142fa4cd46849b.jpg'},
]


const Products = () => {
    const classes = useStyles();
    return (
        <main className= {classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify = "center" spacing = {4}>
                {products.map((product) =>(
                    <Grid item key={product} xs = {12} sm = {6} md = {4} lg = {3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;
