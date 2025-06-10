package com.example.realEstateBackend.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PropertyDTO {
    private String type;
    private String bhk;
    private String bathrooms;
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
    private String state;
    private String name;
    private String mobile;
    private String email ;
}
