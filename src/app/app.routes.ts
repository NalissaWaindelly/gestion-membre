import { Routes } from '@angular/router';
import { DepartementCreateComponent } from './departement/departement-create/departement-create.component';
import { DepartementListComponent } from './departement/departement-list/departement-list.component';
export const routes: Routes = [
    { path: 'departements/create', component: DepartementCreateComponent },
    { path: 'departements', component: DepartementListComponent },
    { path: '', redirectTo: '/departements/create', pathMatch: 'full' }

];
