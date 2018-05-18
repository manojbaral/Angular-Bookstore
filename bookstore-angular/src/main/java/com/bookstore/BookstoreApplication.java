package com.bookstore;

import com.bookstore.config.SecurityUtility;
import com.bookstore.domain.User;
import com.bookstore.domain.security.Role;
import com.bookstore.domain.security.UserRole;
import com.bookstore.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.HashSet;
import java.util.Set;

@SpringBootApplication
public class BookstoreApplication implements CommandLineRunner{

    @Autowired
    private UserService userService;

	public static void main(String[] args) {
		SpringApplication.run(BookstoreApplication.class, args);
	}

    @Override
    public void run(String... args) throws Exception {
        User user1=new User();
        user1.setFirstName("Manoj");
        user1.setLastName("Baral");
        user1.setUsername("manojb27");
        user1.setPassword(SecurityUtility.passwordEncoder().encode("root"));
        user1.setEmail("manoj@springboot.java");

        Set<UserRole> userRoles=new HashSet<>();
        Role role1=new Role();
        role1.setRoleId(1);
        role1.setName("ROLE_USER");
        userRoles.add(new UserRole(user1,role1));
        userService.createUser(user1,userRoles);
        userRoles.clear();

        User user2=new User();
        user2.setFirstName("John");
        user2.setLastName("Doe");
        user2.setUsername("john");
        user2.setPassword(SecurityUtility.passwordEncoder().encode("john"));
        user2.setEmail("john@springmvc.java");

        Role role2=new Role();
        role2.setRoleId(0);
        role2.setName("ROLE_ADMIN");
        userRoles.add(new UserRole(user2,role2));
        userService.createUser(user2,userRoles);

//        //user 3
//        User user3=new User();
//        user3.setFirstName("Johnny");
//        user3.setLastName("boy");
//        user3.setUsername("j");
//        user3.setPassword(SecurityUtility.passwordEncoder().encode("jj"));
//        user3.setEmail("j@spring.java");
//
//        Role role3=new Role();
//        role3.setRoleId(2);
//        role3.setName("ROLE_ADMIN");
//        userRoles.add(new UserRole(user3,role3));
//        userService.createUser(user3,userRoles);


    }
}
