def(function() {
    config({
        "libs": {
            "css$bootstrap": {
                // Fallback JS will check to see if this style currently exists on the
                // page. If it does exist, the library will not attempt to load the file
                // as it will assume it's already been loaded on the page.
                "exports": ".col-xs-12",

                // The URLs to load `Twitter Bootstrap`.
                "urls": [
                    "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css",
                    "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/css/bootstrap.min.css",
                    "/css/bootstrap.min.css"
                ]
            },

            "bootstrap": {
                "urls": [
                    "//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js",
                    "//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.5/js/bootstrap.min.js",
                    "/js/bootstrap.min.js"
                ]
            },

            // Include `jQuery`.
            "jQuery": {
                // The URLs to load `jQuery`.
                "urls": [
                    "//ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js",
                    "//code.jquery.com/jquery-1.11.3.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.3/jquery.min.js",
                    "/js/jquery-1.11.3.min.js"
                ]
            },

            "angular": {
                "urls": [
                    "//ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular.min.js",
                    "https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.16/angular.min.js",
                    "/js/angular.min.js"
                ]
            },

            "angular-route": {
                "urls": [
                    "//ajax.googleapis.com/ajax/libs/angularjs/1.3.16/angular-route.min.js",
                    "//cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.16/angular-route.min.js",
                    "/js/angular-route.min.js"
                ]
            }
        }
    });
    
    req(function(jQuery) {
		jQuery('body').append('<h3 class="alert-success">Loaded jQuery!</h3>');
	});
});