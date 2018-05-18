package com.bookstore.domain.security;

import org.springframework.security.core.GrantedAuthority;

import java.io.Serializable;

/**
 * Created by Manoj Baral on 4/25/2017.
 */
public class Authority implements GrantedAuthority,Serializable{

    private static final long serialVersionUID = -8500054277948601802L;

    private final String authority;

    public Authority(String authority) {
        this.authority=authority;
    }

    @Override
    public String getAuthority() {
        return authority;
    }
}
