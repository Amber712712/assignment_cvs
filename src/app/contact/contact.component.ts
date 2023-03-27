import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  form:FormGroup=new FormGroup({});
  formVal=false;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void{
    this.form=this.fb.group(
      {name:['',[Validators.required]],message:['',[Validators.required,Validators.minLength(10)]]}
    )
  }

  submitFun(){
    
    this.formVal=true;
    console.log(this.form.valid);
    
  }
 


}
