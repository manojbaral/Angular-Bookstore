package com.bookstore.service;

import com.bookstore.domain.UserPayment;

/**
 * Created by Manoj Baral on 9/20/2017.
 */
public interface UserPaymentService {
    UserPayment findById(Long id);

    void removeById(Long id);

}
