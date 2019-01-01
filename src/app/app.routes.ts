import { RouterModule, Routes} from '@angular/router';
import { FormComponent } from './pages/form/form.component';
import { FormModelComponent } from './pages/form-model/form-model.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DetailComponent } from './pages/detail/detail.component';
const appRoutes: Routes = [
{path: '', component: FormComponent, data: {titulo : 'Form control' } },
{path: 'model', component: FormModelComponent, data: {titulo : 'Form model' } },
{path: 'contacts', component: ContactsComponent, data: {titulo : 'Contacts' } },
{path: 'contacts/:id', component: DetailComponent, data: {titulo : 'Contacts detail' } },
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
