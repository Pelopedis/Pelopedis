import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(
    private http: HttpClient
  ) { }

  getProfile(): Promise<any> {
    return firstValueFrom(this.http.get('assets/profile.json'));
  }

  getTopSkills(): Promise<any> {
    return firstValueFrom(this.http.get('assets/top-skills.json'));
  }

  getFeaturedProjects(): Promise<any> {
    return firstValueFrom(this.http.get('assets/projects.json'));
  }

  getCertificates(): Promise<any> {
    return firstValueFrom(this.http.get('assets/certificates.json'));
  }

  getWorkHistory(): Promise<any> {
    return firstValueFrom(this.http.get('assets/work-experience.json'));
  }
}
