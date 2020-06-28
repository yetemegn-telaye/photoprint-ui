import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class GenericServices {

  //public static BASE_URL : string = "http://18.224.214.141:8090/v0/";
  public static BASE_URL : string = "http://localhost:8090/v0/";
  public static POST_METHOD = 'post';
  public static GET_METHOD = 'get';
  public static GET_MULTI_METHOD = 'get';
  public static PUT_METHOD = "put";
  public static DELETE_METHOD = "delete";

  response: Observable<any>;
  responses: Observable<any[]>;

  constructor(private http: HttpClient, private http0: Http) {

  }

  httpPOSTFormData(url, data, file) {
     var formData = new FormData();
     formData.append('resourceDto', JSON.stringify(data));
     formData.append('file', file);
     console.log("passed file is: " + file);
     var xhr = new XMLHttpRequest();
     xhr.open("POST", url);
     xhr.setRequestHeader("enctype", "multipart/form-data");
     // IE workaround for Cache issues
     xhr.setRequestHeader("Cache-Control", "no-cache");
     xhr.setRequestHeader("Cache-Control", "no-store");
     xhr.setRequestHeader("Pragma", "no-cache");

     xhr.send(formData);

     if (xhr.readyState === xhr.DONE) {
        if (xhr.status === 200) {
            console.log(xhr.response);
            console.log(xhr.responseText);
        }
     }
     return xhr.response;
 }

  httpService(url, reqBody, method){
    var options = { headers: new HttpHeaders().set('Content-Type', 'application/json')
                                              .set('Accept', '*/*') };
    console.log("method: " + method + "\n" + "url : " + url + "request body: " + reqBody);
    switch(method){
      case GenericServices.POST_METHOD:
        this.response = this.http.post<any>(url, reqBody, options);
        return this.response;
      case GenericServices.PUT_METHOD:
        this.response = this.http.put<any>(url, reqBody, options);
        return this.response;
      case GenericServices.DELETE_METHOD:
        this.response = this.http.delete<any>(url, options);
        return this.response;
      case GenericServices.GET_MULTI_METHOD:
        this.responses = this.http.get<any[]>(url, options);
        return this.responses;
      case GenericServices.GET_METHOD:
        this.response = this.http.get<any>(url,  options);
        return this.response;
    }
  }

}
