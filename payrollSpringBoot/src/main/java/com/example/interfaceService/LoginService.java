package com.example.interfaceService;

import org.springframework.data.repository.CrudRepository;

import com.example.model.UserModel;

public interface LoginService extends CrudRepository<UserModel, Long>{

}
