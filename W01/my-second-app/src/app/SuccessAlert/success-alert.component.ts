import { Component } from '@angular/core'

@Component({
    selector: 'app-success',
    templateUrl: './success-alert.component.html',
    styles: [
        `
        h1 {
        color: green;
        border: 1px solid;
        display: inline-block;
        border-radius: 7px;
        padding: 10px;
        }
        `
    ]
})

export class SuccessComponent{}