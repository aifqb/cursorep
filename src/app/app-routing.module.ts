import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ItemComponent } from "./pages/item/item.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ProductosComponent } from "./pages/productos/productos.component";

const app_routes: Router =[
    { path: '', component: ProductosComponent },
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];



@NgModule({
    imports: [
        RouterModule.forRoot(app_routes)
    ],
    exports: [
        RouterModule
    ]

})

export class AppRoutingModule {

}