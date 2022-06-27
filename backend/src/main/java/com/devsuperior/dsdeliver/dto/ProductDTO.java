package com.devsuperior.dsdeliver.dto;

import com.devsuperior.dsdeliver.entities.Product;
import com.devsuperior.dsdeliver.entities.ProductTypeEnum;
import lombok.Data;

import java.io.Serializable;

@Data
public class ProductDTO implements Serializable {

    private static final long serialVersionUID = 1L;

    private Long id;
    private ProductTypeEnum type;
    private String name;
    private Double price;
    private String description;
    private String imageUri;

    public ProductDTO() {
    }

    public ProductDTO(Long id, ProductTypeEnum type, String name, Double price, String description, String imageUri) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.price = price;
        this.description = description;
        this.imageUri = imageUri;
    }

    public ProductDTO(Product entity) {
        id = entity.getId();
        type = entity.getType();
        name = entity.getName();
        price = entity.getPrice();
        description = entity.getDescription();
        imageUri = entity.getImageUri();
    }
}
