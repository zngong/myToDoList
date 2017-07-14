/**
 * Created by gzn on 2017/7/12.
 */
import { InMemoryDbService } from 'angular2-in-memory-web-api';
export class AppDataService implements InMemoryDbService {
  createDb() {
    let tasks = [
      { id: 11, title: '购买车票',content:'在7月17号购票去广州在7月17号购票去在7月17号购票去广州在7月17号购票去广州广州在7月17号购票去广州在7月17号购票去广州在7月17号购票去广州',isComplete:1,createTime:'2017-07-12'},
      { id: 12, title: '去宠物市场',content:'看看狗狗的行情',isComplete:1,createTime:'2017-07-12'},
      { id: 13, title: '去趟宝安',content:'找找朋友',isComplete:1,createTime:'2017-07-12'},
    ];
    return {tasks};
  }
}
