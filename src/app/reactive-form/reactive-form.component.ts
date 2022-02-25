import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { CommonService } from '../Services/common.service'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  
//   public formData: FormGroup = new FormGroup({ 
//     Name: new FormControl(""),
//     Age: new FormControl("")
//  }); 
  public formData = this.formBuilder.group(
  {
      Name:['',Validators.required],
      Age:['',Validators.required]
  })
  
  constructor(
      private common:CommonService,
      private formBuilder:FormBuilder
    ) {}

  ngOnInit(): void {
  //   this.formData = new FormGroup({ 
  //     Name: new FormControl("Tutorialspoint"),
  //     Age: new FormControl('25')
  //  }); 
    console.log("formData", this.formData)
  }


  public onSubmit(): void{
    // console.log('submit form: ',this.formData.value)
    this.common.submitData(this.formData.value)
  }
}
