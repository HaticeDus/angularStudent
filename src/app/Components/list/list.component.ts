import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Student } from 'src/app/model/Student';
import { HomeServiceService } from 'src/app/services/home-service.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  constructor(private testService: HomeServiceService, private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  studentList: Student[] = [];


  displayedColumns = ['id', 'ad', 'soyad', 'tel', 'cinsiyet', 'email', 'delete', 'update'];
  dataSource = this.studentList;

  ngOnInit() {
    this.GetAll();
  }

  GetAll() {

    this.testService.GetStudent().subscribe((response: Student[]) => {
      this.studentList = response;
      console.log(this.studentList);
    });
  }

  openDialog(row: any) { //update ve delete tablonun olduğu yerde olmalı!!
    this.dialog.open(DialogComponent, {
      height: '550px',
      width: '400px',
      data: row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.GetAll();
      }
    })
  }

  deleteStudent(id:number){
    
    this.testService.DeleteStudent(id).subscribe({
      next:(res)=>{
        alert("Student Deleted Succesfully");
        this.GetAll();
      },
      error:()=>{
        alert("Error while deleting the student!");
      }
    })

  }

}
