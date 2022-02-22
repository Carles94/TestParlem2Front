import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

export class HttpUtils {
  static getCustomer(customerId: string, http: HttpClient): Observable<Object> {
    return http.request('GET', `${environment.apiUrl}/customer/${customerId}`, {
      responseType: 'json',
    });
  }
}
