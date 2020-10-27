import { Component, OnInit } from '@angular/core';
import { Curso } from './cursos';
import { CursoService } from './cursos.service';

@Component({
	//selector: 'app-cursos-list', //CRIA UMA TAG HTML, O SELECTOR NÃO É MAIS NECESSARIO PORQUE JA EXISTE UMA ROTA CHAMANDO ESTE COMPONENTE
	
	templateUrl: './cursos-list.component.html'
})

export class CursosListComponent implements OnInit{
	
	filtros: Curso[] = [];

	_cursos: Curso[] = [];
	_filterBy: string;

	constructor(private cursoService: CursoService){}

	ngOnInit(): void{
		this.retrieveAll();
	}


	retrieveAll(): void {
		this.cursoService.retrieveAll().subscribe({
			next: cursos => {
				this._cursos = cursos;
				this.filtros = this._cursos;
			},
			error: erro => console.log(erro)
		})		
	}


	deleteById(cursoId: number): void {
		this.cursoService.deleteById(cursoId).subscribe({
			next: () => {
				alert('apagado com sucesso')
				this.retrieveAll();
			},
			error: erro => console.log(erro)
		})
	}

	set filter(value: string){
		this._filterBy = value;
		this.filtros = this._cursos.filter((curso: Curso) => curso.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1);
	}

	get filter(){
		return this._filterBy;
	}


}