/**
 * Created by gzn on 2017/7/12.
 */
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'

import { DetailComponent } from './detail/detail.component';
import { EditComponent } from './detail/edit.component';
import { AddComponent } from './detail/add.component';
import { DialogComponent } from './dialog/dialog.component';
import { TaskListCompleted } from './task-list/task-list.completed';
import { TaskListUnfinished } from './task-list/task-list.unfinished';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
    {path: '', redirectTo: '/taskList', pathMatch: 'full' },
    {path: 'completed', component: TaskListCompleted},
    {path: 'unfinished', component: TaskListUnfinished},
    {path: 'detail/:id', component: DetailComponent},
    {path: 'edit/:id', component: EditComponent},
    {path: 'add', component: AddComponent},
    {path: 'dialog', component: DialogComponent},
    {path: 'grid', component: GridComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
