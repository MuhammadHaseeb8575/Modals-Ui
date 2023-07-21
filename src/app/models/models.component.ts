import { Component,OnInit } from '@angular/core';

interface Main {
  name: string;
  code: string;
  checked: boolean;
  FirstName:String;
  LastName:string;
  HomeAddress:string;
  EmailAddress:string;
  date:number;
  MobileNumber:number;
  Password:any;
  ConfirmPassword:any
}

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent {
  checked = false;
  FirstName = "";
  LastName = "";
  EmailAddress = ""
  Password:Main | undefined;
  ConfirmPassword:Main | undefined;
  MobileNumber:Main | undefined;
  HomeAddress:Main | undefined;
  date: Main | undefined;
  Accounts: Main[] | any;
  Religion: Main[] | any;
  Countries:Main[] | any;
  cities: Main[] | any;
  selectedCountry: Main | undefined;
  selectedCity: Main | undefined;
  selectedAccount: Main | undefined;
  selectedReligion:Main | undefined;

    visible: boolean = false;
    Popup1:boolean = false
    Popup2:boolean = false
    Popup3:boolean = false
    Popup4:boolean = false
    Popup5:boolean = false
    Popup6:boolean = false
    Popup7:boolean = false
    Popup8:boolean = false
    Popup9:boolean = false
    Popup10:boolean = false
    

    ngOnInit() { 
        this.Accounts = [
            {name: 'Self', code: 'NY'},
            {name: 'Brother', code: 'RM'},
            {name: 'Friend', code: 'LDN'},
            {name: 'Neighbour', code: 'IST'},
            {name: 'Other', code: 'PRS'}
        ],
        this.Religion = [
          {name: 'Muslim', code: 'M'},
          {name: 'Hindu', code: 'H'},
          {name: 'Christian', code: 'C'},
          {name: 'Yahudi', code: 'Y'},
          {name: 'Other', code: 'PRS'}
      ],
      this.Countries = [
        { name: 'Pakistan', code: 'NY' },
        { name: 'India', code: 'RM' },
        { name: 'Austrelia', code: 'LDN' },
        { name: 'America', code: 'IST' },
        { name: 'England', code: 'PRS' }
    ],
      this.cities = [
        { name: 'Karachi', code: 'NY' },
        { name: 'Islamabad', code: 'RM' },
        { name: 'Lahore', code: 'LDN' },
        { name: 'Peshawar', code: 'IST' },
        { name: 'KPK', code: 'PRS' }
    ];
    }

    SelectedValue = "";

    onSelect(value:any):void{
      this.SelectedValue = value
      if(this.SelectedValue == "Self"){
        this.visible = false
        this.Popup2 = false
        this.Popup1 = true
      }else if(this.SelectedValue == "Brother"){
        this.visible = false
        this.Popup1 = false
        this.Popup2 = true
      }else if(this.SelectedValue == "Friend"){
        this.visible = false
        this.Popup1 = false
        this.Popup2 = false
        this.Popup3 = true
      }else if(this.SelectedValue == "Neighbour"){
        this.visible = false
        this.Popup1 = false
        this.Popup2 = false
        this.Popup3 = false
        this.Popup4 = true
      }else if(this.SelectedValue == "Other"){
        this.visible = false
        this.Popup1 = false
        this.Popup2 = false
        this.Popup3 = false
        this.Popup4 = false
        this.Popup5 = true
      }else{
        this.visible = false
        this.Popup1 = false
        this.Popup2 = false
        this.Popup3 = false
        this.Popup4 = false
        this.Popup5 = false
      }
      

    }

    showDialog() {
        this.visible = true;
    }

    selfAccounts:Main[] = [];

    SelfAccountFormSubmit(value:any):void{
      this.selfAccounts = value
      console.log(this.selfAccounts)
      if(this.Popup1 == true){
        this.Popup6 = true
        this.Popup1 = false
      }else if(this.Popup6 == true){
        this.Popup6 = false
        this.Popup7 = true
      }else if(this.Popup7 == true){
        this.Popup7 = false
        this.Popup8 = true
      }

    }

    EditSelfAccount(){
      
    }

    BackToPrevModal(){
      if(this.Popup1 == true){
        this.Popup1 = false
        this.visible = true
      }
      else if(this.Popup2 == true){
        this.Popup2 = false
        this.Popup1 = true
      }
      else if(this.Popup3 == true){
        this.Popup3 = false
        this.Popup2 = true
      }
      else if(this.Popup4 == true){
        this.Popup4 = false
        this.Popup3 = true
      }
      else if(this.Popup5 == true){
        this.Popup5 = false
        this.Popup4 = true
      }else if(this.Popup6 == true){
        this.Popup6 = false
        this.Popup1 = true
      }else if(this.Popup7 == true){
        this.Popup7 = false
        this.Popup6 = true
      }else if(this.Popup8 == true){
        this.Popup8 = false
        this.Popup7 = true
      }else{
        this.visible = true
        this.Popup1 = false
        this.Popup2 = false
        this.Popup3 = false
        this.Popup4 = false
        this.Popup5 = false
      }
    }

}
