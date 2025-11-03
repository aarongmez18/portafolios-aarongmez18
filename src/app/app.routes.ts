import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Project } from './pages/project/project';
import { About } from './pages/about/about';
import { Home } from './pages/home/home';
import { EntryComponent } from './pages/entry/entry';


export const routes: Routes = [
{ path: '', component: EntryComponent},
  { path: 'home', component: Home, pathMatch: 'full' },
  { path: 'about', component: About },
  { path: 'projects', component: Project },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
