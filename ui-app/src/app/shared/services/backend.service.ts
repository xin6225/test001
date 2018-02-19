import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {LocalCacheService} from './local-cache.service';

@Injectable()
export class BackendService {

  private readonly basePath = '/api/rest';
  private backendStream: BehaviorSubject<any[]>; // data sets from backend api

  constructor(private http: HttpClient, private localCacheService: LocalCacheService,) {
    this.backendStream = <BehaviorSubject<any[]>>new BehaviorSubject([]);
    // TODO fetch backend data via getAllData and put then into local storage

    // mock, load local storage
    this.backendStream.next(this.localCacheService.cachedData);
  }

  /**
   * Get all data
   */
  get allData(): any[] {
    console.log('backendstream', this.backendStream.getValue());
    return this.backendStream.getValue();
  }

  addData(data: any){
    const dataList = this.backendStream.getValue();
    dataList.push(data);
    this.backendStream.next(dataList);

    this.localCacheService.observeDatas(this.backendStream.asObservable());
  }

   getDataById(id: number) : Observable<any> {
     let editingData = <BehaviorSubject<any[]>>new BehaviorSubject([]);
     editingData.next(this.backendStream.getValue().find(obj =>  obj.id === id ));
     return editingData.asObservable();

     // TODO implement Rest API calls to fetch data from real Backend instead of localStorage
  }

  changData(data: any) {
// TODO update local storage with new data from UI
  }

  // Call Rest APIs to CRUD data
  private getAllData(): Observable<any> {
    const url = `${this.basePath}/all`;
    return this.http.get(url);
  }

  /**
   * Delete data entities by Id
   * @param Ids Array of data ids to delete
   */
  private deleteData(Ids: number[]): Observable<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const params = new HttpParams()
      .set('ids', Ids.join());

    return this.http.delete(this.basePath, {headers: headers, params: params });
  }

  /**
   * Get a single data by id
   * @param id Id of the data to fetch
   */
  private getData(id: number): Observable<any> {
    const url = `${this.basePath}/${id}`;
    return this.http.get(url);
  }

  /**
   * Create a new data
   * @param data object to be saved
   */
  private createData(data: any): Observable<any> {
    const url = `${this.basePath}`;
    const options = this.getDefaultHeaders();

    return this.http.post(url, data, options);
  }

  /**
   * Update an existing data
   * @param data object containing updated data
   */
  private updateData(data: any): Observable<any> {
    const url = `${this.basePath}/${data.id}`;
    const options = this.getDefaultHeaders();

    return this.http.put(url, data, options);

  }

  private getDefaultHeaders() {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    const options = { headers: headers };
    return options;
  }
}
