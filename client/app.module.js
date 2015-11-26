(function () {
    'use strict';
    angular.module('app', [
        'app.components',
        'ngMaterial',
        'ngAnimate',
        'ngMessages',
        'ngRoute'
    ])
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.definePalette('amazingPaletteName', {
                '50': '5F7140',
                '100': '5F7140',
                '200': '5F7140',
                '300': '598846',
                '400': '598846',
                '500': '417E44',
                '600': '417E44',
                '700': '5F7140',
                '800': '5F7140',
                '900': 'b71c1c',
                'A100': 'ff8a80',
                'A200': 'ff5252',
                'A400': 'ff1744',
                'A700': 'd50000',
                'contrastDefaultColor': 'light', // whether, by default, text (contrast)
                // on this palette should be dark or light
                'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
                'contrastLightColors': undefined // could also specify this if default was 'dark'
            });
            $mdThemingProvider.theme('default')
                .primaryPalette('amazingPaletteName')
        });
})();