package com.bookstore.service;

import com.bookstore.domain.ShoppingCart;

/**
 * Created by Manoj Baral on 5/7/2018.
 */
public interface ShoppingCartService {

    ShoppingCart updateShoppingCart(ShoppingCart shoppingCart);

    void clearShoppingCart(ShoppingCart shoppingCart);
}
