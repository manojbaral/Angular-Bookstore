package com.bookstore.service;

import com.bookstore.domain.Payment;
import com.bookstore.domain.UserPayment;

/**
 * Created by Manoj Baral on 5/9/2018.
 */
public interface PaymentService {
    Payment setByUserPayment(UserPayment userPayment, Payment payment);
}
