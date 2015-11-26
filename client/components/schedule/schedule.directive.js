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
        vm.button = 'Go';
        vm.toggleStart = function () {
            vm.button = 'Change';
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
        vm.partner = {};
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
            var code = '';
            for (var i = 0; i < 7; i++) {
                if (vm.days[i].val) {
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
                    console.log(response);
                    if (response) {
                        vm.partner = {
                            user: response.data[0].user_id,
                            email: response.data[0].user_email,
                            schedule: response.data[0].user_schedule
                        }

                        vm.message = "Congrats, " + vm.vegan.user + "! We've found a match! Allow us to introduce " + vm.partner.user + ", your new soy-mate."
                        console.log(vm.message);
                    } else {
                        vm.message = "Bummer " + vm.vegan.user + ". We didn't find a match just yet. Cheek up though! We'll match you with the next available half-ass we find."
                    }
                    vm.toggleStart();
                })

        }

        vm.message = "Have you got the birkenstocks and bumper stickers, but just can 't give up the bacon? We get it. You're a half - assed vegan! The good news is, you 're not alone. Make a commitment to skip the beef on chosen days each week and we'll find a partner for you. Combined you'll become one full-fledged vegan!"
    }
})();