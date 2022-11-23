import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Module Routing
import { RoutingModule } from './routing.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/detail.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent,
    PokeSearchComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
  ]
})
export class PokeModule { }
