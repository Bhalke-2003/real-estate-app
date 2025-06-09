package com.example.realEstateBackend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.realEstateBackend.entity.Property;

public interface PropertyRepository extends JpaRepository<Property, Long> {
}

