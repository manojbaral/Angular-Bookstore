package com.bookstore.resource;

import com.bookstore.domain.Order;
import com.bookstore.domain.User;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.List;

/**
 * Created by Manoj Baral on 5/9/2018.
 */

@RestController
@RequestMapping("/order")
public class OrderResource {

    @Autowired
    private UserService userService;

    //Request Mapping for OrderList
    @RequestMapping("/getOrderList")
    public List<Order> getOrderList(
        Principal principal
    ) {
        User user = userService.findByUsername(principal.getName());
       List<Order> orderList = user.getOrderList();

        return orderList;
    }
}
