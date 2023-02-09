import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { Student } from 'src/app/model/Student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  studentForm!: FormGroup;
  studentList: Student[] = [];
  currentStudentId!: number;
  actionBtn: string = "save";


  constructor(private formBuilder: FormBuilder, private testService: HomeServiceService, private dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {

    this.studentForm = this.formBuilder.group({
      id: [],
      ad: ['', [Validators.required]],
      soyad: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      cinsiyet: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]]
    });

    console.log(this.editData.id);
    this.GetAll();
    //console.log(this.editData);

    if (this.editData) {
      this.actionBtn = "Update";
      this.studentForm.controls['id'].setValue(this.editData.id);
      this.studentForm.controls['ad'].setValue(this.editData.ad);
      this.studentForm.controls['soyad'].setValue(this.editData.soyad);
      this.studentForm.controls['tel'].setValue(this.editData.tel);
      this.studentForm.controls['cinsiyet'].setValue(this.editData.cinsiyet);
      this.studentForm.controls['email'].setValue(this.editData.email);
    }



  }

  GetAll() {
    this.testService.GetStudent().subscribe((response: Student[]) => {
      this.studentList = response;
      console.log(this.studentList);
    });
  }

  updateStudent() {

    this.testService.PutStudent(this.editData.id, this.studentForm.value).subscribe({
      next: (res) => {
        alert("Student Updated successfully");
        this.studentForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert("Error while updating the student record!");
      }
    });

    //console.log(this.editData.id);
    //console.log(this.studentForm.value);
  }


}
