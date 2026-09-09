import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';

@Injectable({
  providedIn: 'root'
})
export class OutProducDetailGuard implements CanDeactivate<ProductDetailComponent> {
  canDeactivate(
    component: ProductDetailComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): 
    Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(component.pressClose){
        component.alertClose();
      }
      return component.pressClose;
  }
  
}
