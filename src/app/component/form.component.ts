import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-form',
  standalone: false,
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  private fb = inject(FormBuilder)
  private router = inject(Router)
  private appService = inject(AppService)

  protected form !: FormGroup

  ngOnInit(): void { 
    this.form = this.createForm()
  }

  get pristine() { 
    return this.form.pristine
  }

  submit() { 
    console.info(">>>form: ", this.form.value)
    this.form = this.createForm() 
    this.appService.checked = false
    this.router.navigate(['/'])
  }

  private createForm() { 
    return this.fb.group({
      name: this.fb.control<string>('')
    })
  }

}
