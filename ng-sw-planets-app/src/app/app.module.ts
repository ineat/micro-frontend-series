import { BrowserModule } from '@angular/platform-browser';
import { Injector, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { PlanetTileComponent } from './components/planet-tile/planet-tile.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PlanetsComponent } from './core/planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    PlanetTileComponent,
    PaginationComponent,
    PlanetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, PlanetsComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(PlanetsComponent, {injector});
    customElements.define('sw-planets', el);
  }

  ngDoBootstrap() {}
}
