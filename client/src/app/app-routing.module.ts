import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
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


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  // Company
  { path: 'company',
    component: CompanyComponent
  },
  { path: 'company/history',
    component: HistoryComponent
  },
  { path: 'company/factory',
    component: FactoryComponent
  },

  // Fabrication
  { path: 'fabrication',
    component: FabricationComponent
  },
  { path: 'fabrication/supQuality',
    component: SupQualityComponent
  },
  { path: 'fabrication/environment',
    component: EnvironmentComponent
  },

  // Products
  { path: 'products',
    component: ProductsComponent
  },
  { path: 'products/cotton',
    component: CottonComponent
  },
  { path: 'products/silk',
    component: SilkComponent
  },
  { path: 'products/metallic',
    component: MetallicComponent
  },
  { path: 'products/all-purpose',
    component: AllPurposeComponent
  },
  { path: 'products/polyester',
    component: PolyesterComponent
  },
  { path: 'products/building',
    component: BuildingComponent
  },

  // References
  { path: 'references',
    component: ReferencesComponent
  },
  { path: 'references/textile-companies',
    component: TextileCompaniesComponent
  },
  { path: 'references/large-distribution',
    component: LargeDistributionComponent
  },

  // Contact
  { path: 'contact',
    component: ContactComponent
  },
  { path: 'contact/commercial',
    component: CommercialComponent
  },
  { path: 'contact/technical',
    component: TechnicalComponent
  },

  // Customer
  { path: 'customer',
    component: CustomerComponent
  },
  { path: 'customer/account',
    component: AccountComponent
  },
  { path: 'customer/orders',
    component: OrdersComponent
  },
  { path: 'customer/orders/current',
    component: CurrentOrdersComponent
  },
  { path: 'customer/orders/history',
    component: OrderHistoryComponent
  },
  { path: 'customer/orders/statement',
    component: OrderStatementComponent
  },
  { path: 'customer/assistance',
    component: AssistanceComponent
  },

//////////////////

  // Register
  { path: 'register',
    component: RegisterComponent
  },

  // Login
  { path: 'login',
    component: LoginComponent
  },

  // Terms and Privacy
  { path: 'terms',
    component: TermsComponent
  },
  { path: 'privacy',
    component: PrivacyComponent
  },
  { path: '**',
    component: HomeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
