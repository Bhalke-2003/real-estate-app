package com.example.realEstateBackend.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realEstateBackend.entity.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
    List<Property> findByStatus(Property.Status status);

}

