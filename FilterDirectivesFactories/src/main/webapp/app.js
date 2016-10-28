angular.module('examApp', [])
        .filter('average', function () {
            return function (grades) {
                var sum = 0;
                var count = 0;

                for (var i = 0; i < grades.length; i++) {
                    var grade = grades[i].grade;
                    if (angular.isDefined(grade)) {
                        sum += parseInt(grades[i].grade, 10);
                        count++;
                    }
                }
                return sum / count;
            };
        })
        .directive('studentGrades', function () {
            return {
                templateUrl: 'table.html'
            };
        })

        .controller('ExamController', function ($scope, tableGen) {
                $scope.studentsInfo = tableGen.generate();
//                $scope.studentsInfo.allCourses = [
//                    {courseId: 1000, courseName: "Basic Programming"},
//                    {courseId: 1001, courseName: "Advanced Programming"},
//                    {courseId: 1003, courseName: "DataBase Intro"}];
//                $scope.studentsInfo.students = [];
//                $scope.studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
//                $scope.studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
//                $scope.studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
//                $scope.studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});

            })
        .service('tableGen', function () {
            this.generate = function () {
                var studentsInfo = {};
                studentsInfo.allCourses = [
                    {courseId: 1000, courseName: "Basic Programming"},
                    {courseId: 1001, courseName: "Advanced Programming"},
                    {courseId: 1003, courseName: "DataBase Intro"}];
                studentsInfo.students = [];
                studentsInfo.students.push({studentId: 100, name: "Peter Hansen", grades: [{grade: "10"}, {grade: "12"}, {}]});
                studentsInfo.students.push({studentId: 101, name: "Jan Olsen", grades: [{grade: "7"}, {grade: "10"}, {}]});
                studentsInfo.students.push({studentId: 102, name: "Gitte Poulsen", grades: [{grade: "7"}, {grade: "7"}, {}]});
                studentsInfo.students.push({studentId: 103, name: "John McDonald", grades: [{grade: "10"}, {}, {grade: "7"}]});
                return studentsInfo;
            };
        });
      