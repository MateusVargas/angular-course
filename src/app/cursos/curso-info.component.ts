import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Curso } from './cursos';
import { CursoService } from './cursos.service';

@Component({
	templateUrl: './curso-info.component.html'
})

export class CursoInfoComponent implements OnInit{
	
	curso: Curso;

	constructor(private activatedRoute: ActivatedRoute, private cursoService: CursoService){}

	ngOnInit(): void{
		this.cursoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')).subscribe({
			next: Curso => this.curso = Curso,
			error: erro => console.log(erro)
		});
	}


	save(): void{
		this.cursoService.save(this.curso).subscribe({
			next: curso => alert('salvo com sucesso'),
			error: error => console.log(error)
		});
	}

}