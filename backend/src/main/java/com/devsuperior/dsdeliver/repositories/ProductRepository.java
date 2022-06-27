package com.devsuperior.dsdeliver.repositories;

import com.devsuperior.dsdeliver.entities.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByOrderByNameAsc();

    @Query(" select distinct obj from Product obj " +
            " order by obj.type asc ")
    List<Product> findAllTypeAsc();
}
