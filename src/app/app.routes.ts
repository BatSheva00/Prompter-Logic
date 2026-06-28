import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { WorkspaceComponent } from './features/workspace/workspace.component';
import { SavedPromptsComponent } from './features/saved-prompts/saved-prompts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Prompter Logic' },
  { path: 'workspace', component: WorkspaceComponent, title: 'Workspace — Prompter Logic' },
  { path: 'saved', component: SavedPromptsComponent, title: 'Saved Prompts — Prompter Logic' },
  { path: '**', redirectTo: '' },
];
