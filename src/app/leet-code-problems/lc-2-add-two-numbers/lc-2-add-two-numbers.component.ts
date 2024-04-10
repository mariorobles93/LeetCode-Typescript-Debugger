import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

/**
 * Definition for singly-linked list.
 */
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * Link: https://leetcode.com/problems/add-two-numbers/
 * Title: 2. Add Two Numbers
 * Difficulty: Medium
 * Topics:
 * Linked List,
 * Math,
 * Recursion
 */
@Component({
  selector: 'app-lc-2-add-two-numbers',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './lc-2-add-two-numbers.component.html',
  styleUrl: './lc-2-add-two-numbers.component.css'
})
export class Lc2AddTwoNumbersComponent {
  l1: ListNode = new ListNode();
  l2: ListNode = new ListNode();

  /**
   * Topics:
   * Linked List,
   * Math,
   * Recursion
   *
   * Personal Hint: Call addTwoNumbers within itself (Recursion)
   * Personal Hint: Create ListNode then call addTwoNumbers
   */
  examples(){
    this.l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    this.l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    this.addTwoNumbers(this.l1, this.l2);

    this.l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(0,
      new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(1))))))))))
        ))))))))))
      ))))))))));
    this.l2 = new ListNode(0);
    this.addTwoNumbers(this.l1, this.l2);



    this.l1 = new ListNode(0);
    this.l2 = new ListNode(0);
    this.addTwoNumbers(this.l1, this.l2);

    this.l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9 )))))));
    this.l2= new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, ))));
    this.addTwoNumbers(this.l1, this.l2);
  }

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if(l1 === null && l2 === null){
      return null;
    } else if(l1 === null){
      return l2;
    } else if(l2 === null){
      return l1;
    } else {
      let sum = l1.val + l2.val;

      if(sum < 10){
        return new ListNode(sum, this.addTwoNumbers(l1.next, l2.next))
      }else{
        if(l1.next && l2.next){
          l1.next.val++;
          return new ListNode(sum - 10, this.addTwoNumbers(l1.next, l2.next));
        }else if(l1.next){
          return new ListNode(sum -10, this.addTwoNumbers(l1.next, new ListNode(1)));
        }else if(l2.next){
          return new ListNode(sum -10, this.addTwoNumbers(new ListNode(1), l2.next));
        }else{
          return new ListNode(sum - 10, new ListNode(1));
        }
      }
    }
  };
}
