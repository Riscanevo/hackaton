import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WorkPermit {
  id: number;
  userId: number;
  workType: string;
  estimatedDuration: string;
  risks: string;
  urgencyLevel: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  documentPath: string;
}

@Injectable({
  providedIn: 'root'
})
export class WorkPermitService {
  private apiUrl = 'http://localhost:5255/api/workpermits';

  constructor(private http: HttpClient) { }

  getWorkPermits(): Observable<WorkPermit[]> {
    return this.http.get<WorkPermit[]>(this.apiUrl);
  }

  getWorkPermit(id: number): Observable<WorkPermit> {
    return this.http.get<WorkPermit>(`${this.apiUrl}/${id}`);
  }

  createWorkPermit(workPermit: WorkPermit): Observable<WorkPermit> {
    return this.http.post<WorkPermit>(this.apiUrl, workPermit);
  }

  updateWorkPermit(id: number, workPermit: WorkPermit): Observable<WorkPermit> {
    return this.http.put<WorkPermit>(`${this.apiUrl}/${id}`, workPermit);
  }

  deleteWorkPermit(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
