package com.bookstore.repository;

import com.bookstore.domain.BookToCartItem;
import com.bookstore.domain.CartItem;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by Manoj Baral on 5/7/2018.
 */

@Transactional
public interface BookToCartItemRepository extends CrudRepository<BookToCartItem,Long> {
    void deleteByCartItem(CartItem cartItem);

//void save(BookToCartItem bookToCartItem);
}
