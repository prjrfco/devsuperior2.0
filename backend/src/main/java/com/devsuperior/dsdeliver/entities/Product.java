package com.devsuperior.dsdeliver.entities;

import lombok.Data;
import net.bytebuddy.implementation.bind.annotation.Default;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "tb_product")
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double price;

    private String description;

    private String imageUri;

    @Enumerated(EnumType.STRING)
    private ProductTypeEnum type;

    public Product() {
    }

    public Product(Long id, ProductTypeEnum type, String name, Double price, String description, String imageUri) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUri = imageUri;
    }
}
