import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CamundaService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  startProcess(): Observable<any> {
    return this.http.post(`${this.baseUrl}/start-process`, {
      //processDefinitionKey: '2251799813686509', // your BPMN ID
      processDefinitionId: 'PreArrangementProcess',
      processDefinitionVersion: 17,
      variables: {}
    });
  }

  searchUserTasks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/searchUserTasks`);
  }

  completeUserTask(userTaskKey: string, variables: any) :Observable<any>{
    return this.http.post(`${this.baseUrl}/complete-user-task`, {
        userTaskKey: userTaskKey,
        variables: variables,
    });
    }

  getUserTaskByProcessInstance(processInstanceId: string, name: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/user-tasks/search`, {
      processInstanceKey: processInstanceId, name: name
      
     });
    }
}
