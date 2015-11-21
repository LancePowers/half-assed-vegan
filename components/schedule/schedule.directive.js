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

        //ng-show hide variables
        vm.visible = [false, false, false, false, false]
        vm.toggleExpanded = function (num) {

            vm.visible.forEach(function (element, index) {
                if (index === num) {
                    console.log(this)
                    vm.visible[index] = !vm.visible[index]
                } else {
                    vm.visible[index] = false
                }
            })

        }
        vm.vegan = {
            clientName: "",
            clientEmail: ""
        };
        vm.days = [{
            name: 'Monday',
            val: false
            }, {
            name: 'Tuesday',
            val: false
            }, {
            name: 'Wednesday',
            val: false
            }, {
            name: 'Thursday',
            val: false
            }, {
            name: 'Friday',
            val: false
            }, {
            name: 'Saturday',
            val: false
            }, {
            name: 'Sunday',
            val: false
            }]
    }
})();