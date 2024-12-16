import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ComponentsComponent } from './pages/components/components.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { FaqComponent } from './pages/faq/faq.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalitiesComponent } from './pages/labs/labs.component';
import { LibrariesComponent } from './pages/libraries/libraries.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { TipsComponent } from './pages/tips/tips.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'components', component: ComponentsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'tips', component: TipsComponent },
  { path: 'libraries', component: LibrariesComponent },
  { path: 'personalities', component: PersonalitiesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];
