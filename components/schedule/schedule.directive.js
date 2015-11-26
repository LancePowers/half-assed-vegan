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

    ScheduleController.$inject = ['router'];

    function ScheduleController(router) {
        var vm = this;
        vm.start = false;
        vm.toggleStart = function () {
            vm.start = !vm.start;
        }

        vm.visible = [false, false, false, false, false];

        vm.toggleExpanded = function (num) {

            vm.visible.forEach(function (element, index) {
                if (index === num) {
                    console.log(this)
                    vm.visible[index] = !vm.visible[index]
                } else {
                    vm.visible[index] = false
                }
            })

        };

        vm.vegan = {
            user: "",
            email: "",
            schedule: ""
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

        vm.selection = function () {
            var code = ''
            for (var i = 0; i < 7; i++) {
                if (vm.days[i.val]) {
                    code += '1';
                } else {
                    code += '0';
                }
            }
            vm.vegan.schedule = code;
        }

        vm.match = function () {
            vm.selection();
            router.post(vm.vegan)
                .then(function (response) {
                    console.log(response)
                });
        }
    }
})();