import { Routes } from '@angular/router';
import { CapaComponent } from './capa/capa.component';
import { ContatoComponent } from './contato/contato.component';
import { CurriculoComponent } from './curriculo/curriculo.component';

export const ROUTES: Routes = [
    { path: '', component: CapaComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'curriculo', component: CurriculoComponent }
];