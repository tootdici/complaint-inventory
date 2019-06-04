import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Complaint } from '../model/complaint.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private firestore: AngularFirestore) {}

  getComplaint() {
    return this.firestore.collection('complaint').snapshotChanges();
  }

  createComplaint(complaint: Complaint) {
    return this.firestore.collection('complaint').add(complaint);
  }

  updateComplaint(complaint: Complaint) {
    delete complaint.id;
    this.firestore.doc('complaint/' + complaint.id).update(complaint);
  }

  deleteComplaint(complaintId: string) {
    this.firestore.doc('complaint/' + complaintId).delete();
  }
}
