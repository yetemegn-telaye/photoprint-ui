import { Routes } from '@angular/router';
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
import {UserLoginUIComponent} from './user-login-ui/user-login-ui.component';
import {SignupUiComponent} from './signup-ui/signup-ui.component';
import {SignupUiTwoComponent} from './signup-ui-two/signup-ui-two.component';
import {ShopHomeUiComponent} from './shop-home-ui/shop-home-ui.component';
import { from } from 'rxjs';

//import { AuxRoute } from '@angular/router';

//import { LoginPageDecorationComponent } from './login/loginPageDecoration/loginPageDecoration.component'

export const rootRouterConfig: Routes = [
  {path: "", component: UserLoginUIComponent},
  {path: "user-login-ui/signup-ui", component: SignupUiComponent},
  {path: "user-login-ui/signup-ui/signup-ui-two", component: SignupUiTwoComponent},
  {path: "user-login-ui/signup-ui/signup-ui-two/shop-home-ui", component: ShopHomeUiComponent},
  { path: "clients", component: ClientComponent},
{ path: "clients/:clientId", component: ClientComponent },
{ path: "clients-view", component: ClientViewComponent},
{ path: "clients-view-edit", component: ClientViewEditComponent},
{ path: "imageinfos", component: ImageinfoComponent},
{ path: "imageinfos/:imageinfoId", component: ImageinfoComponent },
{ path: "imageinfos-view", component: ImageinfoViewComponent},
{ path: "imageinfos-view-edit", component: ImageinfoViewEditComponent},
{ path: "addresss", component: AddressComponent},
{ path: "addresss/:addressId", component: AddressComponent },
{ path: "addresss-view", component: AddressViewComponent},
{ path: "addresss-view-edit", component: AddressViewEditComponent},
{ path: "shopimageinfos", component: ShopimageinfoComponent},
{ path: "shopimageinfos/:shopimageinfoId", component: ShopimageinfoComponent },
{ path: "shopimageinfos-view", component: ShopimageinfoViewComponent},
{ path: "shopimageinfos-view-edit", component: ShopimageinfoViewEditComponent},
{ path: "users", component: UserComponent},
{ path: "users/:userId", component: UserComponent },
{ path: "users-view", component: UserViewComponent},
{ path: "users-view-edit", component: UserViewEditComponent},
{ path: "shops", component: ShopComponent},
{ path: "shops/:shopId", component: ShopComponent },
{ path: "shops-view", component: ShopViewComponent},
{ path: "shops-view-edit", component: ShopViewEditComponent},
{ path: "orders", component: OrderComponent},
{ path: "orders/:orderId", component: OrderComponent },
{ path: "orders-view", component: OrderViewComponent},
{ path: "orders-view-edit", component: OrderViewEditComponent},
{ path: "contacts", component: ContactComponent},
{ path: "contacts/:contactId", component: ContactComponent },
{ path: "contacts-view", component: ContactViewComponent},
{ path: "contacts-view-edit", component: ContactViewEditComponent},

  { path: '', redirectTo: 'home', pathMatch: 'full' }
  //new AuxRoute({path: 'loginPageDecoration', component: LoginPOwnerComponentageDecorationComponent, as: 'Chat'})
];
