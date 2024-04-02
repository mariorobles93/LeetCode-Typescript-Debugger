import { Component } from '@angular/core';
import {TuiButtonModule} from "@taiga-ui/core";

@Component({
  selector: 'app-lc-22-generate-parentheses',
  standalone: true,
  imports: [
    TuiButtonModule
  ],
  templateUrl: './lc-22-generate-parentheses.component.html',
  styleUrl: './lc-22-generate-parentheses.component.css'
})
export class Lc22GenerateParenthesesComponent {

  examples() {
    this.generateParentheses(3);
    this.generateParentheses(1);
  }

  generateParentheses(n: number): string[] {
    let combinations : string[] = []
    let binaryTree: any[] = [{
      right: 0,
      left: 0,
      str: ""
    }];

    while(binaryTree.length){
      let node = binaryTree.pop();

      if(node.str.length === n*2){
        combinations.push(node.str);
      }

      if (node.right < n){
        binaryTree.push({
          right: node.right + 1,
          left: node.left,
          str: node.str + "("});
      }

      if (node.right > node.left){
        binaryTree.push({
          right:node.right,
          left:node.left + 1,
          str:node.str + ")"
        });
      }
    }

    return combinations;
  };

}
