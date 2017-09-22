webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = " <!-- <section class=\"section  is-fullheight is-fullhd\">  -->\n  <nav class=\"navbar \">\n  <div class=\"navbar-brand\">\n    <a class=\"navbar-item\" href=\"http://bulma.io\">\n      <img src=\"assets/images/fambox-logo.png\" alt=\"Bulma: a modern CSS framework based on Flexbox\" width=\"112\" height=\"28\">\n    </a>\n\n    <a class=\"navbar-item is-hidden-desktop\" href=\"https://github.com/jgthms/bulma\" target=\"_blank\">\n      <span class=\"icon\" style=\"color: #333;\">\n        <i class=\"fa fa-github\"></i>\n      </span>\n    </a>\n\n    <a class=\"navbar-item is-hidden-desktop\" href=\"https://twitter.com/jgthms\" target=\"_blank\">\n      <span class=\"icon\" style=\"color: #55acee;\">\n        <i class=\"fa fa-twitter\"></i>\n      </span>\n    </a>\n\n    <div class=\"navbar-burger burger\" data-target=\"navMenuExample\">\n      <span></span>\n      <span></span>\n      <span></span>\n    </div>\n  </div>\n\n  <div id=\"navMenuExample\" class=\"navbar-menu\">\n    <div class=\"navbar-start\">\n      <a class=\"navbar-item \" href=\"http://bulma.io/\">\n        RIDE\n      </a>\n      <a class=\"navbar-item \" href=\"http://bulma.io/\">\n        DRIVE\n      </a>\n      <div class=\"navbar-item has-dropdown is-hoverable\">\n        <a class=\"navbar-link  is-active\" href=\"/cities/lincoln\">\n          CITIES\n        </a>\n        <div class=\"navbar-dropdown \">\n          <a class=\"navbar-item \" href=\"/cities/lincoln\">\n            Lincoln\n          </a>\n          <a class=\"navbar-item \" href=\"/cities/\">\n            Nottingham\n          </a>\n          <a class=\"navbar-item \" href=\"/cities/\">\n            Manchester\n          </a>\n          <a class=\"navbar-item \" href=\"/cities/\">\n            Liverpool\n          </a>\n          <a class=\"navbar-item \" href=\"/cities/\">\n            Hull\n          </a>\n        </div>\n      </div>\n    </div>\n\n    <!-- right nav items -->\n    <div class=\"navbar-end\">\n      <a class=\"navbar-item\">\n        SIGN UP\n      </a>\n      <a class=\"navbar-item\">\n        SIGNIN\n      </a>\n      <div class=\"navbar-item\">\n        <p class=\"control\">\n          <button class=\"button is-primary\">\n            <span class=\"icon\">\n              <i class=\"fa fa-taxi\"></i>\n            </span>\n            <span>BECOME A DRIVER</span>\n          </button>\n        </p>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<div class=\"container is-fullhd \">\n  <app-spacha-map></app-spacha-map>\n</div>\n\n<footer class=\"footer\">\n  <div class=\"container\">\n      <div class=\"content has-text-centered\">\n          <p>\n              <strong>FAMBOX</strong> by <a href=\"https://github.io/thecrab\">The Crab</a>. Made with lots of love\n              <a href=\"http://opensource.org/licenses/mit-license.php\">MIT</a>. The website content\n              is copyright <a href=\"http://creativecommons.org/licenses/by-nc-sa/4.0/\">CC ANS 4.0</a>.\n          </p>\n          <p>\n              <a class=\"icon\" href=\"https://github.com/thecrab/fambox\">\n                  <i class=\"fa fa-github\"></i>\n              </a>\n          </p>\n      </div>\n  </div>\n</footer>\n<!-- </section>  -->"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__spacha_map_spacha_map_component__ = __webpack_require__("../../../../../src/app/spacha-map/spacha-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__spacha_map_spacha_map_service__ = __webpack_require__("../../../../../src/app/spacha-map/spacha-map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_estimate_service__ = __webpack_require__("../../../../../src/app/services/estimate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Firebase



// App ENV

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__spacha_map_spacha_map_component__["a" /* SpachaMapComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__spacha_map_spacha_map_service__["a" /* SpachaMapService */], __WEBPACK_IMPORTED_MODULE_7__services_estimate_service__["a" /* EstimateService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/map.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return GeoJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FeatureCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Address; });
var GeoJson = (function () {
    function GeoJson(coordinates, properties) {
        this.properties = properties;
        this.type = 'Feature';
        this.geometry = {
            type: 'Point',
            coordinates: coordinates
        };
    }
    return GeoJson;
}());

var FeatureCollection = (function () {
    function FeatureCollection(features) {
        this.features = features;
        this.type = 'FeatureCollection';
    }
    return FeatureCollection;
}());

var Address = (function () {
    function Address() {
    }
    return Address;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ "../../../../../src/app/services/estimate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstimateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EstimateService = (function () {
    function EstimateService(http) {
        this.http = http;
        this.url = 'http://localhost:4000/api/estimate?';
    }
    EstimateService.prototype.estimate = function (coordinates) {
        var params = "start_latitude=" + coordinates.start_latitude + "&start_longitude=" + coordinates.start_longitude + "&end_latitude=" + coordinates.end_latitude + "&end_longitude=" + coordinates.end_longitude;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]({ headers: this.headers });
        return this.http.get(this.url + params)
            .map(function (res) { return res.json().prices; });
    };
    EstimateService.prototype.handleError = function (error) {
        console.error('An error occured: ', error);
        // Promise.reject(error.message || error)
    };
    return EstimateService;
}());
EstimateService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], EstimateService);

var _a;
//# sourceMappingURL=estimate.service.js.map

/***/ }),

/***/ "../../../../../src/app/spacha-map/spacha-map.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/spacha-map/spacha-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns is-gapless is-600px-height\">\n    <div class=\"column is-one-quarter\">\n        <nav class=\"panel\">\n            <p class=\"panel-heading\">\n                estimate fare\n            </p>\n            <div class=\"panel-block\">\n                <div class=\"form\">\n                    <div class=\"field has-addons\">\n                        <div class=\"control has-icons-left\">\n                            <input type=\"text\" \n                                class=\"input\"\n                                #pickupBox \n                                [value]=\"pickupLocation\"\n                                (keyup)=\"search(pickupBox.value)\" \n                                placeholder=\"PICKUP LOCATION\">\n\n                            <span class=\"icon is-left\">\n                                <i class=\"fa fa-map-pin\"></i>\n                            </span>\n                        </div>\n                        <div class=\"control\">\n                            <span class=\"button\" (click)=\"resetFields()\" >\n                                X\n                            </span>\n                        </div>\n                    </div>\n\n                    <div class=\"control has-icons-left\" *ngIf=\"pickupAddress\">\n                        <input type=\"text\"\n                            #destinationBox \n                            class=\"input\" \n                            [value]=\"destinationLocation\" \n                            (keyup)=\"search(destinationBox.value)\" \n                            placeholder=\"DESTINATION\"\n                        >\n                        <span class=\"icon is-left\">\n                            <i class=\"fa fa-flag-checkered\"></i>\n                        </span>\n                    </div>\n\n                    <div class=\"panel-block is-active\" *ngFor=\"let address of searchResults | async\" (click)=\"setAddress(address)\">\n                        <span class=\"panel-icon\">\n                            <i class=\"fa fa-map-marker\"></i>\n                        </span>\n                        {{ address.formattedAddress }}\n                    </div>\n                    \n                    <hr>\n                    <table class=\"table is-fullwidth\" *ngIf=\"pickupAddress && destinationAddress\">\n                        <tr class=\"\" *ngFor=\" let price of prices | async\">\n                            <td>{{price.localized_display_name}}</td>\n                            <td>{{ price.estimate }} </td>\n                        </tr>\n                    </table>\n                </div>\n            </div>\n\n            <div class=\"panel-block\" *ngIf=\"pickupAddress && destinationAddress\">\n                <button class=\"button is-primary is-large  is-fullwidth \" \n                    (click)=\"showModal()\" >\n                    <span>REQUEST RIDE</span>\n                    <span class=\"icon\">\n                        <i class=\"fa fa-chevron-right\"></i>\n                    </span>\n                </button>\n            </div>\n        </nav>\n    </div>\n\n    <!-- Spacha-Map -->\n    <div class=\"map column\" id=\"spacha-map\"></div>  \n\n    <div class=\"modal\" id=\"appStoreModal\" >\n        <div class=\"modal-background\"></div>\n        <div class=\"modal-card\">\n            <header class=\"modal-card-head\">\n                <p class=\"modal-card-title\">Download Spøta to book a ride</p>\n                <button class=\"delete\" aria-label=\"close\" (click)=\"showModal()\"></button>\n            </header>\n            <section class=\"modal-card-body\">\n                <!-- Modal Content ... -->\n                <table class=\"table is-fullwidth\">\n                    <tbody>\n                        <tr>\n                            <td><a href='#'><img alt='Get it on Google Play' src='/assets/images/en_badge_web_generic.png'/></a></td>\n                            <td><a href='#'><img alt='Get it on the AppStore' src='/assets/images/apple-appstore-badge.png'/></a></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </section>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/spacha-map/spacha-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spacha_map_service__ = __webpack_require__("../../../../../src/app/spacha-map/spacha-map.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__("../../../../../src/app/map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_estimate_service__ = __webpack_require__("../../../../../src/app/services/estimate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_rxjs_add_operator_distinctUntilChanged__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpachaMapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { ReplaySubject } from "rxjs/ReplaySubject";

// Observable class extension

// Observable operators




var SpachaMapComponent = (function () {
    function SpachaMapComponent(mapService, estimateService, http) {
        this.mapService = mapService;
        this.estimateService = estimateService;
        this.http = http;
        this.lat = 0.0;
        this.lng = 0.0;
        this.message = "Hello msg";
        this.estimateParams = null;
        // Search
        this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.pickupLocation = '';
        this.destinationLocation = '';
        this.pickupAddress = null;
        this.destinationAddress = null;
    }
    SpachaMapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.markers = this.mapService.getMarkers();
        this.initializeMap();
        this.searchResults = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(function (term) { return term
            ? _this.mapService.search(term)
            : __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of([]);
        });
    };
    SpachaMapComponent.prototype.initializeMap = function () {
        var _this = this;
        // locate the visitor
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                _this.map.flyTo({
                    center: [_this.lng, _this.lat]
                });
            });
        }
        this.map = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__["Map"]({
            container: 'spacha-map',
            zoom: 13,
            center: [this.lng, this.lat],
            style: 'mapbox://styles/mapbox/dark-v9'
            // style: 'mapbox://styles/mapbox/navigation-preview-night-v2'
        });
        this.buildMap();
    };
    SpachaMapComponent.prototype.buildMap = function () {
        var _this = this;
        // Add map controls
        // this.map.addControl(new mapboxgl.control())
        var geolocateControl = new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__["GeolocateControl"]({
            positionOptions: { enableHighAccuracy: true },
            watchPosition: false
        });
        // Add Marker on Click
        this.map.on('click', function (event) {
            var coordinates = [event.lngLat.lng, event.lngLat.lat];
            var newMarker = new __WEBPACK_IMPORTED_MODULE_4__map__["b" /* GeoJson */](coordinates, { message: _this.message });
            _this.mapService.createMarkers(newMarker);
        });
        // Add realtime vehicles from firebase data on map load
        this.map.on('load', function (e) {
            _this.map.addControl(geolocateControl);
            // register the source
            _this.map.addSource('vehicles', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            });
            _this.map.addSource('directions', {
                type: 'geojson',
                data: {
                    type: 'FeatureCollection',
                    features: []
                }
            });
            // create map layers with realtime data
            _this.map.addLayer({
                id: 'vehicles',
                source: 'vehicles',
                type: 'symbol',
                layout: {
                    // 'text-field': '{message}',
                    // 'text-size': 12,
                    // 'text-transform': 'uppercase',
                    'icon-image': 'car-15'
                    // 'icon-image': '{icon}-15'
                    // 'text-offset': [0, 1.5]
                },
                paint: {
                    'text-color': '#f404b8',
                    // 'text-halo-color': '#fff',
                    // 'icon-halo-color': '#f404b8',
                    'text-halo-width': 2
                }
            });
            // get source
            _this.vehiclesLocations = _this.map.getSource('vehicles');
            // subscribe to realtime database set and source
            _this.markers.subscribe(function (markers) {
                var data = new __WEBPACK_IMPORTED_MODULE_4__map__["c" /* FeatureCollection */](markers);
                _this.vehiclesLocations.setData(data);
            });
            _this.map.addLayer({
                id: 'directions',
                source: 'directions',
                type: 'line',
                layout: {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                paint: {
                    'line-color': '#f404b8',
                    'line-width': 4
                }
            });
            // get source
            _this.directions = _this.map.getSource('directions');
            geolocateControl.on('geolocate', function (event) {
                _this.flyTo(new __WEBPACK_IMPORTED_MODULE_4__map__["b" /* GeoJson */]([event.coords.longitude, event.coords.latitude], { message: 'You' }));
                _this.populatePickupLocation([event.coords.longitude, event.coords.latitude]);
            });
        }); // END Map.on('load', ...)
    };
    // Helpers
    SpachaMapComponent.prototype.removeMarker = function (marker) {
        this.mapService.removeMarker(marker.$key);
    };
    SpachaMapComponent.prototype.flyTo = function (data) {
        this.map.flyTo({
            center: data.geometry.coordinates,
            zoom: 13
        });
    };
    // Search implementation
    SpachaMapComponent.prototype.search = function (term) {
        if (term.length >= 3)
            this.searchTerms.next(term);
    };
    SpachaMapComponent.prototype.setAddress = function (address) {
        if (this.pickupAddress) {
            this.destinationAddress = address;
            this.destinationLocation = address.formattedAddress;
        }
        else {
            this.pickupAddress = address;
            this.pickupLocation = address.formattedAddress;
        }
        this.searchTerms.next();
        if (this.pickupAddress && this.destinationAddress) {
            this.getPrices();
            this.getDirections();
        }
        // const coordinates = [address.geocodes.longitude, address.geocodes.latitude]
        // const newMarker = new GeoJson(coordinates, { message: address.formattedAddress })
        // let data = new FeatureCollection(newMarker)
        // this.vehiclesLocations.setData(data)
    };
    SpachaMapComponent.prototype.resetFields = function () {
        this.pickupAddress = this.destinationAddress = null;
        this.pickupLocation = this.destinationLocation = '';
        this.prices = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].of([]);
        this.searchTerms.next();
    };
    SpachaMapComponent.prototype.showModal = function () {
        document.getElementById('appStoreModal').classList.toggle('is-active');
    };
    SpachaMapComponent.prototype.populatePickupLocation = function (coordinates) {
        var _this = this;
        var coords = { longitude: coordinates[0], latitude: coordinates[1] };
        this.mapService.reverse([coords.longitude, coords.latitude])
            .subscribe(function (a) {
            _this.pickupAddress = a;
            _this.pickupLocation = a.formattedAddress;
        });
    };
    SpachaMapComponent.prototype.getPrices = function () {
        this.estimateParams = {
            start_latitude: this.pickupAddress.geocodes.latitude,
            start_longitude: this.pickupAddress.geocodes.longitude,
            end_latitude: this.destinationAddress.geocodes.latitude,
            end_longitude: this.destinationAddress.geocodes.longitude
        };
        this.prices = this.estimateService.estimate(this.estimateParams);
    };
    SpachaMapComponent.prototype.getDirections = function () {
        var _this = this;
        var coordinates = this.estimateParams.start_longitude + "," + this.estimateParams.start_latitude + ";" + this.estimateParams.end_longitude + "," + this.estimateParams.end_latitude;
        this.mapService.getDirections(coordinates).subscribe(function (directions) {
            _this.showRoute(directions);
        });
    };
    SpachaMapComponent.prototype.showRoute = function (directions) {
        var data = new __WEBPACK_IMPORTED_MODULE_4__map__["c" /* FeatureCollection */](directions);
        this.directions.setData(data);
        var coordinates = directions[0].geometry.coordinates;
        var bounds = coordinates.reduce(function (bound, coord) {
            return bound.extend(coord);
        }, new __WEBPACK_IMPORTED_MODULE_2_mapbox_gl__["LngLatBounds"](coordinates[0], coordinates[1]));
        this.map.fitBounds(bounds, { padding: 60 });
    };
    return SpachaMapComponent;
}());
SpachaMapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-spacha-map',
        template: __webpack_require__("../../../../../src/app/spacha-map/spacha-map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/spacha-map/spacha-map.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__spacha_map_service__["a" /* SpachaMapService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__spacha_map_service__["a" /* SpachaMapService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__services_estimate_service__["a" /* EstimateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_estimate_service__["a" /* EstimateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _c || Object])
], SpachaMapComponent);

var _a, _b, _c;
// interface IRide {
//   pickupAddress: IAddress
//   destinationAddress: IAddress
//   price: IPrice
// }
// interface IPrice {
//   name: string
//   amount: string
//   eta: string
// }
// interface IAddress {
//   formattedName: string
//   latitude: number
//   longitude: number
// }
// class Ride implements IRide {
//   pickupAddress:IAddress
//   destinationAddress:IAddress
//   price:IPrice
// }
// let ride:Ride           = new Ride()
// ride.pickupAddress      = { formattedName: 'iewugefdsvsd', latitude: 12345, longitude: -0.1234565778 }
// ride.destinationAddress = { formattedName: 'iewugefdsvsd', latitude: 12345, longitude: -0.1234565778 }
// ride.price              = { name: 'iewugefdsvsd', amount: '12345', eta: '1234565778' } 
//# sourceMappingURL=spacha-map.component.js.map

/***/ }),

/***/ "../../../../../src/app/spacha-map/spacha-map.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map__ = __webpack_require__("../../../../../src/app/map.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mapbox_gl__ = __webpack_require__("../../../../mapbox-gl/dist/mapbox-gl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpachaMapService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SpachaMapService = (function () {
    // directions:MapboxDirections
    function SpachaMapService(db, http) {
        this.db = db;
        this.http = http;
        __WEBPACK_IMPORTED_MODULE_5_mapbox_gl__["accessToken"] = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].mapbox.accessToken;
        // this.directions = new mapboxgl.Directions({
        //     // accessToken: mapboxgl.accessToken,
        //     unit: 'metric',
        //     profile: 'mapbox/driving-traffic'
        //     // , proximity: [lng, lat]
        // })
    }
    SpachaMapService.prototype.getMarkers = function () {
        return this.db.list('/markers');
    };
    SpachaMapService.prototype.createMarkers = function (data) {
        return this.db.list('/markers')
            .push(data);
    };
    SpachaMapService.prototype.removeMarker = function ($key) {
        return this.db.object('/markers/' + $key).remove();
    };
    SpachaMapService.prototype.getDirections = function (geocodes) {
        // Semicolon-separated list of {longitude},{latitude};{longitude},{latitude} coordinate pairs
        var directionsUrl = "https://api.mapbox.com/directions/v5/mapbox/driving-traffic/";
        var options = "geometries=geojson&overview=full&access_token=" + __WEBPACK_IMPORTED_MODULE_5_mapbox_gl__["accessToken"];
        return this.http.get("" + directionsUrl + geocodes + "?" + options)
            .map(function (directions) { return directions.json().routes; });
    };
    SpachaMapService.prototype.search = function (address) {
        // return this.http.get('api/addresses/search')
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&components=country:GB")
            .map(function (res) { return res.json().results; })
            .map(function (results) {
            var addresses = [];
            for (var i = 0; i < results.length; i++) {
                var address_1 = new __WEBPACK_IMPORTED_MODULE_4__map__["a" /* Address */]();
                var found = results[i];
                address_1.formattedAddress = found.formatted_address,
                    address_1.geocodes = {
                        latitude: found.geometry.location.lat,
                        longitude: found.geometry.location.lng
                    }; // location: {lat: 42.5641201, lng: -71.0239323}
                // address.geocodes.longitude = found.geometry.location.lng // location: {lat: 42.5641201, lng: -71.0239323}
                addresses.push(address_1);
            }
            return addresses;
        });
    };
    SpachaMapService.prototype.reverse = function (address) {
        // address:LngLat ====> address.toArray()
        // return this.http.get('api/addresses/reverse')
        return this.http
            .get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + address[1] + "," + address[0])
            .map(function (res) { return res.json().results; })
            .map(function (results) {
            var address = new __WEBPACK_IMPORTED_MODULE_4__map__["a" /* Address */]();
            var found = results[0];
            address.formattedAddress = found.formatted_address,
                address.geocodes = {
                    latitude: found.geometry.location.lat,
                    longitude: found.geometry.location.lng
                };
            return address;
        });
    };
    return SpachaMapService;
}());
SpachaMapService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabase */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _b || Object])
], SpachaMapService);

var _a, _b;
//# sourceMappingURL=spacha-map.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBYLKl0XVX8i9iF5T8PmdEPXXupGIylvqo",
        authDomain: "lioncabs-fc588.firebaseapp.com",
        databaseURL: "https://lioncabs-fc588.firebaseio.com",
        projectId: "lioncabs-fc588",
        storageBucket: "lioncabs-fc588.appspot.com",
        messagingSenderId: "768358335569"
    },
    mapbox: {
        accessToken: 'pk.eyJ1IjoidGhlY3JhYiIsImEiOiJWbFpnaDBzIn0.ucrweW4ZDtEFHZlxRYpUug'
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map