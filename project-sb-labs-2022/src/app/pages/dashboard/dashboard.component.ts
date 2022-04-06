import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public users: any[]=[
    {
      id:1,
      name:"Ionel",
      email:"ionel@gmail.com"
    },
    {
      id:2,
      name:"Georgiana",
      email:"georgiana@gmail.com"
    },
    {
      id:3,
      name:"Ene",
      email:"ene@gmail.com"
    }
  ];
  public countryListArray = [
    {
      name: 'Romania',
      ab: 'RO'
    },
    {
      name: 'France',
      ab: 'FR'
    },
    {
      name: 'United Kingdom',
      ab: 'GB'
    }
  ];
  public selectedAB: string ='';
  public data:any = {};
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }

  displayName(name:string){
    console.log(name);
  }

  countryUpdated(){
    console.log(this.selectedAB);
    this.mainService.getCases(this.selectedAB)
    .subscribe((response:any)=>{
      console.log(response);
      this.data = response.All;
    });
  }

}
