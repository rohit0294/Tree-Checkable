import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'input-checkbox',
  templateUrl: './input-checkbox.component.html',
  styleUrls: ['./input-checkbox.component.css']
})
export class InputCheckboxComponent {
    @Input() item: any;
    @Output() itemChecked = new EventEmitter();

    isVisible: boolean = true;

    toggleExpand() {
        this.isVisible = !this.isVisible;
    }

    onItemChecked(checkItem) {
        if (checkItem.children && checkItem.children.length && !checkItem.checked) {
            for (let i = 0; i < checkItem.children.length; i++) {
                checkItem.children[i].checked = true;
            }
        }
        if (checkItem.children && checkItem.children.length && checkItem.checked) {
            for (let i = 0; i < checkItem.children.length; i++) {
                checkItem.children[i].checked = false;
            }
        }
        this.itemChecked.emit();
    }
}
