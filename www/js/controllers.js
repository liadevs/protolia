angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

$scope.history = function(){
        $state.go('history');
    }, function(){
}
}])
   
.controller('situationCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#imageS').attr('src',geturl('i.png'));
	$.get(geturl('q.txt'), function(d, s){
		$('#question').html(d);
	});
}])
   
.controller('chooseCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#imageC').attr('src',geturl('i.png'));
	$.get(geturl('1/a.txt'), function(d, s){
		$('#answer1').html(d);
	});
	$.get(geturl('2/a.txt'), function(d, s){
		$('#answer2').html(d);
	});
	$.get(geturl('3/a.txt'), function(d, s){
		$('#answer3').html(d);
	});
	$.get(geturl('4/a.txt'), function(d, s){
		$('#answer4').html(d);
	});
	$.get(geturl('5/a.txt'), function(d, s){
		$('#answer5').html(d);
	});
}])
      
.controller('choice1Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#image1').attr('src',geturl('1/i.png'));
	$.get(geturl('1/e.txt'), function(d, s){
		$('#explanation1').html(d);
	});
}])
   
.controller('choice2Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#image2').attr('src',geturl('2/i.png'));
	$.get(geturl('2/e.txt'), function(d, s){
		$('#explanation2').html(d);
	});
}])
   
.controller('choice3Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#image3').attr('src',geturl('3/i.png'));
	$.get(geturl('3/e.txt'), function(d, s){
		$('#explanation3').html(d);
	});
}])
   
.controller('choice4Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#image4').attr('src',geturl('4/i.png'));
	$.get(geturl('4/e.txt'), function(d, s){
		$('#explanation4').html(d);
	});
}])
   
.controller('choice5Ctrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$('#image5').attr('src',geturl('5/i.png'));
	$.get(geturl('5/e.txt'), function(d, s){
		$('#explanation5').html(d);
	});
}])
   
.controller('historyCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
	var ind = [];
	for (i=getdate()-1; i>0; i--) {
		ind.push(i);
		console.log(ind);
		$.get('https://liadevs.github.io/content/'+i+'/t.txt', function(d, s) {
			i = ind.shift();
			console.log(ind);
			var inner = '<a class="list card" style="display:block;text-decoration:none;" ui-sref="situation()" onclick="clickbutton();setdate('+
				i+')" href="#/situation"><ion-item id="item'+i+'"ui-sref="situation()" class="item item-complex" href="#/situation"></ion-item></a>';
    		$("#card-container").append(inner);
    		$('#item'+i).append('<a class="item-content">'+d+'</a>');
		});
	}
}])
 