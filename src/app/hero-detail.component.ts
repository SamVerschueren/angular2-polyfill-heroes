import {Component, Input} from 'angular2-polyfill/core';
import {Hero} from './hero';

@Component({
	selector: 'my-hero-detail',
	template: `
		<div ng-if="myHeroDetail.hero">
			<h2>{{myHeroDetail.hero.name}} details!</h2>
			<div><label>id: </label>{{myHeroDetail.hero.id}}</div>
			<div>
				<label>name: </label>
				<input ng-model="myHeroDetail.hero.name" placeholder="name"/>
			</div>
		</div>
	`
})
export class HeroDetailComponent {
	@Input()
	public hero: Hero;
}
