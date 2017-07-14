/**
 * Created by gzn on 2017/7/12.
 */
import {Injectable} from '@angular/core';
import {Tasks} from './app.taskType'

/*模拟http请求，需导入*/
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private tasksUrl = 'api/tasks';  // URL to web api
  constructor(private http:Http){}
  getTaskList():Promise<Tasks[]>{
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json().data as Tasks[])
      .catch(this.handleError);
  }
  getTaskDetail(id:number):Promise<Tasks>{
    const url =  `${this.tasksUrl}/${id}`;
    /*通过id请求，单独查询一个，避免全部查询再过滤，这样有点浪费资源*/
    return this.http.get(url).toPromise().then(response => response.json().data as Tasks[])
      .catch(this.handleError)
  }
  addTask(task:Tasks):Promise<Tasks>{
    return this.http.post(this.tasksUrl,JSON.stringify(task),{headers:this.headers})
      .toPromise().then(res=>res.json().data as Tasks[])
      .catch(this.handleError)
  }
  updateTask(task:Tasks):Promise<Tasks>{
    task.isComplete = Number(task.isComplete);
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.put(url,JSON.stringify(task),{headers:this.headers})
      .toPromise().then(res=>res)
      .catch(this.handleError);
  }
  deleteTask(id:number):Promise<Tasks>{
    const url = `${this.tasksUrl}/${id}`;
    return this.http.delete(url,{headers:this.headers})
      .toPromise().then(() => null)
      .catch(this.handleError)
  }
  //异常处理
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
