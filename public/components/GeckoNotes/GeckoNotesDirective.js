angular.module('geckoTracker')
.directive('geckoNotes', function () {
	return {
		restrict: 'E',
		templateUrl: "components/GeckoNotes/GeckoNotesTemplate.htm",
		scope: true,
		controller: function ($scope, $log, geckoService) {
			geckoService.getGecko($scope.geckoId, function(gecko) {
				$scope.gecko = gecko;
				$scope.notes = gecko.notes;
			});
			
			$scope.save = function() {
				geckoService.updateGecko({
					_id: $scope.geckoId,
					notes: $scope.notes
				}).then(function(gecko) {
					$scope.notes = gecko.notes;
					$scope.$apply();
				});
			}
			
			$scope.revert = function() {
				$scope.notes = $scope.gecko.notes;
			}
		}
	};
})
