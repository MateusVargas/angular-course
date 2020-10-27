import { Component, OnChanges, Input } from '@angular/core'

@Component({
	selector: 'app-star',
	templateUrl: './star.component.html',
	styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

	@Input() //Permite uma variavel receber um valor externo
	rating: number = 0;

	starWidth: number;

	ngOnChanges(): void{
		this.starWidth = this.rating * 94 / 5;
	}	
}