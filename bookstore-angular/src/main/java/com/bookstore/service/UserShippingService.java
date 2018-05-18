package com.bookstore.service;

import com.bookstore.domain.UserShipping;

/**
 * Created by Manoj Baral on 9/22/2017.
 */
public interface UserShippingService {

//    Methods
    UserShipping findById(Long id);

    void removeById(Long id);
}
