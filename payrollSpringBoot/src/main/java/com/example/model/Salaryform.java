/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.example.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "salaries")
public class Salaryform {
 @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)   
private int id;
  private String name;
  private String phone;
  private String designation;
  private double basic; private double allowance;
  private double deduction;
  private int absent;
  private double netSalary;
public int getId() {
	return id;
}
public void setId(int id) {
	this.id = id;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPhone() {
	return phone;
}
public void setPhone(String phone) {
	this.phone = phone;
}
public String getDesignation() {
	return designation;
}
public void setDesignation(String designation) {
	this.designation = designation;
}
public double getBasic() {
	return basic;
}
public void setBasic(double basic) {
	this.basic = basic;
}
public double getAllowance() {
	return allowance;
}
public void setAllowance(double allowance) {
	this.allowance = allowance;
}
public double getDeduction() {
	return deduction;
}
public void setDeduction(double deduction) {
	this.deduction = deduction;
}
public double getNetSalary() {
	return netSalary;
}
public void setNetSalary(double netSalary) {
	netSalary=basic+allowance-deduction;
	this.netSalary = netSalary;
}

  
   
  
 }
