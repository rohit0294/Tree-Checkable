import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "Tree Checkable";

    form: FormGroup;

    listOfOptions: any[] = [
        {
            id: 1,
            title: 'Option 1',
            checked: false,
            children: [
                {
                    id: 11,
                    title: 'abc 1',
                    checked: false
                },
                {
                    id: 12,
                    title: 'def 2',
                    checked: false
                },
                {
                    id: 13,
                    title: 'ghi 3',
                    checked: false
                }
            ]
        },
        {
            id: 2,
            title: 'Option 2',
            checked: false,
            children: []
        },
        {
            id: 3,
            title: 'Option 3',
            checked: false,
            children: [
                {
                    id: 31,
                    title: 'option 1',
                    checked: false
                },
                {
                    id: 32,
                    title: 'option 2',
                    checked: false
                },
                {
                    id: 33,
                    title: 'option 3',
                    checked: false
                }                
            ]
        },
        {
            id: 4,
            title: 'Option 4',
            checked: false,
            children: []
        },
        {
            id: 5,
            title: 'Option 5',
            checked: false,
            children: []
        }
    ];

    activeList: any[] = [];
    
    constructor(
        private fb: FormBuilder
    ) {
        this.activeList = this.listOfOptions;

        this.form = this.fb.group({
            keyword: ['']
        });

        this.form.get('keyword')
            .valueChanges
            .subscribe(
                value => {
                    this.filterOptions(value);
                }
            );
    }

    filterOptions(value) {
        if (!value) {
            this.activeList = this.listOfOptions;
            return;
        }

        this.activeList = this.listOfOptions.filter((val, i) => {
            if (val.title.indexOf(value) !== -1 ) {
                return true;
            }
            if (val.children.length) {
                for (let i = 0; i < val.children.length; i++) {
                    if (val.children[i].title.indexOf(value) !== -1) {
                        return true;
                    }
                }
            }
            return false;
        });
    }
    
    onItemChecked(index) {
        console.log('listOfOptions ', this.listOfOptions);
    }
}
