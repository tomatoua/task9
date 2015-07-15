angular
	.module('app')
	.directive('imageView', imageView);

function imageView() {
	return {
		scope: {
        	imgres: '@'
        },
        link: function ($scope, element) {
        	
            element.bind('click', function (event) {
        		if (destroyFullViewImage())
        			return;
            	var imageFullView = document.createElement('img');
            	imageFullView.className = 'fullViewImage';
            	imageFullView.setAttribute('src',$scope.imgres);
				element.append(imageFullView);
				element.parent().bind('click', function (event) {
					destroyFullViewImage();
					event.stopImmediatePropagation();
					event.preventDefault();
				});
				event.stopImmediatePropagation();
				event.preventDefault();
            });
        }
	};
	function destroyFullViewImage() {
       	var elToDestroy = document.getElementsByClassName('fullViewImage');
		if (elToDestroy.length) {
			elToDestroy[0].remove();
			return true;
		}
    };
}
