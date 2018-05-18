package com.bookstore.repository;

import com.bookstore.domain.security.Role;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Manoj Baral on 4/26/2017.
 */
public interface RoleRepository extends CrudRepository<Role, Long> {
}
