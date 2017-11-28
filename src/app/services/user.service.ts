import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http : Http) {}

  getAllUser(): Observable<any> {
    return this.http
      .get(environment.baseUrl + 'LMS/allUser')
      .map((user: Response) => {return user.json()})
  }

}
