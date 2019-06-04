import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ComplaintService } from '../complaint.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
  complaintForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
     private complaintService: ComplaintService,
     private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.complaintForm = this.formBuilder.group({
      name: [''],
      family_name: [''],
      address: [''],
      date: [''],
      time: [''],
      complaint: ['']
    })
  }

  private submit() {
    this.complaintService.createComplaint(this.complaintForm.value);
  }

}
