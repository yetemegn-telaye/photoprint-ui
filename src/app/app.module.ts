import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './auth.guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from './z_cross-cutting-concerns/Interceptor/http.interceptor';
import { SuccessHandler } from './z_cross-cutting-concerns/Success_handling/success.handler.service';
import { ExceptionHandler } from './z_cross-cutting-concerns/Exception_handling/Exception.handler.service'
import { ConfirmationDialogComponent } from './z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './z_cross-cutting-concerns/Alert/confirmation-dialog/confirmation-dialog.service';
import { MessageDialogComponent } from './z_cross-cutting-concerns/Alert/message-dialog/message-dialog.component';
import { MessageDialogService } from './z_cross-cutting-concerns/Alert/message-dialog/message-dialog.service';
import { ErrorDialogComponent } from './z_cross-cutting-concerns/Alert/error-dialog/error-dialog.component';
import { ErrorDialogService } from './z_cross-cutting-concerns/Alert/error-dialog/error-dialog.service';
import { Common } from './common';
import { ClientComponent } from './Client/client.component';
import { ClientViewComponent } from './Client/client.view.component';
import { ClientViewEditComponent } from './Client/client.view.edit.component';
import { ImageinfoComponent } from './Imageinfo/imageinfo.component';
import { ImageinfoViewComponent } from './Imageinfo/imageinfo.view.component';
import { ImageinfoViewEditComponent } from './Imageinfo/imageinfo.view.edit.component';
import { AddressComponent } from './Address/address.component';
import { AddressViewComponent } from './Address/address.view.component';
import { AddressViewEditComponent } from './Address/address.view.edit.component';
import { ShopimageinfoComponent } from './Shopimageinfo/shopimageinfo.component';
import { ShopimageinfoViewComponent } from './Shopimageinfo/shopimageinfo.view.component';
import { ShopimageinfoViewEditComponent } from './Shopimageinfo/shopimageinfo.view.edit.component';
import { UserComponent } from './User/user.component';
import { UserViewComponent } from './User/user.view.component';
import { UserViewEditComponent } from './User/user.view.edit.component';
import { ShopComponent } from './Shop/shop.component';
import { ShopViewComponent } from './Shop/shop.view.component';
import { ShopViewEditComponent } from './Shop/shop.view.edit.component';
import { OrderComponent } from './Order/order.component';
import { OrderViewComponent } from './Order/order.view.component';
import { OrderViewEditComponent } from './Order/order.view.edit.component';
import { ContactComponent } from './Contact/contact.component';
import { ContactViewComponent } from './Contact/contact.view.component';
import { ContactViewEditComponent } from './Contact/contact.view.edit.component';
import { UserLoginUIComponent } from './user-login-ui/user-login-ui.component';
import { SignupUiComponent } from './signup-ui/signup-ui.component';
import { SignupUiTwoComponent } from './signup-ui-two/signup-ui-two.component';
import { ShopHomeUiComponent } from './shop-home-ui/shop-home-ui.component';


@NgModule({
  declarations: [
    ClientComponent,
ClientViewComponent,
ClientViewEditComponent,
ImageinfoComponent,
ImageinfoViewComponent,
ImageinfoViewEditComponent,
AddressComponent,
AddressViewComponent,
AddressViewEditComponent,
ShopimageinfoComponent,
ShopimageinfoViewComponent,
ShopimageinfoViewEditComponent,
UserComponent,
UserViewComponent,
UserViewEditComponent,
ShopComponent,
ShopViewComponent,
ShopViewEditComponent,
OrderComponent,
OrderViewComponent,
OrderViewEditComponent,
ContactComponent,
ContactViewComponent,
ContactViewEditComponent,

    ConfirmationDialogComponent,
    MessageDialogComponent,
    ErrorDialogComponent,
    AppComponent,
    UserLoginUIComponent,
    SignupUiComponent,
    SignupUiTwoComponent,
    ShopHomeUiComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, {onSameUrlNavigation: 'reload', useHash: false }),
    NgbModule.forRoot()
  ],
    providers: [ {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}, AuthGuard, SuccessHandler, ExceptionHandler, ConfirmationDialogService, MessageDialogService, ErrorDialogService, Common],
    entryComponents: [ ConfirmationDialogComponent, MessageDialogComponent, ErrorDialogComponent ],
    bootstrap: [AppComponent]
})
export class AppModule { }
