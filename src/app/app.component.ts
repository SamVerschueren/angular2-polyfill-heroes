import {Component} from 'angular2-polyfill/core';
import {RouteConfig, ROUTER_PROVIDERS} from 'angular2-polyfill/router';
import {HeroesComponent} from './heroes.component';
import {DashboardComponent} from './dashboard.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>{{myApp.title}}</h1>

		<nav>
			<a href ui-sref="Dashboard" ui-sref-active="router-link-active">Dashboard</a>
			<a href ui-sref="Heroes" ui-sref-active="router-link-active">Heroes</a>
		</nav>

		<div ui-view></div>
	`,
	styleUrls: ['app/app.component.css'],
	providers: [
		ROUTER_PROVIDERS,
		HeroService
	]
})
@RouteConfig([
	{path: '/heroes', name: 'Heroes', component: HeroesComponent},
	{path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
	{path: '/detail/:id', name: 'HeroDetail', component: HeroDetailComponent}
])
export class AppComponent {
	private title: string = 'Tour of Heroes';
}
