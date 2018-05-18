package com.bookstore.repository;

import com.bookstore.domain.Order;
import com.bookstore.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Manoj Baral on 5/10/2018.
 */
public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findByUser(User user);
}
