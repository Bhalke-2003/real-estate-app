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
//import org.springframework.web.bind.annotation.PutMapping;
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

    @Autowired
    private PropertyRepository propertyRepo ;

    @PostMapping("/add")
    public ResponseEntity<?> addProperty(
            @RequestParam String userId,
            @RequestParam(required = false) String type,
            @RequestParam(required = false) Integer bhk,
            @RequestParam(required = false) Integer bathrooms,
            @RequestParam(required = false) Integer washrooms,  
            @RequestParam(required = false) String furnishing,
            @RequestParam(required = false) String projectStatus,
            @RequestParam(required = false) String listedBy,
            @RequestParam(required = false) Double superBuiltupArea,
            @RequestParam(required = false) Double carpetArea,
            @RequestParam(required = false) Double maintenance,
            @RequestParam(required = false) Integer totalFloors,
            @RequestParam(required = false) Integer floorNo,
            @RequestParam(required = false) String carParking,
            @RequestParam(required = false) String facing,
            @RequestParam(required = false) String projectName,
            @RequestParam(required = false) String adTitle,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) Double price,
            @RequestParam(required = false) String state,
            @RequestParam(required = false) String name,
            @RequestParam(required = false) String mobile,
            @RequestParam(value = "photos", required = false) MultipartFile[] photos
    ) throws IOException {

        Property property = propertyService.saveProperty(userId, type, bhk, bathrooms, furnishing, projectStatus,
                listedBy, superBuiltupArea, carpetArea, maintenance, totalFloors, floorNo,
                carParking, facing, projectName, adTitle, description, price, state,
                name, mobile, photos);

        return new ResponseEntity<>(property, HttpStatus.CREATED);
    }


    // GET all properties
    @GetMapping("/all")
    public ResponseEntity<List<Property>> getAllProperties() {
        List<Property> properties = propertyRepo.findAll();
        return new ResponseEntity<>(properties, HttpStatus.OK);
    }


    // GET property by id (optional)
    @GetMapping("/{id}")
    public ResponseEntity<Property> getPropertyById(@PathVariable Long id) {
        Property property = propertyRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Property not found with id " + id));
        return new ResponseEntity<>(property, HttpStatus.OK);
    }

    // Get only approved properties for users
    /*@GetMapping("/approved")
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
*/
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Property>> getUserSubmissions(@PathVariable String userId) {
        List<Property> props = propertyService.getPropertiesByUserId(userId);
        return new ResponseEntity<>(props, HttpStatus.OK);
}

}



