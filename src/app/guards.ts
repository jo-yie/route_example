import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, Router, RouterState, RouterStateSnapshot } from "@angular/router";
import { AppService } from "./app.service";
import { FormComponent } from "./component/form.component";

export const canProceedtoForm: CanActivateFn = 
    (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        // boolean Promise<boolean>, Observable<boolean>
        // UrlTree Promise<UrlTree> Observable<UrlTree>
        const appService = inject(AppService)
        const router = inject(Router)
        
        if (!appService.checked) {
            return router.parseUrl('/notice')
        }

        return true

    }

export const canLeaveForm: CanDeactivateFn<FormComponent> = 
    (form: FormComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        // boolean Promise<boolean>, Observable<boolean>
        // UrlTree Promise<UrlTree> Observable<UrlTree>
        if (!form.pristine) {
            return confirm('Form data is not saved.\nAre you sure you want to leave?')
        }
        return true
    }