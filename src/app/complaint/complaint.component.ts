import { Component, OnInit } from '@angular/core';
import { ComplaintService } from './complaint.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Complaint } from '../model/complaint.model';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaint: Complaint[];
  constructor(private complaintService: ComplaintService, private fireStore: AngularFirestore) { }

  ngOnInit() {
    this.complaintService.getComplaint().subscribe(data => {
      this.complaint = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Complaint;
      })
    });
  }

  createComplaint() {
    let obj = {'name': 'karl', 'family_name': 'kangleon', 'address': 'banawa', 'time': '4:42pm', 'date': '06/04/2019'};
    this.fireStore.collection('complaint').add(obj);
  }

}
