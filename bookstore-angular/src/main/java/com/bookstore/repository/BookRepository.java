package com.bookstore.repository;

import com.bookstore.domain.Book;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

/**
 * Created by Manoj Baral on 4/29/2017.
 */
public interface BookRepository extends CrudRepository<Book,Long >{
    List<Book> findByTitleContaining(String keyword);
}
