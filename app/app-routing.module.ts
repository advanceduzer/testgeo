import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './faq/faq.component';
import { AccessibilityCommitmentComponent } from './accessibility-commitment/accessibility-commitment.component';
import { BrochureComponent } from './brochure/brochure.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'faq', component: FaqComponent},
  {path: 'accessibility-commitment', component: AccessibilityCommitmentComponent},
  {path: 'brochure', component: BrochureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
