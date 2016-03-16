import {Component, OnInit} from 'angular2-polyfill/core';
import {Router} from 'angular2-polyfill/router';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
	selector: 'my-dashboard',
	template: `
		<h3>Top Heroes</h3>

		<div class="grid grid-pad">
			<div ng-repeat="hero in $ctrl.heroes" ng-click="$ctrl.gotoDetail(hero)" class="col-1-4">
				<div class="module hero">
					<h4>{{hero.name}}</h4>
				</div>
			</div>
		</div>
	`,
	styleUrls: ['app/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
	private heroes: Hero[] = [];

	constructor(private _router: Router, private _heroService: HeroService) {

	}

	gotoDetail(hero: Hero) {
		const link = ['HeroDetail', {id: hero.id}];
		this._router.navigate(link);
	}

	ngOnInit() {
		this._heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
	}
}
