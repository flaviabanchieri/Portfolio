import { SobremimComponent } from './sobremim/sobremim/sobremim.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomepageComponent  },
  { path: 'home', component: HomepageComponent  },
  { path: 'eu', component: SobremimComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
}

)
export class AppRoutingModule { }
