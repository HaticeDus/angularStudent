import { Component,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeServiceService } from 'src/app/services/home-service.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{

  studentForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: HomeServiceService) { }

  ngOnInit(): void {

    this.studentForm = this.formBuilder.group({
      ad: ['', [Validators.required]],
      soyad: ['',[Validators.required] ],
      tel: ['', [Validators.required]],
      cinsiyet: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    })

  }

  addStudent() {
    console.log(this.studentForm.value);
    this.service.PostStudent(this.studentForm.value).subscribe({ 
      next:(res)=>{
        alert("Student added successfully");
        this.studentForm.reset();
      },
      error:()=>{
        alert("Error while adding the student");
      }
    })
  }


}
