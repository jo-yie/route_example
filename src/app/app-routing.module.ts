import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './component/main.component';
import { canLeaveForm, canProceedtoForm } from './guards';
import { NoticeComponent } from './component/notice.component';
import { FormComponent } from './component/form.component';

const routes: Routes = [
  { path: '', component: MainComponent }, 
  { path: 'form', 
    component: FormComponent,
    canActivate: [ canProceedtoForm ], canDeactivate: [ canLeaveForm ]
  }, 
  { path: 'notice', component: NoticeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
