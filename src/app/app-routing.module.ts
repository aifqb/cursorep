import { NgModule } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { EncuentranosComponent } from "./pages/encuentranos/encuentranos.component";
import { EventosComponent } from "./pages/eventos/eventos.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { ItemComponent } from "./pages/item/item.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ProductosComponent } from "./pages/productos/productos.component";

const app_routes: Router =[
    { path: 'inicio', component: InicioComponent },
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'productos', component: ProductosComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'encuentranos', component: EncuentranosComponent },
    { path: 'eventos', component: EventosComponent },
    { path: 'item', component: ItemComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' },
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