package com.bookstore.resource;

import com.bookstore.domain.Book;
import com.bookstore.service.BookService;
import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 * Created by Manoj Baral on 4/29/2017.
 */



@RestController
@RequestMapping("/book")
public class BookResource {
    private String imageName;

    @Autowired
    private BookService bookService;

    // @Autowired
    //private UserService userService;

    //Add Image
    @RequestMapping(value = "/add/image", method = RequestMethod.POST)
    public ResponseEntity upload(
        @RequestParam("id") Long id,
        HttpServletResponse response, HttpServletRequest request
    ) {
        try {
            Book book = bookService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id + ".png";
            imageName = fileName;

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream =
                new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/" + fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload Failed!", HttpStatus.BAD_REQUEST);
        }

    }

    //Update Image
    @RequestMapping(value = "/update/image", method = RequestMethod.POST)
    public ResponseEntity updateImagePost(
        @RequestParam("id") Long id,
        HttpServletResponse response, HttpServletRequest request
    ) {
        try {
            Book book = bookService.findOne(id);
            MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;
            Iterator<String> it = multipartRequest.getFileNames();
            MultipartFile multipartFile = multipartRequest.getFile(it.next());
            String fileName = id + ".png";
            imageName = fileName;

            Files.delete(Paths.get("src/main/resources/static/image/book/" + fileName));

            byte[] bytes = multipartFile.getBytes();
            BufferedOutputStream stream =
                new BufferedOutputStream(new FileOutputStream(new File("src/main/resources/static/image/book/" + fileName)));
            stream.write(bytes);
            stream.close();

            return new ResponseEntity("Upload Success!", HttpStatus.OK);

        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity("Upload Failed!", HttpStatus.BAD_REQUEST);
        }

    }

    //Add Book
    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public Book addBookPost(@RequestBody Book book) {
        return bookService.save(book);
    }

    //Update Book
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public Book updateBookPost(@RequestBody Book book) {
        return bookService.save(book);
    }


    //Book List
    @RequestMapping("/bookList")
    public List<Book> getBookList() {
        return bookService.findAll();
    }

    //Remove Book
    @RequestMapping(value = "/remove", method = RequestMethod.POST)
    public ResponseEntity remove(
        @RequestBody String id
    )throws IOException{
        bookService.removeOne(Long.parseLong(id));
        String fileName = id + ".png";

        Files.delete(Paths.get("src/main/resources/static/image/book/" + fileName));
        return new ResponseEntity("Remove Success",HttpStatus.OK);

    }


    @RequestMapping("/{id}")
    public Book getBook(
        @PathVariable("id") Long id
    ) {
        Book book = bookService.findOne(id);
        return book;
    }
}