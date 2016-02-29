import {Component, OnInit} from 'angular2-polyfill/core';
import {RouteParams} from 'angular2-polyfill/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	templateUrl: 'app/hero-detail.component.html',
	styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	private hero: Hero;

	constructor(private _heroService: HeroService, private _routeParams: RouteParams) {

	}

	goBack() {
		window.history.back();
	}

	ngOnInit() {
		const id = +this._routeParams.get('id');

		this._heroService.getHero(id).then(hero => this.hero = hero);
	}
}
