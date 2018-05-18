package com.bookstore.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

/**
 * Created by Manoj Baral on 9/22/2017.
 */

@Entity
public class UserShipping implements Serializable{

    private static final long serialVersionUID = -499296641320331944L;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

//    Instance Variable
    private Long id;
    private String userShippingName;
    private String userShippingStreet1;
    private String userShippingStreet2;
    private String userShippingCity;
    private String userShippingState;
    private String userShippingCountry;
    private String userShippingZipcode;
    private Boolean userShippingDefault;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

//    Getter and setter


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUserShippingName() {
        return userShippingName;
    }

    public void setUserShippingName(String userShippingName) {
        this.userShippingName = userShippingName;
    }

    public String getUserShippingStreet1() {
        return userShippingStreet1;
    }

    public void setUserShippingStreet1(String userShippingStreet1) {
        this.userShippingStreet1 = userShippingStreet1;
    }

    public String getUserShippingStreet2() {
        return userShippingStreet2;
    }

    public void setUserShippingStreet2(String userShippingStreet2) {
        this.userShippingStreet2 = userShippingStreet2;
    }

    public String getUserShippingCity() {
        return userShippingCity;
    }

    public void setUserShippingCity(String userShippingCity) {
        this.userShippingCity = userShippingCity;
    }

    public String getUserShippingState() {
        return userShippingState;
    }

    public void setUserShippingState(String userShippingState) {
        this.userShippingState = userShippingState;
    }

    public String getUserShippingCountry() {
        return userShippingCountry;
    }

    public void setUserShippingCountry(String userShippingCountry) {
        this.userShippingCountry = userShippingCountry;
    }

    public String getUserShippingZipcode() {
        return userShippingZipcode;
    }

    public void setUserShippingZipcode(String userShippingZipcode) {
        this.userShippingZipcode = userShippingZipcode;
    }

    public Boolean getUserShippingDefault() {
        return userShippingDefault;
    }

    public void setUserShippingDefault(Boolean userShippingDefault) {
        this.userShippingDefault = userShippingDefault;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
