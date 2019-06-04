import { Component, OnInit } from '@angular/core';
import { ComplaintService } from './complaint.service';
import { Complaint } from '../model/complaint.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  complaint: Complaint[];
  subscriber =  new Subscriber();
  constructor(private complaintService: ComplaintService){}

  ngOnInit() {
    this.subscriber.add(
      this.complaintService.getComplaint().subscribe(data => {
      this.complaint = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data()
        } as Complaint;
      })
    }));
  }

  deleteComplaint(id: any) {
    this.complaintService.deleteComplaint(id);
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
}
