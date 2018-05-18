package com.bookstore.repository;

import com.bookstore.domain.User;
import com.bookstore.domain.UserPayment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Manoj Baral on 4/26/2017.
 */
public interface UserRepository extends CrudRepository<User,Long> {

    User findByUsername(String username);
    User findByEmail(String email);
    List<User> findAll();
}
