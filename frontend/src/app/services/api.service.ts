import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_PATH } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

    createData(data: any) {
      return this.http.post(`${API_PATH}posts`, data)
    }

    readData() {
      return this.http.get(`${API_PATH}posts`);
    }

    updateData(data: any) {
      return this.http.put(`${API_PATH}posts/1`, data);
    }

    deleteData() {
      return this.http.delete(`${API_PATH}posts/1`)
    }
}
