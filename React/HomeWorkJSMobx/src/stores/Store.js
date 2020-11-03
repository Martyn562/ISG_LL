import { observable, action, makeObservable } from 'mobx';

export class Store {
  isAuthenticated = false;
  uName = '';
  users = [{id:0, username:"admin", password:"123"}];
  setAuthentication(newValue) {
    this.isAuthenticated = newValue;
  }
  setuName(newValue) {
    this.uName = newValue;
  }
  setUsers(username, password){
    const user = this.users.find(user => user.username === username && user.password === password);

    if(user){
      this.setAuthentication(true);
    } 
    else{
      {
        <p>Something get wrong, try Again !</p>
      }
    }
  }
  SignOut(){
    this.isAuthenticated = false;
    this.uName = '';
  }

  constructor() {
      makeObservable(this, {
      isAuthenticated:observable,
      users:observable,
      uName:observable,
      setAuthentication:action,
      setUsers:action,
      
    })
  }
}

export default new Store();