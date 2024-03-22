import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

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

  twoSum(nums: number[], target: number): number[] {
    const memo: any = {};
    for(let i=0; i < nums.length; i++){
      const possibleSecondNumber = target - nums[i];

      if(memo[possibleSecondNumber] !== undefined){
        return [memo[possibleSecondNumber], i];
      }

      memo[nums[i]]=i;
    }
    return [];
  };
}
