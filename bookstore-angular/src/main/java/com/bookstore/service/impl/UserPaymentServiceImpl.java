package com.bookstore.service.impl;

import com.bookstore.domain.UserPayment;
import com.bookstore.repository.UserPaymentRepository;
import com.bookstore.service.UserPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by Manoj Baral on 9/20/2017.
 */

@Service
public class UserPaymentServiceImpl implements UserPaymentService{

    @Autowired
    private UserPaymentRepository userPaymentRepository;

    public UserPayment findById(Long id){
        return userPaymentRepository.findOne(id);
    }

    public void removeById(Long id){
        userPaymentRepository.delete(id);
    }
}
