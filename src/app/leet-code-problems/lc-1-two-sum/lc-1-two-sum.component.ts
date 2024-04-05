import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

/**
 * Link: https://leetcode.com/problems/two-sum/
 * Title: 1. Two Sum
 * Difficulty: Easy
 * Topics:
 *  Array
 *  Hash Table
 */
@Component({
  selector: 'app-lc-1-two-sum',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './lc-1-two-sum.component.html',
  styleUrl: './lc-1-two-sum.component.css'
})
export class Lc1TwoSumComponent {
  examples(){
    this.twoSum([2,7,11,15],9 );
  }

  twoSum(nums: number[], target: number): number[] {
    let hashTable : any = {};
    for(let i = 0; i < nums.length; i++){
      let remainder = target - nums[i];
      if(hashTable[remainder] !== undefined){
        return [hashTable[remainder], i]
      }
      hashTable[nums[i]] = i;
    }

    return [];
  };
}
