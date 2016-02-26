import * as angular from 'angular';
import {bootstrap} from 'angular2-polyfill/platform/upgrade';
import {AppComponent} from './app/app.component';

const ngModule = angular.module('heroes', []);

bootstrap(ngModule, AppComponent);
