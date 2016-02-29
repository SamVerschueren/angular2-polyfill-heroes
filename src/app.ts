import * as angular from 'angular';
import 'angular-ui-router';
import {bootstrap} from 'angular2-polyfill/platform/upgrade';
import {AppComponent} from './app/app.component';

const ngModule = angular.module('heroes', ['ui.router']);

bootstrap(ngModule, AppComponent);
