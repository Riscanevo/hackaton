import { Component, OnInit } from '@angular/core';
import { WorkPermitService } from '../services/work-permit.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  workPermits: any[] = [];
  newWorkPermit = {
    userId: '',
    workType: '',
    estimatedDuration: '',
    risks: '',
    urgencyLevel: '',
  };
  selectedWorkPermit: any = null;

  constructor(private workPermitService: WorkPermitService) {}

  ngOnInit(): void {
    this.loadWorkPermits();
  }

  loadWorkPermits(): void {
    this.workPermitService.getWorkPermits().subscribe((data) => {
      this.workPermits = data;
    });
  }

  createWorkPermit(): void {
    this.workPermits.push(this.newWorkPermit);
    this.newWorkPermit = {
      userId: '',
      workType: '',
      estimatedDuration: '',
      risks: '',
      urgencyLevel: '',
    };
  }

  selectWorkPermit(permit: any): void {
    this.selectedWorkPermit = { ...permit };
  }

  updateWorkPermit(): void {
    const index = this.workPermits.findIndex(
      (permit) => permit.id === this.selectedWorkPermit.id
    );
    if (index !== -1) {
      this.workPermits[index] = this.selectedWorkPermit;
    }
    this.selectedWorkPermit = null;
  }

  deleteWorkPermit(id: number): void {
    this.workPermits = this.workPermits.filter((permit) => permit.id !== id);
  }
}
