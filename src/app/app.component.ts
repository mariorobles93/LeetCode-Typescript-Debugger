import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import {TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER, TuiButtonModule} from "@taiga-ui/core";
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Lc1TwoSumComponent} from "./leet-code-problems/lc-1-two-sum/lc-1-two-sum.component";
import {Lc2AddTwoNumbersComponent} from "./leet-code-problems/lc-2-add-two-numbers/lc-2-add-two-numbers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TuiRootModule, TuiDialogModule, TuiAlertModule, TuiButtonModule, Lc1TwoSumComponent, Lc2AddTwoNumbersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}]
})
export class AppComponent {
  title = 'untitled1';
}
