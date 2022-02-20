import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product:Product = new Product();
  products: Product[] = [];
  isSave: boolean = true;
  proIndex: number = -1
  
  

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  onSubmit(){
    this.load();
  }

  addProduct() {
    console.log(this.product);

    this.products.push(this.product);
  
    console.log(this.product);
    


    const headers = {"content-Type":"application/json"}

    this.http.post<any>("http://localhost:8081/product/save", JSON.stringify(this.product), { 'headers': headers }).subscribe(data=> {
     
     console.log(data);
 
     }
 
     )

    

  }
  resetForm() {
    this.product = new Product();
  }


 

  editProduct(i: number) {
    this.proIndex = i
    this.product.name = this.products[i].name
    this.product.quantity = this.products[i].quantity
    this.product.price = this.products[i].price
    this.product.remarks = this.products[i].remarks
    this.isSave = false
  }

  updateProduct() {
    this.isSave = true
    this.products[this.proIndex] = this.product;
    this.resetForm()
  }

  deleteProduct(i: number) {
    this.products = this.products.filter((p, index) => i != index)
  }

  
  load(){
    this.http.get<any>('http://localhost:8081/product/getAll').subscribe(products=>{
      console.log(products+"M");
      
      this.products=products;
    }
    )
  }

}
