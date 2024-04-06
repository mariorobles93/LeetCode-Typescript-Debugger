import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

/**
 * Link: https://leetcode.com/problems/jewels-and-stones/description/
 * Title: 771. Jewels and Stones
 * Difficulty: Easy
 * Topics:
 * Hash Table
 * String
 */
@Component({
  selector: 'app-lc-771-jewels-and-stones',
  standalone: true,
    imports: [
        TuiButtonModule
    ],
  templateUrl: './lc-771-jewels-and-stones.component.html',
  styleUrl: './lc-771-jewels-and-stones.component.css'
})
export class Lc771JewelsAndStonesComponent {
  examples(){
    this.playground("aA", "aAAbbbb");
    this.playground("z", "ZZ");
  }
  playground(jewels: string, stones: string): number {
    let setOfJewels : Set<string> = new Set<string>(jewels);
    let count = 0;

    for (let i = 0; i < stones.length; i++) {
      if(setOfJewels.has(stones[i])) count++;
    }
    return count;
  };
}
