package com.bookstore.service;

import com.bookstore.domain.Book;
import com.bookstore.domain.CartItem;
import com.bookstore.domain.ShoppingCart;
import com.bookstore.domain.User;

import java.util.List;

/**
 * Created by Manoj Baral on 5/7/2018.
 */
public interface CartItemService {

    //Add Book to Cart
    CartItem addBookToCartItem(Book book, User user,int qty);

    List<CartItem> findByShoppingCart(ShoppingCart shoppingCart);

    //List<CartItem> findByOrder(Order order);

    //Update Cart Item
    CartItem updateCartItem(CartItem cartItem);

    //Remove Cart Item
    void removeCartItem(CartItem cartItem);
    CartItem findById(Long id);
    CartItem save(CartItem cartItem);

}
