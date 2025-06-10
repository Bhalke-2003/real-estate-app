package com.example.realEstateBackend.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "properties")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String type;
    private Integer bhk;
    private Integer bathrooms;
    private String furnishing;
    private String projectStatus;
    private String listedBy;
    private Double superBuiltupArea;
    private Double carpetArea;
    private Double maintenance;
    private Integer totalFloors;
    private Integer floorNo;
    private String carParking;
    private String facing;
    private String projectName;
    private String adTitle;
    private String description;
    private Double price;
    private String imagePath;  // storing file name
    private String state;
    private String name;
    private String mobile;
    private String email ;

    // Getters and setters (or use Lombok @Data)
}
