import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {HelpComponent} from './help/help.component';
import {LoginComponent} from './login/login.component';
import {SearchResultsComponent} from './search-results/search-results.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'help', component: HelpComponent},
  {path: 'login', component: LoginComponent},
  {path: 's', component: SearchResultsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
