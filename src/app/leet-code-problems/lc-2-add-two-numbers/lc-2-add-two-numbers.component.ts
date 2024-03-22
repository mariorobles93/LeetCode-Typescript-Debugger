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
  l1: ListNode = new ListNode(2, new ListNode(4, new ListNode(3)));
  l2: ListNode = new ListNode(5, new ListNode(6, new ListNode(4)));

  addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let l3 = new ListNode( 1, l1);

    let readValue : ListNode|  number | null | undefined = l1?.val;

    while (readValue !== null && l2?.next !== undefined && l1?.next !== undefined ){
      const num1 : number = l1.val;
      const num2 : number = l2.val;

      const sum :number = l1.val + l2.val;

      if (l3.val !== undefined){
        l3.next = new ListNode(sum);
      }else{
        l3.val = sum;
      }

      readValue = l1?.next;
    }

    return l3;
  };
}
