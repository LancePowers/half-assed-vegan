(function () {
    'use strict';
    angular.module('app.components.schedule')
        .directive('schedule', scheduleDirective);

    function scheduleDirective() {
        return {
            restrict: 'E',
            templateUrl: 'components/schedule/schedule.html',
            scope: {},
            controller: ScheduleController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    ScheduleController.$inject = [];

    function ScheduleController() {
        var vm = this;
        vm.days = {
            Monday: true,
            Tuesday: true,
            Wednesday: false,
            Thursday: false,
            Friday: false,
            Saturday: false,
            Sunday: false
        };
    }
})();