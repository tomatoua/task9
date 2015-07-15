(function() {
    'use strict';
	angular
    	.module('app')
    	.service('getDataResourceService', getDataResourceService);

	function getDataResourceService($resource) { 
		const galleryCount = 30;
		const galleryApiHost =  'http://jsonplaceholder.typicode.com/photos/';
		var imagesRecources = [];
		for (var count = 1; count <= galleryCount; count++) {
			var ResPhoto = $resource(galleryApiHost +':id', {id:'@id'});
			var resPhoto = ResPhoto.get({id:count}, function(response) {
  				imagesRecources.push(response)
			});
		}
		return imagesRecources;
	}

})();
