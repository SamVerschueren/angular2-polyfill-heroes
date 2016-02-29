import {Component, OnInit} from 'angular2-polyfill/core';
import {Router} from 'angular2-polyfill/router';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	selector: 'my-heroes',
	templateUrl: 'app/heroes.component.html',
	styleUrls: ['app/heroes.component.css'],
	directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
	public title = 'Tour of Heroes';
	public heroes: Hero[];
	public selectedHero: Hero;

	constructor(private _router: Router, private _heroService: HeroService) {

	}

	getHeroes() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero) {
		this.selectedHero = hero;
	}

	gotoDetail() {
		this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
	}

	ngOnInit() {
		this.getHeroes();
	}
}
