package com.example.realEstateBackend.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.realEstateBackend.entity.Property;
import com.example.realEstateBackend.repository.PropertyRepository;
import com.example.realEstateBackend.service.PropertyService;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000")
public class PropertyController {

    @Autowired
    private PropertyService propertyService;

    private PropertyRepository propertyRepo ;

    @PostMapping("/add")
    public ResponseEntity<?> addProperty(
            @RequestParam String type,
            @RequestParam Integer bhk,
            @RequestParam Integer bathrooms,
            @RequestParam String furnishing,
            @RequestParam String projectStatus,
            @RequestParam String listedBy,
            @RequestParam Double superBuiltupArea,
            @RequestParam Double carpetArea,
            @RequestParam Double maintenance,
            @RequestParam Integer totalFloors,
            @RequestParam Integer floorNo,
            @RequestParam String carParking,
            @RequestParam String facing,
            @RequestParam String projectName,
            @RequestParam String adTitle,
            @RequestParam String description,
            @RequestParam Double price,
            @RequestParam String state,
            @RequestParam String name,
            @RequestParam String mobile,
            @RequestParam("photos") MultipartFile[] photos  // Accept multiple files here
    ) throws IOException {

        Property property = propertyService.saveProperty(type, bhk, bathrooms, furnishing, projectStatus,
                listedBy, superBuiltupArea, carpetArea, maintenance, totalFloors, floorNo,
                carParking, facing, projectName, adTitle, description, price, state,
                name, mobile, photos);

        return new ResponseEntity<>(property, HttpStatus.CREATED);
    }


    // GET all properties
    @GetMapping("/all")
    public List<Property> getAllProperties() {
        return propertyRepo.findAll();
    }

    // GET property by id (optional)
    @GetMapping("/{id}")
    public Property getPropertyById(@PathVariable Long id) {
        return propertyRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
    }

    // Get only approved properties for users
    @GetMapping("/approved")
    public List<Property> getApprovedProperties() {
        return propertyRepo.findByStatus(Property.Status.APPROVED);
    }

    // Admin approval endpoint
    @PutMapping("/approve/{id}")
    public Property approveProperty(@PathVariable Long id) {
        Property property = propertyRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Property not found"));
        property.setStatus(Property.Status.APPROVED);
        return propertyRepo.save(property);
}

    // Admin reject endpoint (optional)
    @PutMapping("/reject/{id}")
    public Property rejectProperty(@PathVariable Long id) {
        Property property = propertyRepo.findById(id)
            .orElseThrow(() -> new RuntimeException("Property not found"));
        property.setStatus(Property.Status.REJECTED);
        return propertyRepo.save(property);
}

    }



