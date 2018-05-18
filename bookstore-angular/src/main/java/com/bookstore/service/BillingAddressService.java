package com.bookstore.service;

import com.bookstore.domain.BillingAddress;
import com.bookstore.domain.UserBilling;

/**
 * Created by Manoj Baral on 5/9/2018.
 */
public interface BillingAddressService {
    BillingAddress setByUserBilling(UserBilling userBilling, BillingAddress billingAddress);
}
