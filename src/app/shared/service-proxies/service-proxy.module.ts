import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.UserServiceProxy,
        ApiServiceProxies.CommonLookupServiceProxy,
        ApiServiceProxies.TokenServiceProxy
        
    ]
})
export class ServiceProxyModule { }
