import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css']
})
export class SingleViewComponent implements OnInit{


ViewProduct:any={}

  constructor(private api:ApiService, private activated:ActivatedRoute){ }

  ngOnInit(): void {

    this.activated.params.subscribe((data:any)=>{
      console.log(data);

      const {id}=data

      console.log(id);

      this.getProduct(id)
      
      
    })

  }

// define function

getProduct=(id:any)=>{

  this.api.viewProductApi(id).subscribe({
    next:(res:any)=>{
      console.log(res);
      this.ViewProduct=res
      
    },
    error:(err:any)=>{
      console.log(err);
      
    }
  })

}

}
