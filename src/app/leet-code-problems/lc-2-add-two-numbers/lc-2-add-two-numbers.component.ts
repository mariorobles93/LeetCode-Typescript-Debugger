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
    this.l1 = new ListNode(1, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(0,
      new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(0,
        new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0, new ListNode(0, new ListNode(0, new ListNode(0,new ListNode(0,new ListNode(1))))))))))
        ))))))))))
      ))))))))));
    this.l2 = new ListNode(0);
    this.addTwoNumbers(this.l1, this.l2);

    this.l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    this.l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    this.addTwoNumbers(this.l1, this.l2);

    this.l1 = new ListNode(0);
    this.l2 = new ListNode(0);
    this.addTwoNumbers(this.l1, this.l2);

    this.l1 = new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9 )))))));
    this.l2= new ListNode(9, new ListNode(9, new ListNode(9, new ListNode(9, ))));
    this.addTwoNumbers(this.l1, this.l2);
  }

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let list1 : number[] = [];
    let list2 : number[] = [];

    let number1: number;
    let number2: number;

    let readValue1 : ListNode | null = l1;
    let readValue2 : ListNode | null = l2;

    //Extract values from linked list
    while(readValue1 !== null || readValue2 !== null){
      if (readValue1 !== null){
        //extract current value
        list1.push(readValue1.val as number);
        //Move to Next value or assign null
        readValue1 = readValue1.next;
      }

      if (readValue2 !== null){
        //extract current value
        list2.push(readValue2.val as number);
        //Move to Next value or assign null
        readValue2 = readValue2.next;
      }
    }

    //Reverse the arrays and sum them
    list1.reverse();
    list2.reverse();

    let counter = 0;
    while(list1.length > counter || list2.length > counter){

      counter++;
    }
    number1 = parseInt(list1.toString().replaceAll(',', ''));
    number2 = parseInt(list2.toString().replaceAll(',', ''));



    const sum = Array.from((number1 + number2).toString());
    let result: ListNode | null = new ListNode();

    for(let i : number = 0; i < sum.length; i++){
      let number = parseInt(sum[i]);
      let holder = result.next;
      (result as ListNode).next = new ListNode(number, holder);
    }

    return result.next;
  };
}
