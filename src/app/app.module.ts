import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todo.service';
import { CreateComponent } from './create/create.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'create', component: CreateComponent,
  },
  {
    path: 'todo', component: TodosComponent,
  },
  {
    path: '', redirectTo: 'todo', pathMatch: 'full',
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    CreateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    TodoService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
