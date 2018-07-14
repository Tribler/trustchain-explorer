import { Component, OnInit } from '@angular/core';
import {NetworktypeserviceService} from '../networktypeservice.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-networkswitcher',
  templateUrl: './networkswitcher.component.html',
  styleUrls: ['./networkswitcher.component.css']
})
export class NetworkswitcherComponent implements OnInit {

  networktype = 'mainnet';

  constructor(private cookieService: CookieService, private networkTypeService: NetworktypeserviceService) { }

  ngOnInit() {
    this.networktype = this.cookieService.get('networktype');
    this.networkTypeService.networkType = this.networktype;
  }

  onNetworkTypeChange(event: any): void {
    this.cookieService.set( 'networktype', this.networktype );
    this.networkTypeService.networkType = this.networktype;
    location.reload();
  }

}
