webpackJsonp([0],{

/***/ 123:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmblemaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_models_emblema__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmblemaService = /** @class */ (function () {
    function EmblemaService() {
        this.emblemas = [
            new __WEBPACK_IMPORTED_MODULE_0__app_models_emblema__["a" /* Emblema */](1, 'EmblemasMuda', 1, 0, 'Água'),
            new __WEBPACK_IMPORTED_MODULE_0__app_models_emblema__["a" /* Emblema */](2, 'EmblemasMuda', 1, 0, 'Energia'),
            new __WEBPACK_IMPORTED_MODULE_0__app_models_emblema__["a" /* Emblema */](3, 'EmblemasMuda', 1, 0, 'Residuos'),
            new __WEBPACK_IMPORTED_MODULE_0__app_models_emblema__["a" /* Emblema */](4, 'EmblemasMuda', 1, 0, 'Ar')
        ];
    }
    EmblemaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmblemaService);
    return EmblemaService;
}());

//# sourceMappingURL=emblema.service.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Emblema; });
var Emblema = /** @class */ (function () {
    function Emblema(id, arquivo, nivel, potuacao, categoria) {
        this.id = id;
        this.arquivo = arquivo;
        this.nivel = nivel;
        this.potuacao = potuacao;
        this.categoria = categoria;
    }
    return Emblema;
}());

//# sourceMappingURL=emblema.js.map

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/almanaque/almanaque.module": [
		167
	],
	"../pages/cadastra-muda/cadastra-muda.module": [
		174
	],
	"../pages/cadastro/cadastro.module": [
		177
	],
	"../pages/desafio-modal/desafio-modal.module": [
		178
	],
	"../pages/desafios/desafios.module": [
		180
	],
	"../pages/login/login.module": [
		182
	],
	"../pages/muda/muda.module": [
		183
	],
	"../pages/mundo/mundo.module": [
		184
	],
	"../pages/registro-habitos/registro-habitos.module": [
		186
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 166;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlmanaquePageModule", function() { return AlmanaquePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__almanaque__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlmanaquePageModule = /** @class */ (function () {
    function AlmanaquePageModule() {
    }
    AlmanaquePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__almanaque__["a" /* AlmanaquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__almanaque__["a" /* AlmanaquePage */]),
            ],
        })
    ], AlmanaquePageModule);
    return AlmanaquePageModule;
}());

//# sourceMappingURL=almanaque.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlmanaquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__desafios_desafios_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AlmanaquePage = /** @class */ (function () {
    function AlmanaquePage(navCtrl, navParams, desafioService, socialSharing, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desafioService = desafioService;
        this.socialSharing = socialSharing;
        this.auth = auth;
        this.desafios = this.desafioService.desafios;
        this.desafiosConcluidos = [];
    }
    AlmanaquePage.prototype.share = function (message, subject, file, url) {
        this.socialSharing
            .share('Body', 'Subject', ['recipient@example.org'])
            .then(function () {
            // Success!
        })
            .catch(function () {
            // Error!
        });
    };
    AlmanaquePage.prototype.ionViewDidLoad = function () {
        // if (this.auth.currentUser.email) {
        //   if (this.auth.currentUser.desafios.length > 0) {
        //     for (let i = 0; i < this.desafios.length; i++) {
        //       for (let e = 0; e < this.auth.currentUser.desafios.length; e++) {
        //         if (
        //           this.auth.currentUser.desafios[e].desafioId ==
        //             this.desafios[i].id &&
        //           this.auth.currentUser.desafios[e].status == 'done'
        //         ) {
        //           this.desafiosConcluidos.push(this.desafios[i]);
        //         }
        //       }
        //     }
        //   }
        // }
    };
    AlmanaquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-almanaque',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/almanaque/almanaque.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Almanaque</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngIf="this.desafiosConcluidos.length==0">\n    <ion-card-header>\n      Nada ainda\n    </ion-card-header>\n    <ion-card-content>\n      Você tem que concluir pelo menos um desafio\n    </ion-card-content>\n  </ion-card>\n  <div  *ngIf="this.desafiosConcluidos.length>0">\n    <ion-card *ngFor="let desafio of desafiosConcluidos">\n      <ion-card-content>\n        <img src={{desafio.arquivoB}} />\n        <div padding>\n          <p class="titulo" text-center text-uppercase >{{desafio.titulo}}</p>\n          <div padding>\n            <p class="descricao" >{{desafio.descricao}}</p>\n          </div>\n          <ion-icon name="md-share" (click)="share(desafio.descricao,desafio.titulo,desafio.arquivoB,\'www.google.com\')"></ion-icon>       \n        </div>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/almanaque/almanaque.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__desafios_desafios_service__["a" /* DesafioService */],
            __WEBPACK_IMPORTED_MODULE_1__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], AlmanaquePage);
    return AlmanaquePage;
}());

//# sourceMappingURL=almanaque.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastraMudaPageModule", function() { return CadastraMudaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastra_muda__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastraMudaPageModule = /** @class */ (function () {
    function CadastraMudaPageModule() {
    }
    CadastraMudaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastra_muda__["a" /* CadastraMudaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastra_muda__["a" /* CadastraMudaPage */]),
            ],
        })
    ], CadastraMudaPageModule);
    return CadastraMudaPageModule;
}());

//# sourceMappingURL=cadastra-muda.module.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Muda; });
var Muda = /** @class */ (function () {
    function Muda(nomemuda, indiceGeral, // vai de 0 a 5
        pontos, usuarioid, mudaid) {
        this.nomemuda = nomemuda;
        this.indiceGeral = indiceGeral;
        this.pontos = pontos;
        this.usuarioid = usuarioid;
        this.mudaid = mudaid;
    }
    return Muda;
}());

//# sourceMappingURL=muda.model.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export FooModule */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FooModule = /** @class */ (function () {
    function FooModule() {
    }
    FooModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({ providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return AppService; })] })
    ], FooModule);
    return FooModule;
}());

var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());

//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CadastroPageModule", function() { return CadastroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cadastro__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CadastroPageModule = /** @class */ (function () {
    function CadastroPageModule() {
    }
    CadastroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cadastro__["a" /* CadastroPage */]),
            ],
        })
    ], CadastroPageModule);
    return CadastroPageModule;
}());

//# sourceMappingURL=cadastro.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesafioModalPageModule", function() { return DesafioModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desafio_modal__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DesafioModalPageModule = /** @class */ (function () {
    function DesafioModalPageModule() {
    }
    DesafioModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__desafio_modal__["a" /* DesafioModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desafio_modal__["a" /* DesafioModalPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__desafio_modal__["a" /* DesafioModalPage */]
            ]
        })
    ], DesafioModalPageModule);
    return DesafioModalPageModule;
}());

//# sourceMappingURL=desafio-modal.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesafioModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desafios_desafios_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DesafioModalPage = /** @class */ (function () {
    function DesafioModalPage(http, navCtrl, navParams, viewCtrl, desafioService, authService, geolocation) {
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.desafioService = desafioService;
        this.authService = authService;
        this.geolocation = geolocation;
        this.desafioid = this.navParams.get('id');
        this.titulo = this.navParams.get('titulo');
        this.descricao = this.navParams.get('descricao');
        this.categoria = this.navParams.get('categoria');
        this.pontuacao = this.navParams.get('pontuacao');
        this.duracao = this.navParams.get('duracao');
        this.status = this.navParams.get('status');
        this.arquivoA = this.navParams.get('arquivoA');
        this.arquivoB = this.navParams.get('arquivoB');
        this.longitude = this.navParams.get('longitude');
        this.latitude = this.navParams.get('latitude');
        this.directionsService = new google.maps.DirectionsService;
        this.directionsDisplay = new google.maps.DirectionsRenderer;
        this.location = false;
        this.tempoDesafio = 0;
        this.desafioStatus = '';
    }
    DesafioModalPage.prototype.ionViewDidLoad = function () {
        if (this.latitude) {
            this.location = true;
            this.getLocation();
        }
        if (this.status == 'notyet') {
            this.desafioStatus = 'Disponível';
        }
        else {
            if (this.status == 'pending') {
                this.desafioStatus = 'Pendente';
            }
            else {
                this.desafioStatus = 'Concluído';
            }
        }
    };
    DesafioModalPage.prototype.getLocation = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            var lat = resp.coords.latitude;
            var lon = resp.coords.longitude;
            _this.initMap(lat, lon);
        }).catch(function (error) {
            console.log('Erro ao tentar encontrar a localização', error);
        });
    };
    DesafioModalPage.prototype.initMap = function (a, b) {
        var myLatLng = { lat: a, lng: b };
        var pontoColeta1 = new google.maps.LatLng(-4.979256, -39.056513);
        var pontoSaida = new google.maps.LatLng(a, b);
        this.map = new google.maps.Map(this.mapElement.nativeElement, {
            zoom: 18,
            center: myLatLng
        });
        this.directionsDisplay.setMap(this.map);
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: this.map,
            title: "Aqui está você!"
        });
        this.calculateAndDisplayRoute(myLatLng, pontoColeta1);
    };
    DesafioModalPage.prototype.calculateAndDisplayRoute = function (a, b) {
        var _this = this;
        this.directionsService.route({
            origin: a,
            destination: b,
            travelMode: 'WALKING'
        }, function (response, status) {
            if (status === 'OK') {
                _this.directionsDisplay.setDirections(response);
            }
            else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    };
    DesafioModalPage.prototype.concluirDesafio = function () {
        var _this = this;
        var desafioid = this.desafioid;
        var desafio = this.desafioService.desafios.find(function (obj) { return obj.desafioid === desafioid; });
        desafio.status = 'done';
        var user = this.authService.currentUser;
        for (var i = 0; i < user.desafios.length; i++) {
            if (user.desafios[i].desafioId == desafioid) {
                user.desafios[i].status = 'done';
            }
        }
        this.authService.updateDesafio(user).subscribe(function (response) {
            _this.closeModal();
        }, function (error) {
            console.log(error);
        });
    };
    DesafioModalPage.prototype.cancelaDesafio = function () {
        var _this = this;
        var id = this.desafioid;
        var desafio = this.desafioService.desafios.find(function (obj) { return obj.desafioid === id; });
        desafio.status = 'notyet';
        var user = this.authService.currentUser;
        for (var i = 0; i < user.desafios.length; i++) {
            if (user.desafios[i].desafioId == id) {
                user.desafios.splice(i, 1);
            }
        }
        this.authService.updateDesafio(user).subscribe(function (response) {
            _this.closeModal();
        }, function (error) {
            console.log(error);
        });
    };
    DesafioModalPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    DesafioModalPage.prototype.aceitarDesafio = function () {
        var _this = this;
        var desafioid = this.desafioid;
        var desafio = this.desafioService.desafios.find(function (desafio) { return desafio.desafioid === desafioid; });
        desafio.status = "pending";
        var user = this.authService.currentUser;
        if (user.desafios) {
            user.desafios.push({ desafioId: desafio.desafioid, status: desafio.status });
        }
        else {
            user["desafiosId"] = [{ desafioId: desafio.desafioid, status: desafio.status }];
        }
        ;
        this.authService.updateDesafio(user).subscribe(function (response) {
            // let cancela = this.cancelaDesafio();
            // setTimeout('cancela()',10000);
            _this.closeModal();
        }, function (error) {
            console.log(error);
        });
    };
    ;
    DesafioModalPage.prototype.contagem_tempo = function () {
        var segundos = 0;
        segundos = segundos - 1;
        if (segundos == -1) {
            segundos = 0;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], DesafioModalPage.prototype, "mapElement", void 0);
    DesafioModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-desafio-modal',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/desafio-modal/desafio-modal.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Desafio {{titulo}}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="location" #map id="map"></div>\n  <ion-card>\n    <img *ngIf="!location" src="{{\'./../../../assets/imgs/\' + this.titulo + \'.png\'}}"/>\n    <ion-card-content>\n      <ion-card-title>\n        {{titulo}}\n        </ion-card-title>\n      <p>\n        {{descricao}}\n      </p>\n    </ion-card-content>\n  </ion-card>\n  <div>\n    <div class="duracao" padding text-center>\n      <span *ngIf="status  == \'notyet\'"><ion-icon name="alarm"></ion-icon>Deve ser realizado em {{duracao}} dia(s)</span>\n      <span *ngIf="status == \'pending\'"><ion-icon name="alarm"></ion-icon>Deve ser realizado em {{duracao}} dia(s)</span>\n      <span *ngIf="status == \'done\'"><ion-icon name="alarm"></ion-icon>Deve ser realizado em {{duracao}} dia(s)</span>\n    </div>\n  </div>\n  <div class="button-Row" padding  text-center>\n    <button *ngIf="status  == \'notyet\'" ion-button round align small color="default" (click)="closeModal()">Voltar</button>\n    <button *ngIf="status  == \'notyet\'" ion-button (click)="aceitarDesafio()" round small color="dark">Aceitar Desafio</button>\n    <button *ngIf="status  == \'pending\'" ion-button round align small color="s-light" (click)="closeModal()">Voltar</button>\n    <button *ngIf="status  == \'pending\'" ion-button round small color="danger" (click)="cancelaDesafio()">Cancelar desafio</button>\n  </div>\n  <div class="button-Row" padding  text-center>\n    <button *ngIf="status  == \'pending\'" ion-button full round large align small color="success" (click)="concluirDesafio()">Concluir</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/desafio-modal/desafio-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__desafios_desafios_service__["a" /* DesafioService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_geolocation__["a" /* Geolocation */]])
    ], DesafioModalPage);
    return DesafioModalPage;
}());

//# sourceMappingURL=desafio-modal.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesafiosPageModule", function() { return DesafiosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desafios__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DesafiosPageModule = /** @class */ (function () {
    function DesafiosPageModule() {
    }
    DesafiosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__desafios__["a" /* DesafiosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__desafios__["a" /* DesafiosPage */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]
            ],
        })
    ], DesafiosPageModule);
    return DesafiosPageModule;
}());

//# sourceMappingURL=desafios.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesafiosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__desafios_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__desafio_modal_desafio_modal__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DesafiosPage = /** @class */ (function () {
    function DesafiosPage(navCtrl, navParams, desafioService, modalCtrl, authService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.desafioService = desafioService;
        this.modalCtrl = modalCtrl;
        this.authService = authService;
    }
    DesafiosPage.prototype.openModal = function (desafio) {
        var myModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__desafio_modal_desafio_modal__["a" /* DesafioModalPage */], desafio);
        myModal.present();
    };
    DesafiosPage.prototype.carrega = function () {
        var _this = this;
        this.desafioService.getDesafios().subscribe(function (response) {
            _this.desafios = response;
        });
        // if (this.authService.currentUser.desafios) {
        //   if (this.authService.currentUser.desafios.length > 0) {
        //     for (let i = 0; i < this.desafios.length; i++) {
        //       for (
        //         let e = 0;
        //         e < this.authService.currentUser.desafios.length;
        //         e++
        //       ) {
        //         if (
        //           this.authService.currentUser.desafios[e].desafioId ==
        //           this.desafios[i].id
        //         ) {
        //           this.desafios[i].status = this.authService.currentUser.desafios[
        //             e
        //           ].status;
        //         }
        //       }
        //     }
        //   }
        // }
    };
    DesafiosPage.prototype.ionViewDidLoad = function () {
        this.carrega();
    };
    DesafiosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-desafios',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/desafios/desafios.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Desafios</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let desafio of desafios">\n      <ion-thumbnail item-start>\n        <img src={{desafio.arquivoa}}>  \n      </ion-thumbnail>\n      \n      <p class="desafioTitulo">{{desafio.titulo}}</p>\n      \n      <p *ngIf="desafio.status==\'notyet\'" class="status">Desafio Disponível</p>\n      <p *ngIf="desafio.status==\'pending\'" class="status">Desafio Pendente</p>\n      <p *ngIf="desafio.status==\'done\'" class="status">Desafio Concluído</p>\n      \n      <ion-icon  class="categoria" text-center *ngIf="desafio.categoria==\'Água\'" name="water" color="secondary"></ion-icon> <p *ngIf="desafio.categoria==\'Água\'" color="secondary">Água</p>\n\n      <ion-icon class="categoria" text-center *ngIf="desafio.categoria==\'Energia\'" name="flash" color="danger">  </ion-icon> <p color="danger" *ngIf="desafio.categoria==\'Energia\'">Energia</p>\n\n      <ion-icon class="categoria" text-center *ngIf="desafio.categoria==\'Residuos\'" name="nuclear" color="teresa">  </ion-icon> <p color="teresa" *ngIf="desafio.categoria==\'Residuos\'">Resíduos</p>\n      \n      <button (click)="openModal(desafio)" ion-button item-end>Ver Desafio</button>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/desafios/desafios.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__desafios_service__["a" /* DesafioService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], DesafiosPage);
    return DesafiosPage;
}());

//# sourceMappingURL=desafios.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MudaPageModule", function() { return MudaPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__muda__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MudaPageModule = /** @class */ (function () {
    function MudaPageModule() {
    }
    MudaPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__muda__["a" /* MudaPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__muda__["a" /* MudaPage */]),
            ],
        })
    ], MudaPageModule);
    return MudaPageModule;
}());

//# sourceMappingURL=muda.module.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MundoPageModule", function() { return MundoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mundo__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MundoPageModule = /** @class */ (function () {
    function MundoPageModule() {
    }
    MundoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mundo__["a" /* MundoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mundo__["a" /* MundoPage */]),
            ],
        })
    ], MundoPageModule);
    return MundoPageModule;
}());

//# sourceMappingURL=mundo.module.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MundoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the MundoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MundoPage = /** @class */ (function () {
    function MundoPage(navCtrl, navParams, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.pontos = 50;
        this.prox = false;
        this.prox2 = true;
    }
    // none2: boolean
    // none3: boolean 
    MundoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MundoPage');
        this.auth.getMudas()
            .subscribe(function (response) {
            _this.pontos = response.media;
        });
        if (this.pontos <= 30) {
            this.prox = true;
            this.prox2 = false;
            this.none2 = false;
            this.none1 = true;
            this.none3 = true;
        }
        if (this.pontos > 30 && this.pontos <= 70) {
            this.prox = false;
            this.prox2 = false;
            this.none2 = true;
            this.none1 = false;
            this.none3 = true;
        }
        if (this.pontos > 70) {
            this.prox = false;
            this.prox2 = true;
            this.none2 = true;
            this.none1 = true;
            this.none3 = false;
        }
    };
    MundoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-mundo',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/mundo/mundo.html"*/'<!--\n  Generated template for the MundoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>mundo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <h1>Mundo</h1>\n    <div class="container-mundo">     \n        <ion-img class="container-mundo-img" [class.container-mundo-img2] = "prox" [class.container-mundo-img3] = "prox2"></ion-img>\n    </div>\n    <div class="container-mundo-texto">\n        <p [class.container-texto-avi] = "none1">O nosso planeta atual <b>ainda não sofre de graves problemas</b> causados pelos impactos ambientais. \n            Mas, caso todos não contribuam para que tais impactos sejam evitados tudo pode piorar.</p>\n        <p [class.container-texto-avi] = "none2">O nosso planeta está com <b>sérios problemas</b> devido a falta de mudança de hábitos das pessoas.</p>\n        <p [class.container-texto-avi] = "none3">O nosso planeta atual <b>pode ter uma perspectiva de futuro</b> se todos continuarem com o compromisso de mudança em prol de reduzir os impactos no meio ambiente.</p>\n    </div>\n  </ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/mundo/mundo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], MundoPage);
    return MundoPage;
}());

//# sourceMappingURL=mundo.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroHabitosPageModule", function() { return RegistroHabitosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registro_habitos__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegistroHabitosPageModule = /** @class */ (function () {
    function RegistroHabitosPageModule() {
    }
    RegistroHabitosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__registro_habitos__["a" /* RegistroHabitosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__registro_habitos__["a" /* RegistroHabitosPage */]),
            ],
        })
    ], RegistroHabitosPageModule);
    return RegistroHabitosPageModule;
}());

//# sourceMappingURL=registro-habitos.module.js.map

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.token = '';
    }
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        if (credentials.email === null || credentials.password === null) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Nenhum campo pode ficar vazio');
        }
        else {
            var url = '/api/v1/login';
            return this.http
                .post(url, credentials)
                .map(function (response) {
                _this.token = response.json().token;
                _this.currentUser = response.json().data;
                localStorage.setItem('token', _this.token);
                // localStorage.setItem('currentUser', this.currentUser.toString());
                return _this.currentUser;
            })
                .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
        }
    };
    AuthService.prototype.cadastraUsuario = function (usuario) {
        var _this = this;
        var url = 'api/v1/usarios';
        return this.http
            .post(url, usuario)
            .map(function (response) {
            _this.currentUser = response.json();
            console.log(_this.currentUser);
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.registrarHabito = function (habitos) {
        var url = 'api/v1/hashabito';
        return this.http.post(url, habitos).map(function (response) {
            console.log(response);
        }).catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    AuthService.prototype.getHabitos = function () {
        var url = 'api/v1/habitos';
        return this.http.get(url).map(function (response) {
            response.json();
        });
    };
    AuthService.prototype.updateDesafio = function (user) {
        var url = '/api/v1/usuarios/' + this.currentUser.usuarioid;
        return this.http
            .put(url, { user: user, token: this.token })
            .map(function (response) {
            console.log(response);
            return 'deu bom';
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.logout = function () {
        this.currentUser = null;
        this.token = '';
        localStorage.clear();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            observer.next(true);
            observer.complete();
        });
    };
    AuthService.prototype.salvaMuda = function (muda) {
        var url = '/api/v1/muda/';
        return this.http
            .post(url, muda)
            .map(function (response) {
            return response;
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.getMuda = function () {
        var url = '/api/v1/muda/' + this.currentUser.usuarioid;
        return this.http
            .get(url)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.getMudas = function () {
        var url = '/api/v1/muda';
        return this.http
            .get(url)
            .map(function (response) {
            return response.json();
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService.prototype.updateMuda = function (muda, pontos) {
        console.log(muda.mudaid);
        var url = "/api/v1/muda/" + muda.mudaid;
        return this.http
            .put(url, { pontos: pontos })
            .map(function (response) {
            console.log(response);
            return 'deu bom';
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(249);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_muda_emblema_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_desafios_desafios_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_registro_habitos_registro_habitos_module__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_desafio_modal_desafio_modal_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_almanaque_almanaque_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_muda_muda_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cadastra_muda_cadastra_muda_module__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_desafios_desafios_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_mundo_mundo_module__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common_http__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/almanaque/almanaque.module#AlmanaquePageModule', name: 'AlmanaquePage', segment: 'almanaque', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastra-muda/cadastra-muda.module#CadastraMudaPageModule', name: 'CadastraMudaPage', segment: 'cadastra-muda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cadastro/cadastro.module#CadastroPageModule', name: 'CadastroPage', segment: 'cadastro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/desafio-modal/desafio-modal.module#DesafioModalPageModule', name: 'DesafioModalPage', segment: 'desafio-modal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/desafios/desafios.module#DesafiosPageModule', name: 'DesafiosPage', segment: 'desafios', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/muda/muda.module#MudaPageModule', name: 'MudaPage', segment: 'muda', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mundo/mundo.module#MundoPageModule', name: 'MundoPage', segment: 'mundo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/registro-habitos/registro-habitos.module#RegistroHabitosPageModule', name: 'RegistroHabitosPage', segment: 'registro-habitos', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__pages_desafios_desafios_module__["DesafiosPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__pages_desafio_modal_desafio_modal_module__["DesafioModalPageModule"],
                __WEBPACK_IMPORTED_MODULE_7__pages_cadastro_cadastro_module__["CadastroPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login_module__["LoginPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_registro_habitos_registro_habitos_module__["RegistroHabitosPageModule"],
                __WEBPACK_IMPORTED_MODULE_12__pages_almanaque_almanaque_module__["AlmanaquePageModule"],
                __WEBPACK_IMPORTED_MODULE_13__pages_muda_muda_module__["MudaPageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_mundo_mundo_module__["MundoPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_cadastra_muda_cadastra_muda_module__["CadastraMudaPageModule"],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__app_service__["a" /* AppService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__pages_desafios_desafios_service__["a" /* DesafioService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_0__pages_muda_emblema_service__["a" /* EmblemaService */]
                // Geolocation,
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Usuario; });
var Usuario = /** @class */ (function () {
    function Usuario(nome, email, senha, desafios, usuarioid) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.desafios = desafios;
        this.usuarioid = usuarioid;
    }
    return Usuario;
}());

//# sourceMappingURL=usuario.model.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_registro_habitos_registro_habitos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_desafios_desafios__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_almanaque_almanaque__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_muda_muda__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_cadastra_muda_cadastra_muda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mundo_mundo__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Muda', component: __WEBPACK_IMPORTED_MODULE_9__pages_muda_muda__["a" /* MudaPage */] },
            { title: 'Cadastro', component: __WEBPACK_IMPORTED_MODULE_5__pages_cadastro_cadastro__["a" /* CadastroPage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */] },
            { title: 'Registro de hábitos', component: __WEBPACK_IMPORTED_MODULE_6__pages_registro_habitos_registro_habitos__["a" /* RegistroHabitosPage */] },
            { title: 'Desafios', component: __WEBPACK_IMPORTED_MODULE_7__pages_desafios_desafios__["a" /* DesafiosPage */] },
            { title: 'Almanaque', component: __WEBPACK_IMPORTED_MODULE_8__pages_almanaque_almanaque__["a" /* AlmanaquePage */] },
            { title: 'Mundo', component: __WEBPACK_IMPORTED_MODULE_11__pages_mundo_mundo__["a" /* MundoPage */] },
            { title: 'Cadastra muda', component: __WEBPACK_IMPORTED_MODULE_10__pages_cadastra_muda_cadastra_muda__["a" /* CadastraMudaPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DesafioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DesafioService = /** @class */ (function () {
    function DesafioService(http) {
        this.http = http;
    }
    DesafioService.prototype.getDesafios = function () {
        var url = '/api/v1/desafio/';
        return this.http.get(url);
    };
    DesafioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DesafioService);
    return DesafioService;
}());

//# sourceMappingURL=desafios.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emblema_service__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__desafios_desafios_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_models_emblema__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__muda_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MudaPage = /** @class */ (function () {
    function MudaPage(navCtrl, navParams, storage, menu, auth, desafioService, emblemaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.menu = menu;
        this.auth = auth;
        this.desafioService = desafioService;
        this.emblemaService = emblemaService;
        this.muda = new __WEBPACK_IMPORTED_MODULE_6__muda_model__["a" /* Muda */]('', 0, 0, '');
        this.idDesafios = [];
        this.emblemas = [new __WEBPACK_IMPORTED_MODULE_2__app_models_emblema__["a" /* Emblema */](1, '', 1, 0, '')];
        this.contEmblema = 0;
        this.desafiosTempo = [];
        this.emtem = 0;
    }
    MudaPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.menu.swipeEnable(true);
        this.listaDesafios = this.auth.getUserInfo().desafios;
        if (this.listaDesafios) {
            for (var i = 0; i < this.listaDesafios.length; i++) {
                this.idDesafios.push(this.listaDesafios[i].desafioId);
            }
        }
        this.desafios = this.desafioService.desafios;
        this.auth.getMuda().subscribe(function (response) {
            if (response) {
                console.log(response);
                _this.muda.nomemuda = response.nome;
                _this.muda.indiceGeral = response.indiceGeral;
                _this.muda.pontos = response.pontos;
                _this.muda.usuarioid = response.usuarioid;
                _this.muda.mudaid = response.mudaid;
                if (_this.muda.pontos >= 50 && _this.muda.pontos < 75) {
                    _this.aux1 = false;
                    _this.aux2 = false;
                    _this.aux3 = true;
                    _this.aux4 = false;
                    _this.aux5 = false;
                    _this.muda.indiceGeral = 3;
                }
                if (_this.muda.pontos < 25) {
                    _this.aux1 = true;
                    _this.aux2 = false;
                    _this.aux3 = false;
                    _this.aux4 = false;
                    _this.aux5 = false;
                    _this.muda.indiceGeral = 1;
                }
                if (_this.muda.pontos >= 25 && _this.muda.pontos < 50) {
                    _this.aux1 = false;
                    _this.aux2 = false;
                    _this.aux3 = true;
                    _this.aux4 = false;
                    _this.aux5 = false;
                    _this.muda.indiceGeral = 2;
                }
                if (_this.muda.pontos >= 75 && _this.muda.pontos < 95) {
                    _this.aux1 = false;
                    _this.aux2 = false;
                    _this.aux3 = false;
                    _this.aux4 = true;
                    _this.aux5 = false;
                    _this.muda.indiceGeral = 4;
                }
                if (_this.muda.pontos >= 95) {
                    _this.aux1 = false;
                    _this.aux2 = false;
                    _this.aux3 = false;
                    _this.aux4 = false;
                    _this.aux5 = true;
                    _this.muda.indiceGeral = 5;
                }
                _this.calcularPontos();
            }
            else {
                console.log('erro');
            }
        }, function (error) {
            console.log(error);
        });
        this.emblemasCarregar();
    };
    MudaPage.prototype.emblemasCarregar = function () {
        var desEm = [];
        var em = this.emblemaService.emblemas;
        var aux;
        var cont = 0;
        var ems = [];
        for (var i = 0; i < this.desafios.length; i++) {
            for (var a = 0; a < this.idDesafios.length; a++) {
                if (this.desafios[i].id == this.idDesafios[a]) {
                    desEm.push(this.desafios[i].categoria);
                }
            }
        }
        for (var b = 0; b < desEm.length; b++) {
            aux = desEm[b];
            for (var l = 0; l < desEm.length; l++) {
                if (aux == desEm[l]) {
                    cont++;
                    if (cont > 2) {
                        ems.push(aux);
                    }
                }
            }
        }
        var uniqueArray = Array.from(new Set(ems));
        if (uniqueArray.length > 0) {
            for (var s = 0; s < uniqueArray.length; s++) {
                this.emblemas.push(new __WEBPACK_IMPORTED_MODULE_2__app_models_emblema__["a" /* Emblema */](2, 'EmblemasMuda', 1, 1, uniqueArray[s]));
            }
        }
        if (this.emblemas[0].id == 1) {
            this.emblemas.splice(0, 1);
        }
        this.emtem = this.emblemas.length;
    };
    MudaPage.prototype.calcularPontos = function () {
        var soma = 0;
        console.log(this.muda.mudaid);
        for (var i = 0; i < this.desafios.length; i++) {
            for (var a = 0; a < this.listaDesafios.length; a++) {
                if (this.listaDesafios[a].desafioId == this.desafios[i].id) {
                    if (this.listaDesafios[a].status == 'pending') {
                        soma = soma + this.desafios[i].pontuacao;
                        console.log(soma);
                        return this.auth
                            .updateMuda(this.muda, this.muda.pontos + soma)
                            .subscribe(function (response) {
                            console.log(response);
                        });
                    }
                }
            }
        }
    };
    MudaPage.prototype.logout = function () {
        this.auth.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */]);
    };
    MudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'page-muda',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/muda/muda.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>muda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="container-muda">\n    <ion-img id="container-muda-img" \n    [class.container-image-muda-1] = "aux1"\n    [class.container-image-muda-2] = "aux2"\n    [class.container-image-muda-3] = "aux3" \n    [class.container-image-muda-4] = "aux4"\n     [class.container-image-muda-5] = "aux5"></ion-img>\n    </div>\n       \n  <div class="container-muda-nome">\n      <p>Nome muda</p>\n      <h5>{{muda.nome}}</h5>\n      <div class="container-muda-ele">\n          <div>\n              <p>{{muda.indiceGeral}}</p>\n              <p>Estado</p>\n          </div>\n          <div>\n              <p>{{muda.pontos}}</p>\n              <p>Pontos</p>\n          </div>\n          <div >\n                <p>{{ emtem  }}</p>\n                <p>Emblemas</p>\n            </div>\n      </div>      \n  </div>\n  <ion-list class="container-emblemas" >\n        <ion-item class="emblemas" *ngFor="let emblema of emblemas" > \n                <ion-img *ngIf = "emblema.categoria == \'\'" id="nada" class="container-emblema-img"  ></ion-img>\n                <ion-img *ngIf = "emblema.categoria == \'Energia\'" id="energia"  class="container-emblema-img"  ></ion-img>\n                <ion-img *ngIf = "emblema.categoria == \'Água\'" id="agua" class="container-emblema-img"  ></ion-img>\n        </ion-item>\n  </ion-list>\n  <button (click)="logout()" ion-button>\n    <ion-icon name="logout">logout</ion-icon>\n  </button>\n  \n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/muda/muda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__desafios_desafios_service__["a" /* DesafioService */],
            __WEBPACK_IMPORTED_MODULE_0__emblema_service__["a" /* EmblemaService */]])
    ], MudaPage);
    return MudaPage;
}());

//# sourceMappingURL=muda.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__muda_muda__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, authService, alertCtrl, loadingCtrl, menu, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.menu = menu;
        this.storage = storage;
        this.registerCredentials = { email: '', password: '' };
        this.validado = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoading();
        this.authService.login(this.registerCredentials).subscribe(function (permissao) {
            console.log('deu1');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__muda_muda__["a" /* MudaPage */]);
        }, function (error) {
            _this.showError(error._body);
        });
    };
    LoginPage.prototype.showLoading = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Por favor aguarde',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.showError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: ':(',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__cadastro_cadastro__["a" /* CadastroPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        this.menu.swipeEnable(false);
        if (localStorage.getItem('token')) {
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__muda_muda__["a" /* MudaPage */]);
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-row class="logo-row">\n      <ion-col></ion-col>\n      <ion-col width-67>\n        <img width="120px" src="../../assets/imgs/logo.png"/>\n      </ion-col>\n      <ion-col></ion-col>\n  </ion-row>\n\n  <div class="login-box">\n    <form (ngSubmit)="login()" #registerForm="ngForm">\n      <ion-row>\n        <ion-col>\n          <ion-list inset>\n            \n            <ion-item>\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n            </ion-item>\n            \n            <ion-item>\n              <ion-input type="password" placeholder="Senha" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n            </ion-item>\n            \n          </ion-list>\n        </ion-col>\n      </ion-row>\n      \n      <ion-row>\n        <ion-col class="signup-col">\n          <button ion-button round class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Login</button>\n        </ion-col>\n      </ion-row>\n    </form>\n    <button ion-button class="register-btn" block clear (click)="createAccount()">Criar nova Conta</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastraMudaPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__muda_muda_model__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__muda_muda__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastraMudaPage = /** @class */ (function () {
    function CadastraMudaPage(navCtrl, navParams, storage, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.auth = auth;
    }
    CadastraMudaPage.prototype.ionViewDidLoad = function () {
        this.storage.clear();
    };
    CadastraMudaPage.prototype.cadasNome = function () {
        var _this = this;
        var id = this.auth.currentUser.usuarioid;
        this.storage.set('nome-muda', this.nome);
        var muda = new __WEBPACK_IMPORTED_MODULE_0__muda_muda_model__["a" /* Muda */](this.nome, 50, 0, id);
        this.auth.salvaMuda(muda).subscribe(function (permissao) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__muda_muda__["a" /* MudaPage */]);
        }, function (error) {
            console.log(error._body);
        });
    };
    CadastraMudaPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-cadastra-muda',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/cadastra-muda/cadastra-muda.html"*/'<!--\n  Generated template for the CadastraMudaPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Cadastre sua muda</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="container-parabens">\n        <p><b>Parabéns</b>, você ganhou uma muda para cuidar, dê-lhe um nome.</p>\n    </div>\n    <div class="container-muda1">\n        <ion-img class="container-muda-img1" src="../../assets/imgs/MUDA.gif"></ion-img>\n    </div>\n    <ion-item class="container-nome-muda1">\n        <ion-label floating>Nome MUDA</ion-label>\n        <ion-input type="text" \n          name="muda"\n          clearInput clearOnEdit="false"\n          [(ngModel)] = "nome"\n        ></ion-input>\n    </ion-item>\n    <button ion-button class="btn-nome-muda"(click) ="cadasNome()" block clear >Registrar nome</button>\n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/cadastra-muda/cadastra-muda.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */]])
    ], CadastraMudaPage);
    return CadastraMudaPage;
}());

//# sourceMappingURL=cadastra-muda.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_service__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registro_habitos_registro_habitos__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CadastroPage = /** @class */ (function () {
    function CadastroPage(formBuilder, navController, appService, authService, storage) {
        this.formBuilder = formBuilder;
        this.navController = navController;
        this.appService = appService;
        this.authService = authService;
        this.storage = storage;
        this.messageNome = '';
        this.messageEmail = '';
        this.messagePassword = '';
        this.errorNome = false;
        this.errorEmail = false;
        this.errorPassword = false;
        this.loginForm = this.formBuilder.group({
            nome: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            usuario_email1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            usuario_email2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            senha1: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                ]),
            ],
            senha2: [
                '',
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(20),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                ]),
            ],
        });
    }
    CadastroPage.prototype.validar = function () {
        var _a = this.loginForm.controls, nome = _a.nome, usuario_email1 = _a.usuario_email1, usuario_email2 = _a.usuario_email2, senha1 = _a.senha1, senha2 = _a.senha2;
        this.messageNome = '';
        this.messageEmail = '';
        this.messagePassword = '';
        if (usuario_email1.value == usuario_email2.value) {
            if (senha1.value == senha2.value) {
                if (!this.loginForm.valid) {
                    if (!nome.valid) {
                        this.errorNome = true;
                        this.messageNome = 'Nome inválido!';
                    }
                    if (!usuario_email1.valid || !usuario_email2.valid) {
                        this.errorEmail = true;
                        this.messageEmail = 'Ops! Email inválido';
                        if (usuario_email1.value != usuario_email2.value) {
                            this.errorEmail = true;
                            this.messageEmail = 'Os emails digitados não correspodem';
                        }
                        else {
                            this.messageEmail = '';
                        }
                    }
                    else {
                        if (usuario_email1.value != usuario_email2.value) {
                            this.errorEmail = true;
                            this.messageEmail = 'Os emails digitados não correspodem';
                        }
                        else {
                            this.messageEmail = '';
                        }
                    }
                    if (!senha1.valid || !senha2.valid) {
                        this.errorPassword = true;
                        this.messagePassword = 'A senha precisa ter de 6 a 20 caracteres';
                        if (senha1.value != senha2.value) {
                            this.errorPassword = true;
                            this.messagePassword = 'As senhas digitados não correspodem';
                        }
                        else {
                            this.messageEmail = '';
                        }
                    }
                    else {
                        if (senha1.value != senha2.value) {
                            this.errorPassword = true;
                            this.messagePassword = 'As senhas digitados não correspodem';
                        }
                        else {
                            this.messageEmail = '';
                        }
                    }
                }
                else {
                    this.storage.set('nome', nome.value);
                    this.storage.set('email', usuario_email1.value);
                    this.storage.set('senha', senha1.value);
                    this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_6__registro_habitos_registro_habitos__["a" /* RegistroHabitosPage */]);
                }
            }
            else {
                this.errorPassword = true;
                this.messagePassword = 'As senhas digitados não correspodem';
            }
        }
        else {
            this.errorEmail = true;
            this.messageEmail = 'Os emails digitados não correspodem';
        }
    };
    CadastroPage.prototype.voltar = function () {
        this.storage.clear();
        this.navController.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    CadastroPage.prototype.ionViewDidLoad = function () {
        this.storage.clear();
    };
    CadastroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["m" /* Component */])({
            selector: 'page-cadastro',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/cadastro/cadastro.html"*/'<!--\n  Generated template for the CadastroPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cadastre-se</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form padding [formGroup]="loginForm" (submit)="validar()" novalidate>\n    <ion-list>\n        <ion-item>\n            <ion-label floating>Nome</ion-label>\n            <ion-input type="text" [(ngModel)] = "nome" \n                formControlName="nome"\n                name="nome"\n                 type="text"\n                 clearInput clearOnEdit="false"\n           ></ion-input>\n        </ion-item>\n        <h6 *ngIf="errorEmail" class="error"> {{messageNome}}</h6>\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="text" [(ngModel)] = "usuario_email1" \n        formControlName="usuario_email1"\n        name="usuario_email1"\n        type="text"\n        clearInput clearOnEdit="false"\n        ></ion-input>\n      </ion-item>\n      <h6 *ngIf="errorEmail" class="error"> {{messageEmail}}</h6>\n      <ion-item>\n        <ion-label floating>Confirmar Email</ion-label>\n        <ion-input type="text"  [(ngModel)] = "usuario_email2" \n        formControlName="usuario_email2"\n        name="usuario_email2"\n        type="text"\n        clearInput clearOnEdit="false"\n        ></ion-input>\n      </ion-item>\n      <h6 *ngIf="errorEmail" class="error"> {{messageEmail}}</h6>\n      <ion-item>\n        <ion-label floating>Senha</ion-label>\n        <ion-input type="password" [(ngModel)] = "senha1" \n          formControlName="senha1"\n          name="senha1"\n          type="password"\n          clearInput clearOnEdit="false"\n        ></ion-input>\n      </ion-item>\n      <h6 *ngIf="errorPassword" class="error"> {{messagePassword}}</h6>\n      <ion-item>\n        <ion-label floating>Confirmar Senha</ion-label>\n        <ion-input type="password" [(ngModel)] = "senha2" \n          formControlName="senha2"\n          name="senha2"\n          type="password"\n          clearInput clearOnEdit="false"\n        ></ion-input>\n      </ion-item>\n      <h6 *ngIf="errorPassword" class="error"> {{messagePassword}}</h6>\n    </ion-list>\n    <button ion-button round class="submit-btn" text-center>Confirmar</button>\n  </form>\n  <button ion-button class="register-btn" block clear (click)="voltar()">Voltar</button>\n</ion-content>\n'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/cadastro/cadastro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__app_app_service__["a" /* AppService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], CadastroPage);
    return CadastroPage;
}());

//# sourceMappingURL=cadastro.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistroHabitosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastra_muda_cadastra_muda__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_model__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistroHabitosPage = /** @class */ (function () {
    function RegistroHabitosPage(navCtrl, navParams, authService, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.storage = storage;
        this.usuario = new __WEBPACK_IMPORTED_MODULE_4__cadastro_usuario_model__["a" /* Usuario */]('', '', '', []);
        this.cont = 0;
        this.prog = false;
        this.prog2 = false;
        this.prox = false;
        this.valid = true;
    }
    // habitos: Habito[] =  [
    //   new Habito (1,"Fechar a torneira" , "Fechar a torneira ao escovar os dentes", false,"Agua", 1),
    //   new Habito (2,"Apagar as luzes" , "Apagar as luzes dos cômodos quando não estiverem presentes", false , "Energia", 1),
    //   new Habito (3,"Desligar da tomada" , "Desligar da tomada os aparelhos que não estão em uso", false , "Energia",1),
    //   new Habito (4,"Entrega pilhas" , "Entrega pilhas usadas em um estabelecimento adequado", false, "Residuos" , 1),
    //   new Habito (5,"Trocar uma lâmpada" , "Trocar uma lâmpada de sua casa por uma lâmpada LED", false, "Residuos" , 1),
    //   new Habito (6,"Banho" , "Menos tempo no banho", false, "Agua", 1),
    //   new Habito (7,"Lixo" , "Separar o lixo corretamente", false, "Residuos", 1),
    //   new Habito (8,"Reduzir lixo" , "Reduzir a quantidade de lixo produzido semanalmente", false, "Residuos" , 1),
    //   new Habito (9,"Descarte oleo" , "Descarte adequado do óleo de cozinha", false, "Residuos" ,1),
    //   new Habito (10,"Evitar transportes" , "Evitar transportes individuais e poluentes", false ,"Emissão" ,1)
    // ]
    RegistroHabitosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.authService.getHabitos().subscribe(function (response) {
            console.log(response);
            if (response) {
                _this.habitos = response;
            }
        });
        this.storage.get('nome').then(function (val) {
            _this.usuario.nome = val;
        });
        this.storage.get('email').then(function (val) {
            _this.usuario.email = val;
        });
        this.storage.get('senha').then(function (val) {
            _this.usuario.senha = val;
        });
        this.carrega();
    };
    RegistroHabitosPage.prototype.carrega = function () {
        for (var i = 0; i < this.habitos.length; i++) {
            if (this.cont == 0 && i < 4) {
                this.habitosCar.push(this.habitos[i]);
            }
            if (this.cont == 1 && i >= 4 && i <= 7) {
                if (this.habitosCar.length == 4) {
                    this.habitosCar = [];
                }
                this.habitosCar.push(this.habitos[i]);
                this.prog = true;
            }
            if (this.cont == 2) {
                if (this.habitosCar.length >= 2) {
                    this.habitosCar = [];
                }
                this.habitosCar.push(this.habitos[i]);
                this.prog2 = true;
                this.prox = true;
                this.valid = false;
            }
        }
        this.cont++;
    };
    RegistroHabitosPage.prototype.statusHabito = function (habito) {
        console.log(habito.status);
    };
    RegistroHabitosPage.prototype.inserirUsuario = function () {
        var _this = this;
        this.authService.cadastraUsuario(this.usuario)
            .subscribe(function (response) {
            if (response) {
            }
            else {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cadastra_muda_cadastra_muda__["a" /* CadastraMudaPage */]);
            }
        }, function (error) {
            console.log(error);
        });
    };
    RegistroHabitosPage.prototype.cadastrar = function () {
        // for(let i of this.habitos){
        //   if(i.status){
        //     this.usuario.push(i.id)
        //   }else{
        //   }
        // }
        this.inserirUsuario();
    };
    RegistroHabitosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-registro-habitos',template:/*ion-inline-start:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/registro-habitos/registro-habitos.html"*/'<!--\n  Generated template for the RegistroHabitosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Registro Habitos</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <p class="card card--habito"> Por favor, selecionar hábitos que você não costuma praticar.</p>\n  <ion-card *ngFor="let habito of habitosCar">\n    <ion-card-header>\n      {{ habito.titulo }}\n    </ion-card-header>\n    <ion-card-content>\n      {{ habito.descricao }}\n    </ion-card-content>\n  </ion-card>\n  <div class="progress">\n    <div [ngClass]="[\'progress-1\']"></div>\n    <div class="progress-2" [class.progress-1]="prog"></div>\n    <div class="progress-3" [class.progress-1]="prog2"></div>\n  </div>\n  <button ion-button round class="btn-prox" (click)="carrega()" [class.btn-none]="prox">Proximo</button>\n  <button ion-button raund class="btn-habito" [disabled]="valid" outline (click)="cadastrar()" (click)="inserirUsuario()">Confirmar</button>\n\n</ion-content>'/*ion-inline-end:"/home/erick/Projetos/FBD-Trabalho-MUDA/MUDA/src/pages/registro-habitos/registro-habitos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], RegistroHabitosPage);
    return RegistroHabitosPage;
}());

//# sourceMappingURL=registro-habitos.js.map

/***/ })

},[228]);
//# sourceMappingURL=main.js.map