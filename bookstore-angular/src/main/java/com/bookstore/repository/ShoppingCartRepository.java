package com.bookstore.repository;

import com.bookstore.domain.ShoppingCart;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Manoj Baral on 5/7/2018.
 */
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart,Long>{
}
