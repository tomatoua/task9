(function() {
    'use strict';
	angular
    	.module('app')
    	.service('getDataHttpService', getDataHttpService);

	function getDataHttpService($http) { 
		const galleryCount = 30;
		const galleryApiHost =  'http://jsonplaceholder.typicode.com/photos/';
		var imagesRecources = [];
		for (var count = 1; count <= galleryCount; count++) {
			$http.get(galleryApiHost+count).success(function(response) {
			console.log(response);
			imagesRecources.push(response);})
		}; 
		return imagesRecources;
	}

})();
