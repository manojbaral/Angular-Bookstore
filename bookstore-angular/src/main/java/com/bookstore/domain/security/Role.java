package com.bookstore.domain.security;

import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Manoj Baral on 4/25/2017.
 */

@Entity
public class Role implements Serializable{


    private static final long serialVersionUID = 8206853130731332053L;
    @Id
    private int roleId;
    private String name;

    @OneToMany(mappedBy = "role",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private Set<UserRole> userRoles=new HashSet<>();

    //Default Constructor
    public Role() {
    }

    //Getter and setters

    public int getRoleId() {
        return roleId;
    }

    public void setRoleId(int roleId) {
        this.roleId = roleId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<UserRole> getUserRoles() {
        return userRoles;
    }

    public void setUserRoles(Set<UserRole> userRoles) {
        this.userRoles = userRoles;
    }
}
