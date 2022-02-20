package com.example.interfaceService;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;




import com.example.model.Employee;


@Repository
public interface EmployeeService  extends CrudRepository<Employee, Integer> {
	@Query("SELECT c from Employee c where c.name like %?1%")
	List<Employee> searchEmployee(String searchText);
	
}
