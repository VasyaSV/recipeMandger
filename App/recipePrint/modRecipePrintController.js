/**
 * Created by Администратор on 13.02.2016.
 */

var recipePrintController = modApp
    .controller("recipePrintController",
        ["$scope",
            function($scope){

                // текущий список медикоментов в рецепте
             $scope.medicaments = [
                {
                    Title: "Зелёнка",
                    Timing: "Мазать раз в день в течении недели",
                    ToDoing: "Продавать в закрытой баночке"
                },
                {
                    Title: "Бинты",
                    Timing: "Делать перевязку раз в день в теении года",
                    ToDoing: "Продать чистые"
                }
            ]


            }]
    );