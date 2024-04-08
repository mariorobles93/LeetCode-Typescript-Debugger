import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

/**
 * Link: https://leetcode.com/problems/defanging-an-ip-address/description/
 * Title: 1108. Defanging an IP Address
 * Difficulty: Easy
 * Topics: String
 */
@Component({
  selector: 'app-lc-1108-defanging-an-ip-address',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './lc-1108-defanging-an-ip-address.component.html',
  styleUrl: './lc-1108-defanging-an-ip-address.component.css'
})
export class Lc1108DefangingAnIpAddressComponent {
  examples(){
    this.defangIPaddr("1.1.1.1");
    this.defangIPaddr("255.100.50.0");
  }
  defangIPaddr(address: string): string {
    let str = '';

    for(let i = 0; i< address.length; i++){
      if(address[i] === '.'){
        str += '[.]';
      }else{
        str += address[i];
      }
    }

    return str;
  };
}
