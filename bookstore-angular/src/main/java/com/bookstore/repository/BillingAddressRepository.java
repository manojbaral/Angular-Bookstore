package com.bookstore.repository;

import com.bookstore.domain.BillingAddress;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by Manoj Baral on 5/10/2018.
 */
public interface BillingAddressRepository extends CrudRepository<BillingAddress,Long>{
}
