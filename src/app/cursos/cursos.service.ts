import { Curso } from './cursos'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
//DEIXANDO A CLASSE ELEGÍVEL PARA INJEÇÃO DE DEPENDENCIAS, A CLASSE SERÁ CARREGADA JUNTO COM APP.MODULE.TS


export class CursoService{

	private cursoUrl: string = 'http://localhost:3100/api/courses';

	constructor(private httpClient: HttpClient) {}

	retrieveAll(): Observable<Curso[]> {
		return this.httpClient.get<Curso[]>(this.cursoUrl);
	}

	retrieveById(id: number): Observable<Curso> {
		return this.httpClient.get<Curso>(`${this.cursoUrl}/${id}`);
	}

	save(curso: Curso): Observable<Curso>{
		if(curso.id){
			return this.httpClient.put<Curso>(`${this.cursoUrl}/${curso.id}`, curso);
		}else{
			return this.httpClient.put<Curso>(`${this.cursoUrl}`, curso);
		}
	}

	deleteById(id: number): Observable<any> {
		return this.httpClient.delete<any>(`${this.cursoUrl}/${id}`);
	}
}

var cursos: Curso[] = [
			{
				id: 1,
				name: 'Angular: forms',
				imageUrl: '/assets/imagens/img1.png',
				description: 'curso 1',
				price: 139,
				code: 'g7c-52',
				duration: 20,
				rating: 3.5,
				releaseDate: '12/04/2009'
			},
			{
				id: 2,
				name: 'Angular: curso 2',
				imageUrl: 'assets/imagens/img2.png',
				description: 'curso 2',
				price: 89,
				code: 'noi-90',
				duration: 14,
				rating: 4,
				releaseDate: '11/10/2017'
			},{
				id: 3,
				name: 'Angular: routes',
				imageUrl: 'assets/imagens/img3.png',
				description: 'curso 3',
				price: 56,
				code: 'jkm-00',
				duration: 3,
				rating: 4.6,
				releaseDate: '09/09/2010'
			},{
				id: 4,
				name: 'Angular: components',
				imageUrl: 'assets/imagens/img4.png',
				description: 'curso 4',
				price: 90,
				code: 'avf-97',
				duration: 1,
				rating: 5,
				releaseDate: '11/10/2017'
			}
		]