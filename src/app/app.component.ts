import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lc1TwoSumComponent} from "./leet-code-problems/lc-1-two-sum/lc-1-two-sum.component";
import {Lc2AddTwoNumbersComponent} from "./leet-code-problems/lc-2-add-two-numbers/lc-2-add-two-numbers.component";
import {APlaygroundComponent} from "./leet-code-problems/a-playground/a-playground.component";
import {
  Lc22GenerateParenthesesComponent
} from "./leet-code-problems/lc-22-generate-parentheses/lc-22-generate-parentheses.component";
import {
  Lc856ScoreOfParenthesesComponent
} from "./leet-code-problems/lc-856-score-of-parentheses/lc-856-score-of-parentheses.component";
import {
  Lc1108DefangingAnIpAddressComponent
} from "./leet-code-problems/lc-1108-defanging-an-ip-address/lc-1108-defanging-an-ip-address.component";
import {
  Lc771JewelsAndStonesComponent
} from "./leet-code-problems/lc-771-jewels-and-stones/lc-771-jewels-and-stones.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule,
    Lc1TwoSumComponent,
    Lc2AddTwoNumbersComponent,
    APlaygroundComponent,
    Lc22GenerateParenthesesComponent,
    Lc856ScoreOfParenthesesComponent, Lc1108DefangingAnIpAddressComponent, Lc771JewelsAndStonesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'untitled1';
}
