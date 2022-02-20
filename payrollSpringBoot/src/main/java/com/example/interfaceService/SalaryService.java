package com.example.interfaceService;

import org.springframework.data.repository.CrudRepository;

import com.example.model.Salaryform;

public interface SalaryService extends CrudRepository<Salaryform, Integer> {

}
