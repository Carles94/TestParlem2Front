import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpUtils } from 'src/common/http-utils';
import { Customer } from 'src/models/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public customer: Customer | null = null;

  constructor(private http: HttpClient) {}

  public ngOnInit(): void {
    HttpUtils.getCustomer('11111', this.http).subscribe(
      (result: any) => (this.customer = result)
    );
  }
}
