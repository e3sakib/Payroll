
package com.example;

import com.example.interfaceService.LoginService;
import com.example.interfaceService.MailService;
import com.example.model.MailModel;
import com.example.model.UserModel;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
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

/**
*
* @author Instructor
*/
@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class UserController {
   @Autowired
   private LoginService loginService;
   
   @Autowired
	private  MailService mailService;
   
   @PostMapping(value = "/save")
   public ResponseEntity<?> save(@RequestBody UserModel entity) {
       
        Map<String, Object> map = new HashMap<String, Object>();
        try {
            UserModel user = loginService.save(entity);
           MailModel mm =new MailModel();
           mm.setReceiver(entity.getEmail());
           mm.setMessage("success");
           mm.setSub("email sent");
           
           mailService.sendMail(mm);
           
            map.put("message", "Data save successfully");
            
            map.put("Data", user);
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
}
