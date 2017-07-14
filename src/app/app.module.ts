import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule ,JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TaskListCompleted } from './task-list/task-list.completed';
import { TaskListUnfinished } from './task-list/task-list.unfinished';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './detail/edit.component';
import { AddComponent } from './detail/add.component';
import { AppRoutingModule }     from './app-routing.module';
import { TaskService }     from './app.task.service';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { AppDataService } from './app.data.service'
import { Tasks } from './app.taskType';
/*primeng*/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TaskListCompleted,
    TaskListUnfinished,
    DetailComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(AppDataService),
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [TaskService, Tasks],
  bootstrap: [AppComponent]
})
export class AppModule { }
