angular.module('directory.services', ['ngResource'])

    .factory('Employees', function ($resource) {
        return $resource('http://192.168.1.108:5000/employees/:employeeId/:data');
    });