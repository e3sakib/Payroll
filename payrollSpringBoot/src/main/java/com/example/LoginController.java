/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.example;

import com.example.interfaceService.LoginService;
import com.example.model.UserModel;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Instructor
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class LoginController {

    @Autowired
    private LoginService loginService;
    @GetMapping("/")
	public String index() {
		return "Hello World";
	}

    @PostMapping(value = "/login")
    
    public ResponseEntity<Map<String, Object>> login(@RequestBody UserModel umodel) {
    	 List<UserModel> users = (List<UserModel>) loginService.findAll();
        Map<String, Object> map = new HashMap<String, Object>();
        for (UserModel other : users) {
            if (other.getUsername().equals(umodel.getUsername()) &&  other.getPassword().equals(umodel.getPassword())) {
            	map.put("message", "Login Successful");
            	  map.put("status", "Success");
            	  map.put("data", other);
            	  return ResponseEntity.ok(map);            	
            }
        }

        map.put("message", "Login fail!");
        map.put("status", "Failed");
        map.put("data", null);
        return ResponseEntity.status(412).body(map);
    }
}
