import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AppRoutingModule} from './/app-routing.module';
import {LoginComponent} from './login/login.component';
import {HelpComponent} from './help/help.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeEventsTypesComponent} from './home-events-types/home-events-types.component';
import {HomeOrganizeComponent} from './home-organize/home-organize.component';
import {FooterComponent} from './footer/footer.component';
import {HomeHowToComponent} from './home-how-to/home-how-to.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {HttpClientModule} from '@angular/common/http';
import {InMemoryDataService} from './in-memory-data.service';
import {CategoryService} from './models/category/services/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HelpComponent,
    SearchResultsComponent,
    HomeEventsTypesComponent,
    HomeOrganizeComponent,
    FooterComponent,
    HomeHowToComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
