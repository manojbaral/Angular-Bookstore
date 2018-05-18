package com.bookstore.repository;

import com.bookstore.domain.UserPayment;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Manoj Baral on 9/20/2017.
 */
public interface UserPaymentRepository extends CrudRepository<UserPayment, Long>{
    UserPayment findOne(Long id);

    void delete(Long id);
}
