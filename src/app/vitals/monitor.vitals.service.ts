import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MonitoringVitalService {

public constructor(private httpClient: HttpClient) {
}

public getVitals(bedId: number): Observable<any> {
 return this.httpClient.get('http://localhost:8080/monitor/' + bedId);
}

}
