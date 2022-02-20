/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example;

import com.example.interfaceService.SalaryService;
import com.example.model.Salaryform;


import java.util.HashMap;
import java.util.List;
import java.util.Map;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class SalaryformController {
      @Autowired
      private SalaryService salaryService;

    @PostMapping(value = "/salaryform/save")
    @Transactional
    public ResponseEntity<?> save(@RequestBody Salaryform entity) {
    	Map<String, Object> map = new HashMap<>();
    	try {
    		Salaryform usal = salaryService.save(entity);
			map.put("message", "Data save successfully");
			map.put("Data", usal);
			map.put("Status code", 200);
			return ResponseEntity.ok(map);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("message", "Data saved failed");
			map.put("Data", null);
			map.put("Status code", 400);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
		}
    }
    
    @PostMapping(value = "/salaryform/getAll")
    @Transactional
    public ResponseEntity<?> getAll() {
       Map<Object,Object> map = new HashMap<Object, Object>();
       try {
           
           List<Salaryform> entityList = (List<Salaryform>) salaryService.findAll();
           map.put("Data", entityList);
           map.put("message", "Salary get successfully");
			map.put("Status code", 200);
           return ResponseEntity.ok(map);
       } catch (Exception e) {
           e.printStackTrace();
           return ResponseEntity.ok("Data fetch failed!");
       }
   }
    
    @GetMapping(value = "/salaryform/getOne/{id}")
    @Transactional
    public ResponseEntity<?> getOne(@PathVariable(value = "id") long id) {
    	Map<String, Object> map = new HashMap<>();
    	 try {
             
    		 Salaryform salfrm = salaryService.findById((int) id).get();
             map.put("Data", salfrm);
             return ResponseEntity.ok(salfrm);
         } catch (Exception e) {
             e.printStackTrace();
             return ResponseEntity.ok("Data fetch failed!");
         }
    }
    
    @PostMapping(value = "/salaryform/update")
    @Transactional
    public ResponseEntity<?> update(@RequestBody Salaryform entity) {
    	Map<String, Object> map = new HashMap<>();
    	try {
    		Salaryform empsal = salaryService.save(entity);
			map.put("message", "Salaryform updated successfully");
			map.put("Data", empsal);
			map.put("Status code", 200);
			return ResponseEntity.ok(map);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("message", "Salaryform updated failed");
			map.put("Data", null);
			map.put("Status code", 400);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
		}
    }
    
    @GetMapping(value = "/salaryform/delete/{id}", consumes = {MediaType.APPLICATION_JSON_VALUE})
    @Transactional
    public ResponseEntity<?> delete(@PathVariable(value = "id") long id) {
    	Map<String, Object> map = new HashMap<>();
    	Salaryform empdel = salaryService.findById((int) id).get();
		try {
			salaryService.delete(empdel);
			map.put("message", "Salaryform deleted successfully");
			map.put("Data", empdel);
			map.put("Status code", 200);
			return ResponseEntity.ok(map);
		} catch (Exception e) {
			e.printStackTrace();
			map.put("message", "Salaryform deletation failed");
			map.put("Data", null);
			map.put("Status code", 400);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(map);
		}
    } 
}

