(function () {
    'use strict';
    angular.module('app', [
        'app.components',
        'ngMaterial',
        'ngAnimate',
        'ngMessages'
    ])
        .config(function ($mdThemingProvider) {
            // Extend the red theme with a few different colors
            var darkVeganGreenMap = $mdThemingProvider.extendPalette('green', {
                '900': '3c462b'
            });
            // Register the new color palette map with the name <code>neonRed</code>
            $mdThemingProvider.definePalette('darkVeganGreen', darkVeganGreenMap);
            $mdThemingProvider.theme('default')
                .primaryPalette('darkVeganGreen')
                .accentPalette('darkVeganGreen')
                .backgroundPalette('red');
        });
})();