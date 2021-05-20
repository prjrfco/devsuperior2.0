package com.devsuperior.dsdeliver.repositories;

import com.devsuperior.dsdeliver.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

    @Query(" select distinct obj from Order obj " +
            " join fetch obj.products " +
            " where obj.status = 0 " +
            " order by obj.moment asc ")
    List<Order> findOrdersWithProducts();
}
