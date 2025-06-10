package com.example.realEstateBackend.service;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.example.realEstateBackend.entity.Property;
import com.example.realEstateBackend.repository.PropertyRepository;

@Service
public class PropertyService {
    private static final String UPLOAD_DIR = "uploads/";

    @Autowired
    private PropertyRepository propertyRepository;

    public Property saveProperty(String type, Integer bhk, Integer bathrooms,
                                 String furnishing, String projectStatus, String listedBy,
                                 Double superBuiltupArea, Double carpetArea, Double maintenance,
                                 Integer totalFloors, Integer floorNo, String carParking,
                                 String facing, String projectName, String adTitle,
                                 String description, Double price, String state,
                                 String name, String mobile,String email, MultipartFile[] photos) throws IOException {

        Path uploadPath = Paths.get(UPLOAD_DIR);
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }

        List<String> savedFileNames = new ArrayList<>();

        for (MultipartFile photo : photos) {
            String fileName = UUID.randomUUID() + "_" + photo.getOriginalFilename();
            Path filePath = uploadPath.resolve(fileName);
            Files.copy(photo.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
            savedFileNames.add(fileName);
        }

        Property property = new Property();
        property.setType(type);
        property.setBhk(bhk);
        property.setBathrooms(bathrooms);
        property.setFurnishing(furnishing);
        property.setProjectStatus(projectStatus);
        property.setListedBy(listedBy);
        property.setSuperBuiltupArea(superBuiltupArea);
        property.setCarpetArea(carpetArea);
        property.setMaintenance(maintenance);
        property.setTotalFloors(totalFloors);
        property.setFloorNo(floorNo);
        property.setCarParking(carParking);
        property.setFacing(facing);
        property.setProjectName(projectName);
        property.setAdTitle(adTitle);
        property.setDescription(description);
        property.setPrice(price);

        // Store filenames as a CSV string (or change to your preferred format)
        property.setImagePath(String.join(",", savedFileNames));

        property.setState(state);
        property.setName(name);
        property.setMobile(mobile);
        property.setEmail(email);

        return propertyRepository.save(property);
    }
}
