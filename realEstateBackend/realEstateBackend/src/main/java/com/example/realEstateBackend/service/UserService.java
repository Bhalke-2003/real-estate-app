package com.example.realEstateBackend.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.realEstateBackend.dto.UserDTO;
import com.example.realEstateBackend.entity.User;
import com.example.realEstateBackend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public String registerUser(UserDTO dto) {
        if (userRepository.findByEmail(dto.getEmail()).isPresent()) {
            return "Email already registered!";
        }

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        user.setPassword(dto.getPassword()); // No encryption for now
        user.setRole(dto.getRole());

        userRepository.save(user);
        return dto.getRole() + " registration successful!";
    }

    public String loginUser(UserDTO dto) {
    return userRepository.findByEmail(dto.getEmail())
            .filter(user -> user.getPassword().equals(dto.getPassword()))
            .map(user -> "Login successful as " + user.getRole())
            .orElse("Invalid email or password.");
}

}

