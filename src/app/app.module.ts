import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ItemComponent } from './pages/item/item.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EncuentranosComponent } from './pages/encuentranos/encuentranos.component';
import { EventosComponent } from './pages/eventos/eventos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductosComponent,
    NosotrosComponent,
    ItemComponent,
    InicioComponent,
    ContactoComponent,
    EncuentranosComponent,
    EventosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
