import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Complaintnant } from 'src/app/model/complainant.model';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

  constructor(private firestore: AngularFirestore) {}

  getComplaint() {
    return this.firestore.collection('complaint').snapshotChanges();
  }

  createComplaint(complaint: Complaintnant) {
    return this.firestore.collection('complaint').add(complaint);
  }

  updateComplaint(complaint: Complaintnant) {
    delete complaint.id;
    this.firestore.doc('complaint/' + complaint.id).update(complaint);
  }

  deleteComplaint(complaintId: string) {
    this.firestore.doc('complaint/' + complaintId).delete();
  }
}
