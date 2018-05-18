package com.bookstore.service;


import com.bookstore.domain.*;

/**
 * Created by Manoj Baral on 5/9/2018.
 */
public interface OrderService {

    Order createOrder(
        ShoppingCart shoppingCart,
        ShippingAddress shippingAddress,
        BillingAddress billingAddress,
        Payment payment,
        String shippingMethod,
        User user
    );

}

//    //Order using Findone
//    Order findOne(Long id);
//}
