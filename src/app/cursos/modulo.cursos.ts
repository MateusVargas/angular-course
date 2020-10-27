import { NgModule } from '@angular/core'
import { CursosListComponent } from './cursos-list.component';
import { CursoInfoComponent } from './curso-info.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { StarModule } from '../shared/component/estrelas/modulo.estrelas';
import { PipeModule } from '../shared/pipe/modulo.pipe';

@NgModule({
	declarations: [
		CursosListComponent,
    	CursoInfoComponent,
	],
	
	imports: [
		FormsModule,
		CommonModule,
		StarModule,
		PipeModule,
		RouterModule.forChild([
	      	{
	        	path: 'cursos/info/:id', component: CursoInfoComponent
	      	},
	      	{
	        	path: 'cursos', component: CursosListComponent
	      	}
    	])
	]

})//TORNANDO A CLASSE UM MODULO

export class CursoModule{
	
}