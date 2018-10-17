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
    AssistanceComponent
  ],
  imports: [
    BrowserModule,
    // FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
