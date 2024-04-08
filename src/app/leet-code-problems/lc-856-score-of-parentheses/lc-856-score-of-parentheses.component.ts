import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

/**
 * Link: https://leetcode.com/problems/score-of-parentheses/description/
 * Title: 856. Score of Parentheses
 * Difficulty: Medium
 * Topics:
 * String
 * Stack
 */
@Component({
  selector: 'app-lc-856-score-of-parentheses',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './lc-856-score-of-parentheses.component.html',
  styleUrl: './lc-856-score-of-parentheses.component.css'
})
export class Lc856ScoreOfParenthesesComponent {
  examples(){
    this.scoreOfParentheses("(())((())()())");
    this.scoreOfParentheses("(())((()())()())");
    this.scoreOfParentheses("()");
    this.scoreOfParentheses("()()");
    this.scoreOfParentheses("(())");
  }
  scoreOfParentheses(s: string): number {
    let numberOfOpenParentheses = 0;
    let pointer = 0;
    let total = 0;

    for(let i= 0; i < s.length; i++){
      if(s[i] == '('){
        if(numberOfOpenParentheses == 0){
          pointer = i;
        }
        numberOfOpenParentheses++;
      }else{
        numberOfOpenParentheses--;
        if (numberOfOpenParentheses == 0){
          if(i == pointer + 1){
            total++;
          }else{
            total += 2*this.scoreOfParentheses(s.slice(pointer+1, i));
          }
        }
      }
    }

    return total;
  };
}
