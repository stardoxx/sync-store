import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'; 
import useStyles from './styles'
import logo from '../../assets/shops.png'

const Navbar = () => {

    const classes = useStyles();

    return (
        <AppBar position = 'fixed' className = {classes.appBar} color = 'inherit' >
            <Toolbar>
                <Typography variant="h6" color="inherit" className = {classes.title}>
                    <img src = {logo} alt = 'SyncShop' height = "25px" className = {classes.image}  />
                    Sync/shop
                </Typography>
                <div className={classes.grow} />
                <div className ={classes.button} >
                    <IconButton aria-label = "show cart items" color = 'inherit' > 
                        <Badge badgeContent = {2} color = 'secondary'>
                            <ShoppingCartIcon />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
