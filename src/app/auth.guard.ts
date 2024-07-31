import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
 let isLoggedId=localStorage.getItem('isLoggedIn')

 if(isLoggedId=='false'){
  alert("Only Admin Can See")
  return false
 }
  return true;
};
