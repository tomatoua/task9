(function() {
	'use strict';

	angular
		.module('app')
    	.controller('galleryController', ['getDataHttpService','getDataResourceService',galleryController]);
    	
    function galleryController(getDataHttpService,getDataResourceService){
		var vm = this;
		//vm.imagesRecources = getDataHttpService;
		vm.imagesRecources = getDataResourceService;
	}

})();
