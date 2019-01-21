import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';
import { ArticleService } from './services/article.service';
import { ManagementService } from './services/management.service';
import { HttpModule } from '@angular/http';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { CompanyComponent } from './components/company/company.component';
import { HistoryComponent } from './components/history/history.component';
import { FactoryComponent } from './components/factory/factory.component';
import { FabricationComponent } from './components/fabrication/fabrication.component';
import { SupQualityComponent } from './components/sup-quality/sup-quality.component';
import { EnvironmentComponent } from './components/environment/environment.component';
import { ProductsComponent } from './components/products/products.component';
import { CottonComponent } from './components/cotton/cotton.component';
import { SilkComponent } from './components/silk/silk.component';
import { MetallicComponent } from './components/metallic/metallic.component';
import { AllPurposeComponent } from './components/all-purpose/all-purpose.component';
import { PolyesterComponent } from './components/polyester/polyester.component';
import { BuildingComponent } from './components/building/building.component';
import { ReferencesComponent } from './components/references/references.component';
import { TextileCompaniesComponent } from './components/textile-companies/textile-companies.component';
import { LargeDistributionComponent } from './components/large-distribution/large-distribution.component';
import { ContactComponent } from './components/contact/contact.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { TechnicalComponent } from './components/technical/technical.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AccountComponent } from './components/account/account.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CurrentOrdersComponent } from './components/current-orders/current-orders.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { OrderStatementComponent } from './components/order-statement/order-statement.component';
import { AssistanceComponent } from './components/assistance/assistance.component';
import { LoginComponent } from './components/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';
import { RoleGuardService } from './guards/role-guard.service';
import { Error401Component } from './components/error401/error401.component';
import { NewArticleComponent } from './components/new-article/new-article.component';
import { DashboardArticlesListComponent } from './components/dashboard-articles-list/dashboard-articles-list.component';
import { DashboardSideMenuComponent } from './components/dashboard-side-menu/dashboard-side-menu.component';
import { TruncatePipe }   from './app.pipe';
import { ArraySortPipe }   from './app.pipe';
import { ArticleComponent } from './components/article/article.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DeleteArticleComponent } from './components/delete-article/delete-article.component';

export function tokenGetter() {
  const user = JSON.parse(localStorage.getItem('user'));
  const userToken = user ? user.token : null;
  return userToken;
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    RegisterComponent,
    PrivacyComponent,
    TermsComponent,
    CompanyComponent,
    HistoryComponent,
    FactoryComponent,
    FabricationComponent,
    SupQualityComponent,
    EnvironmentComponent,
    ProductsComponent,
    CottonComponent,
    SilkComponent,
    MetallicComponent,
    AllPurposeComponent,
    PolyesterComponent,
    BuildingComponent,
    ReferencesComponent,
    TextileCompaniesComponent,
    LargeDistributionComponent,
    ContactComponent,
    CommercialComponent,
    TechnicalComponent,
    CustomerComponent,
    AccountComponent,
    OrdersComponent,
    CurrentOrdersComponent,
    OrderHistoryComponent,
    OrderStatementComponent,
    AssistanceComponent,
    LoginComponent,
    Error401Component,
    NewArticleComponent,
    DashboardArticlesListComponent,
    DashboardSideMenuComponent,
    TruncatePipe,
    ArticleComponent,
    ArraySortPipe,
    DeleteArticleComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    JwtModule.forRoot({})
  ],
  providers: [AuthService, ArticleService, ManagementService, AuthGuard, NotAuthGuard, RoleGuardService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
