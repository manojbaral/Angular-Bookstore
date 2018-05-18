package com.bookstore.service;

import com.bookstore.domain.Book;

import java.util.List;

/**
 * Created by Manoj Baral on 4/29/2017.
 */
public interface BookService {

    List<Book> findAll();

    Book findOne(Long id);

    Book save(Book book);

    List<Book> blurrySearch(String title);

    void removeOne(Long id);
}
