import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-all-view',
  templateUrl: './all-view.component.html',
  styleUrls: ['./all-view.component.css']
})
export class AllViewComponent implements OnInit{


  allproducts:any=[]

  constructor(private api:ApiService){ }


  ngOnInit(): void {

    this.getAllProductapi()


  }

  getAllProductapi=()=>{
    this.api.getAllProducts().subscribe({
      next:(res:any)=>{
        console.log(res);
        this.allproducts=res
      },
      error:(err:any)=>{
        console.log(err);
        
      }
    })
  }

}
