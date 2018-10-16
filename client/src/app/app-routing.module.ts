import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { TermsComponent } from './components/terms/terms.component';
import { CompanyComponent } from './components/company/company.component';


const appRoutes: Routes = [
  { path: '',
    component: HomeComponent
  },
  { path: 'company',
    component: CompanyComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'register',
    component: RegisterComponent
  },
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
