import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Category } from '../category.dto';

@Component({
  selector: 'category-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
    @Output() back = new EventEmitter();
  @Output() save = new EventEmitter<Category>();
  @Input() loading: Boolean = false;

  constructor(private fb:FormBuilder) { }
    //categoryForm = new FormGroup({
    //    id: new FormControl(0),
    //    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    //    description: new FormControl('')
    //})

  categoryForm = this.fb.group({
    id: [0],
    name: [''],
    description: ['', [Validators.required, Validators.minLength(3)]]
    })

    @Input()
    set category(category: Category) {
        console.log('setting category',category)
        this.categoryForm.setValue(category);
    }

  onSubmit() {
    //this.loading = true;
      this.save.emit(this.categoryForm.value as Category);
      this.categoryForm.reset();
    }

    MostrarTabla() {
        this.back.emit();
    }
}
