import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule , JsonpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule, ButtonModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TaskListCompleted } from './task-list/task-list.completed';
import { TaskListUnfinished } from './task-list/task-list.unfinished';
import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './detail/edit.component';
import { AddComponent } from './detail/add.component';
import { AppRoutingModule } from './app-routing.module';
import { TaskService } from './app.task.service';
import { AppDataService } from './app.data.service'
import { Tasks } from './app.taskType';
import { DialogComponent } from './dialog/dialog.component';
import { PopupModule } from 'ng2-opd-popup';
import {AgGridModule} from 'ag-grid-angular/main';
import {GridComponent} from './grid/grid.component';
import { RedComponentComponent } from './red-component/red-component.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TaskListCompleted,
    TaskListUnfinished,
    DetailComponent,
    EditComponent,
    AddComponent,
    DialogComponent,
    GridComponent,
    RedComponentComponent,
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
    ButtonModule,
    PopupModule.forRoot(),
    AgGridModule.withComponents(
      [
        RedComponentComponent,
      ]
    )
  ],
  providers: [TaskService, Tasks],
  bootstrap: [AppComponent]
})
export class AppModule { }
