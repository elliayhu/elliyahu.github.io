define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = 'main';
      config.map([{ route: '', redirect: 'main' }, { route: 'main', name: 'main', moduleId: './main-page/main-carousel' }, { route: 'projects', name: 'projects', moduleId: './projects/projects' }, { route: 'about-us', name: 'about-us', moduleId: './about-us/about-us' }]);
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {

    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('contact-us/contact-us',['exports', 'aurelia-fetch-client'], function (exports, _aureliaFetchClient) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ContactUs = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ContactUs = exports.ContactUs = function () {
        function ContactUs() {
            _classCallCheck(this, ContactUs);

            this.httpClient = new _aureliaFetchClient.HttpClient();
        }

        ContactUs.prototype.sendCustomerInformation = function sendCustomerInformation() {
            var emailData = {
                privetName: '' + this.privetName,
                familyName: '' + this.familyName,
                phone: '' + this.phone,
                mailAddress: '' + this.mailAddress,
                freeText: '' + this.freeText
            };

            this.httpClient.fetch('/api/top', {
                method: "POST",
                body: (0, _aureliaFetchClient.json)(emailData)
            }).then(function (response) {
                return response.json();
            }).then(function (response) {
                return console.log("json(emailData)", response);
            });
        };

        return ContactUs;
    }();
});
define('about-us/about-us',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AboutUs = exports.AboutUs = function () {
        function AboutUs() {
            _classCallCheck(this, AboutUs);

            this.mainDiv = document.getElementById("mainDiv");
            this.logos = [{ src: "src/images/logo/01.png" }, { src: "src/images/logo/02.png" }, { src: "src/images/logo/03.png" }, { src: "src/images/logo/04.png" }, { src: "src/images/logo/05.png" }, { src: "src/images/logo/06.png" }, { src: "src/images/logo/07.png" }, { src: "src/images/logo/08.png" }, { src: "src/images/logo/09.png" }, { src: "src/images/logo/10.png" }, { src: "src/images/logo/11.png" }];
            this.hebrew = true;
            this.buttonText = 'Eng';
            this.titleH1 = 'טופ דיזיין, בניה והשקעות בע"מ';
            this.titleH1E = 'TOP DESIGN - CONSTRUCTION ET INVESTISSEMENTS LTD';
            this.title1H5 = 'אמינות ומקצועיות ללא פשרות';
            this.title1H5E = 'Uncompromising integrity and professionalism';
            this.paragraph1 = "\u05D7\u05D1\u05E8\u05EA \u05D8\u05D5\u05E4 \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D4\u05D9\u05E0\u05D4 \u05D7\u05D1\u05E8\u05D4 \u05D1\u05E2\u05DC\u05EA \u05E1\u05D9\u05D5\u05D5\u05D2 \u05E7\u05D1\u05DC\u05E0\u05D9\n    \u05E8\u05E9\u05D5\u05DD \u05D1\u05E4\u05E0\u05E7\u05E1 \u05D4\u05E7\u05D1\u05DC\u05E0\u05D9\u05DD \u05D5\u05D1\u05E2\u05DC\u05EA \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC \u05DC\u05DE\u05E2\u05DC\u05D4 \u05DE\u05E2\u05E9\u05E8\u05D9\u05DD \u05E9\u05E0\u05D9\u05DD\n    \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D5\u05D4\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D4\u05E6\u05D5\u05D5\u05EA \u05D4\u05E0\u05D9\u05D4\u05D5\u05DC\u05D9 \u05D5\u05D4\u05D1\u05D9\u05E6\u05D5\u05E2\u05D9 \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1 \u05DE\u05D1\u05E2\u05DC\u05D9\n    \u05DE\u05E7\u05E6\u05D5\u05E2 \u05DE\u05D3\u05D5\u05E4\u05DC\u05DE\u05D9\u05DD \u05D4\u05E0\u05D3\u05E1\u05D0\u05D9\u05DD \u05D5\u05DE\u05D4\u05E0\u05D3\u05E1\u05D9 \u05D1\u05E0\u05D9\u05D9\u05DF \u05D5\u05D1\u05E2\u05DC\u05D9 \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05DC \u05DC\u05DE\u05E2\u05DC\u05D4 \u05DE\u05E2\u05E9\u05E8 \u05E9\u05E0\u05D9\u05DD \u05DC\u05E4\u05D7\u05D5\u05EA\n    \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D5\u05D4\u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05DB\u05D5\u05DC\u05DC \u05D0\u05E0\u05E9\u05D9 \u05DE\u05E7\u05E6\u05D5\u05E2 \u05DE\u05D4\u05DE\u05D5\u05D1\u05D9\u05DC\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DE\u05DD \u05D1\u05D0\u05E8\u05E5 \u05D1\u05DE\u05D8\u05E8\u05D4\n    \u05DC\u05E2\u05DE\u05D5\u05D3 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8, \u05DC\u05DC\u05D0 \u05E4\u05E9\u05E8\u05D5\u05EA \u05D5\u05DC\u05D4\u05D1\u05D8\u05D9\u05D7\n    \u05D0\u05EA \u05E8\u05DE\u05EA \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D5\u05D4\u05D2\u05D9\u05DE\u05D5\u05E8 \u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D9\u05DD \u05D5\u05D4\u05D8\u05D5\u05D1\u05D9\u05DD\n    \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D1\u05DE\u05E9\u05DA \u05D4\u05E9\u05E0\u05D9\u05DD \u05E8\u05DB\u05E9\u05D4 \u05DC\u05E2\u05E6\u05DE\u05D4 \u05D7\u05D1\u05E8\u05EA \u05D8\u05D5\u05E4  \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D1\u05E2\"\u05DE\n    \u05DE\u05D5\u05E0\u05D9\u05D8\u05D9\u05DF \u05E9\u05DC \u05D0\u05DE\u05D9\u05E0\u05D5\u05EA \u05D5\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D2\u05D9\u05DE\u05D5\u05E8 \u05D5\u05D4\u05D1\u05E0\u05D9\u05D9\u05D4, \u05EA\u05D5\u05DA \u05DE\u05EA\u05DF \u05D3\u05D2\u05E9 \u05E2\u05DC \u05E4\u05D9\u05EA\u05D5\u05D7 \u05D5\u05E9\u05D9\u05DB\u05DC\u05D5\u05DC \n    \u05D3\u05E8\u05DB\u05D9 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05E0\u05DB\u05D5\u05DF \u05D1\u05D9\u05D3\u05E2, \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05E9\u05D9\u05DE\u05D5\u05E9\n    \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05D4\u05D0\u05D9\u05DB\u05D5\u05EA\u05D9\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D5\u05D1\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D4\u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8 \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD \u05D1\u05E9\u05D5\u05E7 -\n    \u05DC\u05D0\u05D5\u05E8\u05DA \u05DB\u05DC \u05D4\u05D3\u05E8\u05DA";
            this.paragraph1E = "The \u201CTop Design\u201D Company is registered as a contractor company in the Israeli\n    contractor registrar and has over 20 years of experience in the field of construction\n    and development. The administrative and operational staff of the company is made\n    up of highly skilled professionals and construction engineers with at least a\n    decade\u2019s worth of experience in the field of construction and development. Our\n    team includes some of the leading professionals in their fields in Israel and are\n    dedicated to uncompromisingly meeting the highest professional standards and\n    ensuring the best level of construction and finishing in the field. Over the years, the\n    Top Design Company has acquired a reputation of integrity and professionalism in\n    the field of finishing and construction, while emphasizing development and\n    improvement of its techniques through correct use of knowledge and experience,\n    and the use of the highest quality materials and the most advanced products in the\n    market for every phase of its projects.";
            this.title2H5 = "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD, \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF \u05D5\u05D4\u05E6\u05DC\u05D7\u05D4";
            this.title2H5E = "Projects, experience, and success-";
            this.paragraph2 = "\u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05D1\u05D5\u05E6\u05E2\u05D5 \u05E2\"\u05D9 \u05D7\u05D1\u05E8\u05EA \u05D8\u05D5\u05E4  \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D1\u05E2\"\u05DE \u05E7\u05E9\u05E8\u05D5 \u05D0\u05EA \u05E9\u05DE\u05D4 \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E2\u05DD \u05E0\u05D9\u05E1\u05D9\u05D5\u05DF, \n    \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA \u05D5\u05D4\u05E6\u05DC\u05D7\u05D4. \u05DB\u05E7\u05D1\u05DC\u05DF \u05DE\u05DE\u05D5\u05E0\u05D4 \u05D5\u05DB\u05E7\u05D1\u05DC\u05DF \u05E8\u05D0\u05E9\u05D9, \u05DE\u05EA\u05DE\u05D7\u05D4 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D1\u05E0\u05D9\u05D4\u05D5\u05DC \u05D5\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4, \n    \u05D1\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D2\u05DE\u05E8, \u05E9\u05D9\u05E4\u05D5\u05E5 \u05DB\u05DC\u05DC\u05D9, \u05EA\u05D5\u05E1\u05E4\u05D5\u05EA \u05D1\u05E0\u05D9\u05D9\u05D4 \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05D5\u05EA \u05D5\u05D2\u05D9\u05DE\u05D5\u05E8 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8\u05D9\u05DD \u05E9\u05DC \u05DE\u05D1\u05E0\u05D9\u05DD \u05DC\u05DE\u05D2\u05D6\u05E8 \u05D4\u05E4\u05E8\u05D8\u05D9 \u05D5\u05D4\u05E2\u05E1\u05E7\u05D9:\n    \u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05D1\u05E0\u05D9 \u05DE\u05E1\u05D7\u05E8, \u05EA\u05E2\u05E9\u05D9\u05D4, \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05D5\u05DE\u05D1\u05E0\u05D9 \u05E6\u05D9\u05D1\u05D5\u05E8.\n    \u05D7\u05D1\u05E8\u05EA \u05D8\u05D5\u05E4  \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D1\u05E2\"\u05DE \u05E9\u05DE\u05D4 \u05D3\u05D2\u05E9 \u05E2\u05DC \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05EA\u05D5 \u05EA\u05E7\u05DF \u05D1\u05DC\u05D1\u05D3,\n    \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D7\u05D5\u05E7 \u05EA\u05DB\u05E0\u05D5\u05DF \u05D5\u05D1\u05E0\u05D9\u05D4. \n    \u05D4\u05E9\u05D0\u05D9\u05E4\u05D4 \u05DC\u05DE\u05E6\u05D5\u05D9\u05E0\u05D5\u05EA \u05D5\u05D4\u05D4\u05E6\u05DC\u05D7\u05D4 \u05D4\u05DE\u05D5\u05DB\u05D7\u05EA \u05D1\u05E9\u05D9\u05E8\u05D5\u05EA \u05D5\u05D1\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05D5\u05EA, \u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05DC\u05D5\u05D7\u05D5\u05EA \u05D6\u05DE\u05E0\u05D9\u05DD, \n    \u05D5\u05DE\u05EA\u05DF \u05D3\u05D2\u05E9 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05E2\u05DC \u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05D4, \u05D4\u05DD \u05D0\u05DC\u05D5 \u05E9\u05D4\u05E4\u05DB\u05D5 \u05D0\u05EA \u05D8\u05D5\u05E4 \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D1\u05E2\"\u05DE \u05DC\u05DE\u05D5\u05D1\u05D9\u05DC\u05D4 \u05D1\u05EA\u05D7\u05D5\u05DE\u05D4.";
            this.paragraph2E = "The projects performed by the Top Design Company LTD, have linked the name of\n    the Company with experience, professionalism and success. Both as a\n    subcontractor and as the primary contractor, the company specializes in the\n    management and performance of projects in the field of construction, in the\n    performance of finishing jobs, general renovation, exclusive building additions, and\n    finishing projects of private and business structures; the construction of commercial\n    buildings, industrial buildings, offices and public structures. The Top Design LTD";
            this.paragraph2E2 = "Company emphasizes the performance of work and the exclusive use of standards\n    association stamped materials, in accordance with the ordinances of the design\n    and construction law. Our striving for excellence and our proven success in\n    providing professional service, meeting timetables, and particularly emphasizing\n    customer satisfaction, are what have made Top Design LTD into a leader in the\n    field.";
            this.paragraph3 = "\u05D1\u05D9\u05DF \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA\u05D9\u05E0\u05D5 \u05D4\u05E2\u05E1\u05E7\u05D9\u05D9\u05DD \u05E1\u05D9\u05D8\u05D9 \u05D1\u05E0\u05E7, \u05E2.\u05D8\u05D5\u05E4 \u05D4\u05E0\u05D3\u05E1\u05D4, \u05D8\u05DC\u05D3\u05D5\u05E8, \u05E4\u05E8\u05E8\u05D4 \u05D9\u05D6\u05DE\u05D5\u05EA \u05D1\u05E2\"\u05DE, \u05D5\u05E8\u05D5\u05E0\u05D9\u05E7\u05D4 \u05D4\u05E9\u05E7\u05E2\u05D5\u05EA \u05D1\u05E2\"\u05DE,\n    \u05D9.\u05DE\u05D0\u05E0\u05E2 \u05D5\u05E9\u05D5\u05EA', \u05D3\u05D9\u05D9\u05DE\u05DC\u05E8 \u05DE\u05E8\u05E6\u05D3\u05E1, \u05E1\u05DC\u05D1\u05E8\u05D9\u05D9\u05D8, \u05D1\u05D9\u05EA\u05D0 \u05DE\u05D3\u05D9\u05D4 \u05D5\u05E2\u05D5\u05D3 \u05DC\u05E7\u05D5\u05D7\u05D5\u05EA \u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05D9\u05DD \u05D5\u05E4\u05E8\u05D8\u05D9\u05D9\u05DD.";
            this.paragraph3E = "Amongst our business clients are: Citybank, E.Top Engineering, Teldor I.T,\n    Daimler Mercedes, Google, Servicenow, Movit, Cellbrite LTD, Broadcom LTD,\n    Cisco, Ortam Sahar LTD, and many other private clients.";
            this.title3H5 = "\u05D1\u05E0\u05D9\u05D9\u05EA \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD ,\u05D1\u05E0\u05D9\u05D9\u05D4 \u05E4\u05E8\u05D8\u05D9\u05EA/\u05E6\u05D9\u05D1\u05D5\u05E8\u05D9\u05EA \u05D5\u05E9\u05D8\u05D7\u05D9 \u05DE\u05E1\u05D7\u05E8. \u05DE\u05D4\u05DE\u05E1\u05D3 \u05D5\u05E2\u05D3 \u05D4\u05D8\u05E4\u05D7\u05D5\u05EA";
            this.paragraph4 = "\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D4\u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05D9\u05D5\u05EA\u05E8, \u05E9\u05DC\u05D3, \u05D5\u05D2\u05D9\u05DE\u05D5\u05E8 \u05E2\u05D3 \u05DE\u05E4\u05EA\u05D7, \u05EA\u05D5\u05DA \u05D4\u05E7\u05E4\u05D3\u05D4 \u05D9\u05EA\u05E8\u05D4 \u05E2\u05DC \n    \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05EA\u05D5 \u05EA\u05E7\u05DF \u05D1\u05DC\u05D1\u05D3 \u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05D4\u05D5\u05E8\u05D0\u05D5\u05EA \u05D7\u05D5\u05E7 \u05EA\u05DB\u05E0\u05D5\u05DF \u05D5\u05D1\u05E0\u05D9\u05D9\u05D4.";
            this.paragraph4E = "Construction of offices, private/ public construction and trading areas. From\n    foundations to rafters.";
            this.paragraph5 = "\u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05DB\u05D5\u05DC\u05DC\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05DE\u05D4\u05E8\u05D9\u05E1\u05EA \u05E7\u05D9\u05E8\u05D5\u05EA \u05D0\u05DD \u05E6\u05E8\u05D9\u05DA \u05D5\u05E2\u05D3 \u05DC\u05E7\u05D1\u05DC\u05EA \u05D4\u05DE\u05E4\u05EA\u05D7,\n    \u05E4\u05D9\u05E7\u05D5\u05D7 \u05E2\u05DC \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4\t\u05E4\u05D9\u05E7\u05D5\u05D7 \u05D5\u05E0\u05D9\u05D4\u05D5\u05DC \u05DB\u05D5\u05DC\u05DC \u05E9\u05DC \u05D4\u05D1\u05E0\u05D9\u05D4, \u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D7\u05EA \u05DC\u05DB\u05DC \u05E9\u05D0\u05DC\u05D4\n    \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05DC\u05D0 \u05E9\u05DC \u05DB\u05DC \u05E0\u05D5\u05E9\u05D0 \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05D5\u05E0\u05D4\u05DC\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05D5\u05DC \u05D1\u05E0\u05D9\u05D9\u05DF \u05D4\u05DE\u05E9\u05E8\u05D3\u05D9\u05DD\n    \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05E9\u05E7\u05D9\u05E4\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D0\u05DC\u05D9\u05DB\u05DD, \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05D5\u05D8\u05E3 \u05E2\u05DC \u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05D0\u05EA\u05E8\n    \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05EA\u05D5\u05DA \u05D4\u05D1\u05E0\u05D4 \u05D5\u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05E6\u05D5\u05E8\u05DB\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7\n    \u05E2\u05DE\u05D9\u05D3\u05D4 \u05D1\u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD\n    \u05DE\u05EA\u05DF \u05D0\u05D7\u05E8\u05D9\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05D1\u05D2\u05DE\u05E8 \u05D4\u05E9\u05D9\u05E4\u05D5\u05E5\n    \u05E8\u05DE\u05EA \u05D1\u05E0\u05D9\u05D9\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DE\u05D0\u05D5\u05D3 \u05D7\u05D5\u05D5\u05D9\u05EA \u05D1\u05E0\u05D9\u05D9\u05D4 \u05D1\u05E8\u05DE\u05D4 \u05E9\u05DC\u05D0 \u05DE\u05DB\u05D9\u05E8\u05D9\u05DD \u05D1\u05D0\u05E8\u05E5.";
            this.paragraph5E = "Construction to the highest standards, framing, and complete finishing work, while\n    meticulously observing the finest details and the exclusive use of standards\n    association stamped materials in accordance with the ordinances of the design and\n    construction law.";
            this.paragraph6 = "\u05DB\u05DE\u05E0\u05D4\u05DC \u05D0\u05EA\u05D4 \u05D5\u05D3\u05D0\u05D9 \u05DE\u05DB\u05D9\u05E8 \u05D0\u05EA \u05D4\u05E7\u05E9\u05D9\u05D9\u05DD \u05D4\u05E0\u05DC\u05D5\u05D5\u05D9\u05DD \u05DC\u05D4\u05E2\u05D1\u05E8\u05D4 \u05D5\u05D4\u05E7\u05DE\u05D4 \u05E9\u05DC \u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05DC\u05DE\u05E7\u05D5\u05DD \u05D7\u05D3\u05E9. \n    \u05E7\u05E9\u05D9\u05D9\u05DD \u05D0\u05DC\u05D5 \u05D1\u05D0\u05D9\u05DD \u05DC\u05D9\u05D3\u05D9 \u05D1\u05D9\u05D8\u05D5\u05D9 \u05D1\u05D1\u05D9\u05D8\u05D5\u05DC \u05D4\u05EA\u05E4\u05D5\u05E7\u05D4 \u05D5\u05D0\u05D9\u05D1\u05D5\u05D3 \u05D6\u05DE\u05DF \u05D9\u05E7\u05E8 \u05E2\u05DC \u05D9\u05D3\u05D9 \u05D4\u05E1\u05D8\u05EA \n    \u05EA\u05E9\u05D5\u05DE\u05EA \u05DC\u05D9\u05D1\u05DA \u05DE\u05D4\u05E2\u05D9\u05E1\u05D5\u05E7 \u05D4\u05DE\u05E8\u05DB\u05D6\u05D9 \u05DC\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D4\u05D4\u05E2\u05D1\u05E8\u05D4, \u05DC\u05D0\u05DC\u05D5 \u05DE\u05EA\u05D5\u05D5\u05E1\u05E3 \u05D4\u05E7\u05D5\u05E9\u05D9 \u05D1\u05EA\u05DB\u05E0\u05D5\u05DF \u05D5\u05D1\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05E8\u05D4.";
            this.paragraph6E = "Construction includes all phases of activity from wall demolition, should this be\n    necessary, to bringing the finishing work to ready-to-use condition.";
            this.paragraph7 = "\u05DE\u05EA\u05D5\u05DA \u05DE\u05D5\u05D3\u05E2\u05D5\u05EA \u05DC\u05E7\u05E9\u05D9\u05D9\u05DD \u05D4\u05DB\u05E8\u05D5\u05DB\u05D9\u05DD \u05D1\u05DE\u05E2\u05D1\u05E8, \u05D5\u05DE\u05EA\u05D5\u05DA \u05E8\u05E6\u05D5\u05DF \u05E9\u05DC\u05E0\u05D5 \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DB\u05DD \u05DC\u05E2\u05E9\u05D5\u05EA \u05D0\u05EA \u05D6\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05D4\u05D7\u05DC\u05E7 \u05D5\u05D4\u05D9\u05E2\u05D9\u05DC \u05D1\u05D9\u05D5\u05EA\u05E8,\n    \u05D0\u05E0\u05D5 \u05E0\u05E0\u05D4\u05DC \u05E2\u05D1\u05D5\u05E8\u05DB\u05DD \u05D0\u05EA \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05DE\u05E9\u05DC\u05D1 \u05D4\u05D9\u05D9\u05E2\u05D5\u05E5 \u05D5\u05D4\u05D0\u05E8\u05D2\u05D5\u05DF \u05D5\u05E2\u05D3 \u05E1\u05D9\u05D5\u05DD \u05D4\u05DE\u05E2\u05D1\u05E8. \u05E2\u05DC \u05D9\u05D3\u05D9 \u05E0\u05D9\u05D4\u05D5\u05DC \u05DE\u05E7\u05E6\u05D5\u05E2\u05D9 \u05D5\u05DE\u05DC\u05D0, \n    \u05E6\u05D5\u05D5\u05EA \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D5\u05D4\u05E9\u05D9\u05E4\u05D5\u05E5 \u05E9\u05DC\u05E0\u05D5 \u05DE\u05D0\u05E4\u05E9\u05E8 \u05DC\u05DA \u05DC\u05E0\u05E6\u05DC \u05D0\u05EA \u05D4\u05E9\u05E7\u05D8 \u05D5\u05DC\u05D4\u05D9\u05E9\u05D0\u05E8 \u05DE\u05DE\u05D5\u05E7\u05D3 \u05D1\u05E2\u05D1\u05D5\u05D3\u05EA\u05DA \u05D1\u05E6\u05D5\u05E8\u05D4 \u05DE\u05E8\u05D1\u05D9\u05EA. ";
            this.paragraph7E = "Supervision of construction: full supervision and total management of all\n    construction, a single address for any question.";
            this.paragraph8 = " \u05D0\u05E0\u05D5 \u05D1\u05D7\u05D1\u05E8\u05EA \u05D8\u05D5\u05E4 \u05D3\u05D9\u05D6\u05D9\u05D9\u05DF \u05D1\u05E2\"\u05DE \u05DE\u05D7\u05D5\u05D9\u05D1\u05D9\u05DD \u05DC\u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DC\u05DB\u05DC \u05D0\u05D5\u05E8\u05DB\u05D5.\n    \u05D4\u05DC\u05D9\u05DA \u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3 \u05DE\u05EA\u05E0\u05D4\u05DC \u05D1\u05EA\u05D0\u05D5\u05DD \u05E2\u05DD \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D5\u05D1\u05D4\u05EA\u05D0\u05DD \u05DC\u05E6\u05E8\u05DB\u05D9\u05D5, \u05D5\u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E8\u05D2\u05D9\u05E9\u05D5\u05EA \u05DC\u05DC\u05D5\u05D7 \u05D4\u05D6\u05DE\u05E0\u05D9\u05DD. \n    \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05EA\u05D1\u05E6\u05E2\u05EA \u05D1\u05E9\u05E7\u05D9\u05E4\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05DC\u05DC\u05E7\u05D5\u05D7, \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D3\u05D9\u05D5\u05D5\u05D7 \u05E9\u05D5\u05D8\u05E3 \u05E2\u05DC \u05D4\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05D0\u05EA\u05E8.\n    \u05D2\u05DE\u05E8 \u05D8\u05D5\u05D1 \u05D4\u05D5\u05D0 \u05E2\u05D1\u05D5\u05D3\u05EA \u05D0\u05D5\u05DE\u05E0\u05D5\u05EA, \u05D5\u05D4\u05D5\u05D0 \u05D6\u05D4 \u05E9\u05D9\u05E2\u05E0\u05D9\u05E7 \u05DE\u05D7\u05DE\u05D0\u05D5\u05EA \u05DE\u05D4\u05D0\u05D5\u05E8\u05D7\u05D9\u05DD \u05E9\u05DC\u05DB\u05DD. \n    \u05E6\u05D5\u05D5\u05EA \u05D4\u05D2\u05DE\u05E8 \u05E9\u05DC\u05E0\u05D5 \u05D4\u05DD \u05D1\u05E2\u05DC\u05D9 \u05DE\u05E7\u05E6\u05D5\u05E2 \u05DE\u05E2\u05D5\u05DC\u05D9\u05DD \u05D5\u05DE\u05E0\u05D5\u05E1\u05D9\u05DD, \u05DE\u05D3\u05D5\u05D9\u05E7\u05D9\u05DD \u05D5\u05DB\u05D0\u05DC\u05D5 \u05E9\u05D0\u05DB\u05E4\u05EA \u05DC\u05D4\u05DD \u05D0\u05D9\u05DA \u05D9\u05D5\u05E6\u05D0\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05DC\u05D4\u05DD.";
            this.paragraph8E = "Full management of any safety issue and work procedure versus the office building.";
            this.paragraph9E = "The work is performed in total transparency versus the customer, with ongoing and\n    frequent updates of the progress of the work on the site.";
            this.paragraph10E1 = "\u2713 Performance of all work out of understanding and sensitivity to the requirements of the customer.";
            this.paragraph10E2 = "\u2713 Meeting the schedule.";
            this.paragraph10E3 = "\u2713 Offering full responsibility and liability at the finishing of therenovation.";
            this.paragraph10E4 = "\u2713 Moreover, we guarantee an extremely high level of construction work- a construction experience at a level unknown in Israel.";
            this.paragraph11E = "As a manager, you are no doubt familiar with the difficulties associated with the\n    transfer and setting up of the company offices to a new location. These difficulties\n    are expressed in stalling production and loss of valuable time by diverting your\n    attention from your central occupation to the moving project. The difficulty in\n    planning and performing the move is an additional burden.";
            this.paragraph12E = "Being well aware of the difficulties relocation entails, and out of our desire to assist\n    you in carrying out the move as smoothly and efficiently as possible, we will\n    manage the project of setting up your new offices from the consultation and\n    organization phase to the completion of the relocation. Through full and\n    professional management of the process, our construction and renovation team\n    enables you to maintain your peace of mind and to stay focused on your work.";
            this.paragraph13E = "In Top Design, we are fully committed to the quality of the relocation process from\n    beginning to conclusion. The process of setting up the office is managed in full\n    coordination with the customer and in accordance to his needs, and with full\n    sensitivity to his schedule.";
            this.paragraph14E = "The work is performed in full transparency, while providing frequent and ongoing\n    reports of the progress of the work on the site to the customer.";
            this.paragraph15E = "A good finishing job is a work of art, and it is what will draw out the compliments\n    from your guests. Our finishing crews are precise, excellent and experienced\n    professionals and as such they care about how the outcome of their work.";
            this.paragraph16E = "All construction and renovation work is performed using only the highest quality\n    materials, while meticulously emphasizing the precision of every detail.";
            this.paragraph17E = "Complex and unique decoration work, specialized designs and solutions in plaster,\n    and high-level spatula and paint jobs to ensure your walls will come out perfect and\n    impressive.";
            this.paragraph18E = "Precise tiling and surfacing.";
            this.paragraph19E = "These are the details that will ensure your office is a pleasant work environment.";
            this.paragraph20E = "This is exactly what the commercial construction department of Top Design\n    specializes in.";
            this.paragraph21E = "We like to build success stories.";
            this.paragraph22E = "Leave you construction and renovation needs in our hands- we will take it from\n    there and all you will need to do is confirm\u2026";
        }

        AboutUs.prototype.attached = function attached() {
            this.mainDiv.scrollTop = 0;
        };

        AboutUs.prototype.languageChange = function languageChange() {
            this.hebrew = !this.hebrew;
            this.buttonText = this.buttonText != 'Eng' ? 'Eng' : 'Heb';
        };

        return AboutUs;
    }();
});
define('main-page/main-carousel',["exports"], function (exports) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var MainCarousel = exports.MainCarousel = function MainCarousel() {
      _classCallCheck(this, MainCarousel);

      this.items = [{ src: "src/images/main-carousel/beta-media.jpg" }, { src: "src/images/main-carousel/cellebrite.jpg" }, { src: "src/images/main-carousel/service-now.jpg" }, { src: "src/images/main-carousel/privet-home.jpg" }];
      this.firstItem = 'src/images/main-carousel/daimler.jpg';
   };
});
define('projects/projects',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Projects = exports.Projects = function () {
        function Projects() {
            _classCallCheck(this, Projects);

            this.mainDiv = document.getElementById("mainDiv");
        }

        Projects.prototype.configureRouter = function configureRouter(config, router) {
            this.router = router;
            config.title = 'projects';
            config.map([{ route: '', redirect: 'all-projects' }, { route: 'all-projects', name: 'all-projects', moduleId: './all-projects/all-projects' }, { route: 'alpha-bio', name: 'alpha-bio', moduleId: './alpha-bio/alpha-bio', title: 'Alpha Bio' }, { route: 'akamai', name: 'akamai', moduleId: './akamai/akamai', title: 'Akamai' }, { route: 'beta-media', name: 'beta-media', moduleId: './beta-media/beta-media', title: 'Beta-Media' }, { route: 'cellebrite', name: 'cellebrite', moduleId: './cellebrite/cellebrite', title: 'Cellebrite' }, { route: 'citibank', name: 'citibank', moduleId: './citibank/citibank', title: 'citibank' }, { route: 'daimler', name: 'daimler', moduleId: './daimler/daimler', title: 'דיימלר-מרצדס' }, { route: 'moovit', name: 'moovit', moduleId: './moovit/moovit', title: 'Moovit' }, { route: 'privet-home', name: 'privet-home', moduleId: './privet-home/privet-home', title: 'בתים פרטיים' }, { route: 'service-now', name: 'service-now', moduleId: './service-now/service-now', title: 'service-now' }, { route: 'schindler', name: 'schindler', moduleId: './schindler/schindler', title: 'Schindler' }, { route: 'triple-c', name: 'triple-c', moduleId: './triple-c/triple-c', title: 'Triple C' }]);
        };

        Projects.prototype.attached = function attached() {
            this.mainDiv.scrollTop = 0;
        };

        return Projects;
    }();
});
define('my-carousel/my-carousel',['exports', 'aurelia-framework'], function (exports, _aureliaFramework) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.MyCarousel = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2;

  var MyCarousel = exports.MyCarousel = (_class = function MyCarousel() {
    _classCallCheck(this, MyCarousel);

    _initDefineProp(this, 'firstItem', _descriptor, this);

    _initDefineProp(this, 'items', _descriptor2, this);
  }, (_descriptor = _applyDecoratedDescriptor(_class.prototype, 'firstItem', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, 'items', [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('projects/akamai/akamai',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Akamai = exports.Akamai = function Akamai() {
        _classCallCheck(this, Akamai);

        this.items = [{ src: "src/images/akamai/01.jpg" }, { src: "src/images/akamai/09.jpg" }, { src: "src/images/akamai/10.jpg" }, { src: "src/images/akamai/13.jpg" }, { src: "src/images/akamai/16.jpg" }, { src: "src/images/akamai/17.jpg" }, { src: "src/images/akamai/19.jpg" }, { src: "src/images/akamai/22.jpg" }, { src: "src/images/akamai/23.jpg" }];
        this.firstItem = 'src/images/akamai/08.jpg';
        this.topTitle = "Akamai";
        this.paragraphes = [{ paragraph: "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05EA \u05D7\u05D9\u05D3\u05D5\u05E9 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E5 \u05DC\u05E7\u05D5\u05DE\u05D4 \u05E9\u05DC\u05D9\u05DE\u05D4 \u05D1\u05DE\u05E8\u05DB\u05D6 \u05D4\u05E4\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC Akamai, \u05E9\u05D8\u05D7 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D9\u05E0\u05D5 2000 \u05DE\"\u05E8." }, { paragraph: "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D1\u05D5\u05E6\u05E2\u05D5 \u05E2\u05E4\"\u05D9 \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05EA \u05DE\u05E9\u05D5\u05DB\u05DC\u05DC\u05EA \u05D5\u05DE\u05EA\u05E7\u05D3\u05DE\u05EA \u05D1\u05E1\u05D2\u05E0\u05D5\u05DF '\u05D4\u05D9\u05D9\u05D8\u05E7' \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9, \u05D4\u05D3\u05D1\u05E8 \u05D1\u05D0 \u05DC\u05D9\u05D3\u05D9 \u05D1\u05D9\u05D8\u05D5\u05D9 \u05D1\u05D1\u05D7\u05D9\u05E8\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD, \u05D1\u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1, \u05D1\u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05D4\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D5\u05E9\u05D9\u05DC\u05D5\u05D1 \u05D7\u05DC\u05E7\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05E9\u05D5\u05E0\u05D9\u05DD." }, { paragraph: "\u05DC\u05D0\u05D7\u05E8 \u05E4\u05D9\u05E8\u05D5\u05E7 \u05DB\u05DC \u05D4\u05E7\u05D5\u05DE\u05D4 \u05D5\u05E8\u05D9\u05E7\u05D5\u05E0\u05D4 \u05DE\u05DB\u05DC \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D5\u05D4\u05DE\u05EA\u05E7\u05E0\u05D9\u05DD \u05E9\u05D4\u05D9\u05D5 \u05D1\u05D4. \u05D7\u05D5\u05D3\u05E9 \u05D5\u05E9\u05D5\u05E4\u05E5 \u05D4\u05DE\u05EA\u05D7\u05DD \u05DB\u05D5\u05DC\u05D5 \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA, \u05D0\u05E9\u05E8 \u05D4\u05E9\u05EA\u05DC\u05D1\u05D5 \u05D6\u05D4 \u05D1\u05D6\u05D4 \u05D5\u05D4\u05D1\u05D9\u05D0\u05D5 \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05DE\u05EA\u05D7\u05DD \u05DE\u05E8\u05E9\u05D9\u05DD \u05D5\u05DE\u05D9\u05D5\u05D7\u05D3, \u05DC\u05D3\u05D5\u05D2\u05DE\u05D0 \u05D4\u05E8\u05E6\u05E4\u05D4 \u05DE\u05D5\u05E8\u05DB\u05D1\u05EA \u05DE\u05E9\u05D9\u05DC\u05D5\u05D1\u05D9\u05DD \u05E9\u05DC \u05D1\u05D8\u05D5\u05DF \u05DE\u05D5\u05D7\u05DC\u05E7, \u05E2\u05E5 \u05DB\u05D1\u05D3, \u05E4\u05E8\u05E7\u05D8 \u05D5\u05E9\u05D8\u05D9\u05D7\u05D9\u05DD, \u05D1\u05E0\u05D5\u05E1\u05E3 \u05DC\u05D0\u05DC\u05DE\u05E0\u05D8\u05D9\u05DD \u05DE\u05D1\u05E8\u05D6\u05DC, \u05D5\u05E9\u05D9\u05DC\u05D5\u05D1 \u05E9\u05DC \u05DE\u05D3\u05E8\u05D2\u05D5\u05EA \u05D1\u05E1\u05D2\u05E0\u05D5\u05DF \u05DE\u05EA\u05E7\u05D3\u05DD." }, { paragraph: "\u05D1\u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D5\u05E8\u05DB\u05D1\u05D5\u05EA \u05D4\u05D1\u05D0\u05E0\u05D5 \u05DC\u05D9\u05D3\u05D9 \u05D1\u05D9\u05D8\u05D5\u05D9 \u05D0\u05EA \u05D4\u05D9\u05DB\u05D5\u05DC\u05D5\u05EA \u05D4\u05E0\u05D9\u05D4\u05D5\u05DC\u05D9\u05EA \u05D5\u05D4\u05DE\u05E7\u05E6\u05D5\u05E2\u05D9\u05EA \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4, \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05E9\u05D2\u05EA \u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D5\u05E9\u05DC\u05DE\u05EA \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DC\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7, \u05D0\u05E9\u05E8 \u05E0\u05EA\u05DF \u05D0\u05EA \u05D0\u05D9\u05DE\u05D5\u05E0\u05D5 \u05D1\u05D9\u05DB\u05D5\u05DC\u05EA\u05E0\u05D5 \u05DC\u05D4\u05D1\u05D9\u05D0 \u05DC\u05EA\u05D5\u05E6\u05D0\u05D4 \u05D4\u05DE\u05D1\u05D5\u05E7\u05E9\u05EA." }];
        this.title = "Akamai - \u05E9\u05DC\u05D1 \u05D0', \u05D4\u05E8\u05E6\u05DC\u05D9\u05D4";
    };
});
define('projects/all-projects/all-projects',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var AllProjects = exports.AllProjects = function () {
    function AllProjects() {
      _classCallCheck(this, AllProjects);

      this.items = [{ route: "daimler", src: "src/images/projects/daimler.jpg", projectName: "דיימלר - מרצדס" }, { route: "schindler", src: "src/images/projects/schindler.jpg", projectName: "Schindler" }, { route: "alpha-bio", src: "src/images/projects/alpha-bio.jpg", projectName: "Alpha Bio" }, { route: "akamai", src: "src/images/projects/akamai.jpg", projectName: "Akamai" }, { route: "cellebrite", src: "src/images/projects/cellebrite.jpg", projectName: "Cellebrite" }, { route: "beta-media", src: "src/images/projects/beta-media.jpg", projectName: "Beta Media" }, { route: "citibank", src: "src/images/projects/citibank.jpg", projectName: "Citibank" }, { route: "moovit", src: "src/images/projects/moovit.jpg", projectName: "Moovit" }, { route: "service-now", src: "src/images/projects/service_now.jpg", projectName: "Service Now" }, { route: "triple-c", src: "src/images/projects/tripleC.jpg", projectName: "Triple C" }, { route: "privet-home", src: "src/images/projects/privet-home.jpg", projectName: "בתים פרטיים" }];
    }

    AllProjects.prototype.activate = function activate() {
      if (document.getElementById("mainDiv")) {
        var mainDiv = document.getElementById("mainDiv");
        mainDiv.scrollTop = 0;
      }
    };

    AllProjects.prototype.attached = function attached() {
      this.scrollTop = '0px';
    };

    return AllProjects;
  }();
});
define('projects/alpha-bio/alpha-bio',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var BioAlpha = exports.BioAlpha = function BioAlpha() {
        _classCallCheck(this, BioAlpha);

        this.items = [{ src: "src/images/alpha-bio/01.jpg" }, { src: "src/images/alpha-bio/03.jpg" }, { src: "src/images/alpha-bio/04.jpg" }, { src: "src/images/alpha-bio/05.jpg" }];
        this.firstItem = 'src/images/alpha-bio/02.jpg';
        this.topTitle = "Alpha Bio";
        this.paragraphes = [{ paragraph: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DC\u05D4\u05E8\u05D7\u05D1\u05EA \u05D7\u05D1\u05E8\u05EA Alpha Bio, \u05D0\u05E9\u05E8 \u05DB\u05DC\u05DC\u05D5 \u05D4\u05E8\u05D7\u05D1\u05D4 \u05E9\u05DC \u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4, \u05D5\u05DB\u05DF \u05E9\u05D9\u05E4\u05D5\u05E5 \u05D5\u05E9\u05D3\u05E8\u05D5\u05D2 \u05D1\u05DE\u05E2\u05D1\u05D3\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D4\u05DE\u05EA\u05DE\u05D7\u05D4 \u05D1\u05D9\u05E6\u05D5\u05E8 \u05DE\u05D5\u05E6\u05E8\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05E8\u05E4\u05D5\u05D0\u05EA \u05D4\u05E9\u05E0\u05D9\u05D9\u05DD." }, { paragraph: "\u05D1\u05DE\u05E1\u05D2\u05E8\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05D3\u05E8\u05E9\u05E0\u05D5 \u05DC\u05E9\u05DC\u05D1 \u05D5\u05DC\u05DE\u05D6\u05D2 \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05D7\u05D3\u05E9\u05D9\u05DD \u05D0\u05DC \u05D4\u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05D4\u05E7\u05D9\u05D9\u05DE\u05D9\u05DD, \u05DC\u05E6\u05D5\u05E8\u05DA \u05DB\u05DA \u05E0\u05D3\u05E8\u05E9\u05D4 \u05D4\u05EA\u05D0\u05DE\u05D4 \u05D1\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05D9\u05D6\u05D5\u05D2 \u05D4\u05D7\u05E9\u05DE\u05DC \u05D5\u05DB\u05D3\u05D5' \u05DC\u05DC\u05D0 \u05E4\u05D2\u05D9\u05E2\u05D4 \u05D1\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D4\u05E7\u05D9\u05D9\u05DE\u05D5\u05EA \u05D5\u05DC\u05DC\u05D0 \u05D9\u05E6\u05D9\u05E8\u05EA \u05E2\u05DC\u05D5\u05D9\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05D7\u05D9\u05D3\u05D5\u05E9\u05DD. \u05D2\u05D5\u05D3\u05DC \u05E9\u05D8\u05D7\u05D9 \u05D4\u05DE\u05E9\u05E8\u05D3 \u05E9\u05E0\u05D5\u05E1\u05E4\u05D5 \u05D4\u05D9\u05D4 800 \u05DE\"\u05E8, \u05D5\u05D1\u05D5\u05E6\u05E2\u05D5 \u05D1\u05D5 \u05DB\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D4\u05E0\u05E6\u05E8\u05DB\u05D5\u05EA \u05DC\u05D4\u05E7\u05DE\u05EA \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05D9\u05DD \u05D5\u05E0\u05D5\u05D7\u05D9\u05DD \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9." }, { paragraph: "\u05D4\u05E7\u05E4\u05D3\u05E0\u05D5 \u05DC\u05D4\u05EA\u05D7\u05E9\u05D1 \u05D1\u05E6\u05D5\u05E8\u05DA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05DC\u05E9\u05DE\u05D9\u05E8\u05EA \u05D4\u05E9\u05E7\u05D8 \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA, \u05D5\u05DC\u05DB\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05E8\u05E2\u05D9\u05E9\u05D5\u05EA \u05E0\u05E2\u05E9\u05D5 \u05E8\u05E7 \u05D1\u05E9\u05E2\u05D5\u05EA \u05D4\u05E2\u05E8\u05D1 \u05D5\u05D4\u05DC\u05D9\u05DC\u05D4, \u05DB\u05E9\u05D0\u05E8 \u05D1\u05DE\u05E9\u05DA \u05D4\u05D9\u05D5\u05DD \u05D1\u05D5\u05E6\u05E2\u05D5 \u05E8\u05E7 \u05E2\u05D1\u05D5\u05D3\u05EA \u05E9\u05DC\u05D0 \u05D9\u05E4\u05E8\u05D9\u05E2\u05D5 \u05DC\u05E1\u05D1\u05D9\u05D1\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05E9\u05E7\u05D8\u05D4 \u05D4\u05E0\u05D3\u05E8\u05E9\u05EA \u05D1\u05DE\u05E7\u05D5\u05DD. \u05E2\u05DD \u05D6\u05D0\u05EA \u05D4\u05D3\u05D1\u05E8 \u05DC\u05D0 \u05D2\u05E8\u05DD \u05DC\u05E2\u05D9\u05DB\u05D5\u05D1 \u05D1\u05D6\u05DE\u05E0\u05D9 \u05D4\u05D1\u05D9\u05E6\u05D5\u05E2, \u05D5\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05E0\u05DE\u05E1\u05E8\u05D4 \u05DC\u05DC\u05E7\u05D5\u05D7 \u05DB\u05DE\u05EA\u05D5\u05DB\u05E0\u05DF \u05DC\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05E0\u05D5 \u05D4\u05DE\u05DC\u05D0\u05D4 \u05DE\u05D0\u05D9\u05DB\u05D5\u05EA \u05D4\u05D1\u05D9\u05E6\u05D5\u05E2." }];
        this.title = "Alpha Bio - \u05E7\u05E8\u05D9\u05EA \u05D0\u05E8\u05D9\u05D4, \u05E4\"\u05EA";
    };
});
define('projects/beta-media/beta-media',["exports"], function (exports) {
   "use strict";

   Object.defineProperty(exports, "__esModule", {
      value: true
   });

   function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
         throw new TypeError("Cannot call a class as a function");
      }
   }

   var BetaMedia = exports.BetaMedia = function BetaMedia() {
      _classCallCheck(this, BetaMedia);

      this.items = [{ src: "src/images/beta-media/02.jpg" }, { src: "src/images/beta-media/03.jpg" }, { src: "src/images/beta-media/04.jpg" }];
      this.firstItem = 'src/images/beta-media/01.jpg';
      this.topTitle = "Beta Media";
      this.paragraphes = [{ paragraph: "\u05D1\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05D6\u05D4 \u05D1\u05D5\u05E6\u05E2\u05D4 \u05E2\u05D1\u05D5\u05D3\u05EA \u05E4\u05E0\u05D9\u05DD \u05DE\u05DE\u05E1\u05D3 \u05D5\u05E2\u05D3 \u05D8\u05E4\u05D7\u05D5\u05EA \u05DC\u05DE\u05D1\u05E0\u05D4 \u05D4\u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05E9\u05DC \u05D7\u05D1\u05E8\u05EA \u05D4\u05E4\u05E8\u05E1\u05D5\u05DD \"Beta-Media\", \u05DC\u05E4\u05D9 \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05EA \u05D5\u05DE\u05D2\u05D5\u05D5\u05E0\u05EA \u05E9\u05DC \u05D4\u05D0\u05D3\u05E8\u05D9\u05DB\u05DC\u05D9\u05EA \u05D2\u05DC\u05D9\u05EA \u05D1\u05DF \u05D6\u05E7\u05DF. \u05D4\u05DE\u05E7\u05D5\u05DD \u05D7\u05D5\u05DC\u05E7 \u05DC\u05DE\u05D2\u05D5\u05D5\u05DF \u05D7\u05DC\u05DC\u05D9\u05DD, \u05D4\u05DB\u05D5\u05DC\u05DC\u05D9\u05DD open space \u05E8\u05D7\u05D1 \u05D9\u05D3\u05D9\u05D9\u05DD \u05DC\u05E6\u05D5\u05D5\u05EA \u05D4\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD, \u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05E0\u05D4\u05DC\u05D4 \u05D5\u05D1\u05E7\u05E8\u05D4 \u05D5\u05DB\u05DF \u05D7\u05DC\u05DC\u05D9\u05DD \u05E4\u05EA\u05D5\u05D7\u05D9\u05DD \u05D1\u05E1\u05D2\u05E0\u05D5\u05DF \u05DC\u05D5\u05D1\u05D9 \u05DC\u05D9\u05E9\u05D9\u05D1\u05D5\u05EA \u05E4\u05EA\u05D5\u05D7\u05D5\u05EA \u05D1\u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05E0\u05D9\u05E0\u05D5\u05D7\u05D4." }, { paragraph: "\u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D4\u05EA\u05D0\u05E4\u05D9\u05D9\u05E0\u05D4 \u05D1\u05E9\u05D9\u05DC\u05D5\u05D1 \u05D0\u05DC\u05DE\u05E0\u05D8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05D1\u05E8\u05D9\u05E6\u05D5\u05E3 \u05D5\u05D1\u05EA\u05E7\u05E8\u05D4, \u05DB\u05D2\u05D5\u05DF \"\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D7\u05E9\u05D5\u05E4\u05D5\u05EA\" \u05E9\u05DC \u05D7\u05E9\u05DE\u05DC \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D5\u05DB\u05D9\u05D1\u05D5\u05D9 \u05D0\u05E9, \u05D0\u05E9\u05E8 \u05D4\u05E8\u05DB\u05D1\u05EA\u05DD \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4 \u05DE\u05E9\u05D5\u05D5\u05D4 \u05DC\u05DE\u05E7\u05D5\u05DD \u05DE\u05E8\u05D0\u05D4 \u05DE\u05D5\u05D3\u05E8\u05E0\u05D9 \u05D5\u05D9\u05D9\u05D7\u05D5\u05D3\u05D9. \u05D5\u05DB\u05DF \u05D4\u05E8\u05DB\u05D1\u05EA \u05E8\u05D9\u05D4\u05D5\u05D8 \u05D9\u05D9\u05D7\u05D5\u05D3\u05D9 \u05DC\u05DB\u05DC \u05D0\u05D7\u05D3 \u05DE\u05D7\u05DC\u05E7\u05D9 \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D1\u05D4\u05EA\u05D0\u05DE\u05D4 \u05E1\u05E4\u05E6\u05D9\u05E4\u05D9\u05EA \u05D4\u05DE\u05D5\u05EA\u05D0\u05DE\u05EA \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D4\u05DE\u05E7\u05D5\u05DD." }, { paragraph: "\u05D9\u05E6\u05D5\u05D9\u05DF \u05DB\u05D9 \u05DB\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D0\u05E8\u05DB\u05D4 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05D5\u05D4\u05E1\u05EA\u05D9\u05D9\u05DE\u05D4 \u05DC\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05E0\u05D5 \u05D4\u05DE\u05DC\u05D0\u05D4 \u05E9\u05DC \u05D4\u05DC\u05E7\u05D5\u05D7, \u05E2\u05DC \u05D0\u05E3 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E9\u05D4\u05EA\u05D1\u05E7\u05E9\u05D5 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4." }];
      this.title = "Beta Media \u2013 \u05E8\u05DE\u05EA \u05D2\u05DF";
   };
});
define('projects/citibank/citibank',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Citibank = exports.Citibank = function Citibank() {
        _classCallCheck(this, Citibank);

        this.items = [{ src: "src/images/citibank/06.jpg" }, { src: "src/images/citibank/13.jpg" }, { src: "src/images/citibank/14.jpg" }, { src: "src/images/citibank/15.jpg" }, { src: "src/images/citibank/17.jpg" }];
        this.firstItem = 'src/images/citibank/09.jpg';
        this.topTitle = "Citibank";
        this.paragraphes = [{ paragraph: "\u05D4\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DC\u05D4\u05E8\u05D7\u05D1\u05EA \u05DE\u05E9\u05E8\u05D3\u05D9 \u05E1\u05D9\u05D8\u05D9 \u05D1\u05E0\u05E7 \u05D1\u05E7\u05E8\u05D9\u05EA \u05E2\u05EA\u05D9\u05D3\u05D9\u05DD, \u05D4\u05D9\u05D5\u05D5\u05D4 \u05D0\u05EA\u05D2\u05E8 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05E9\u05DC \u05D4\u05D2\u05D3\u05DC\u05EA \u05D4\u05DE\u05EA\u05D7\u05DD \u05D4\u05E7\u05D9\u05D9\u05DD \u05D5\u05D4\u05E8\u05D7\u05D1\u05EA\u05D5 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E9\u05D9\u05DE\u05D6\u05D2 \u05D0\u05EA \u05D4\u05D7\u05D3\u05E9 \u05E2\u05DD \u05D4\u05D9\u05E9\u05DF \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D8\u05D1\u05E2\u05D9\u05EA. \u05DC\u05E9\u05DD \u05DB\u05DA \u05D4\u05E7\u05E4\u05D3\u05E0\u05D5 \u05E2\u05DC \u05D1\u05D7\u05D9\u05E8\u05EA \u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05E0\u05DB\u05D5\u05E0\u05D4 \u05D5\u05D2\u05D9\u05DE\u05D5\u05E8 \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4 \u05E9\u05D9\u05D8\u05E9\u05D8\u05E9 \u05D0\u05EA \u05D4\u05D2\u05D1\u05D5\u05DC\u05D5\u05EA \u05D1\u05D9\u05DF \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D4\u05D1\u05E1\u05D9\u05E1\u05D9 \u05E9\u05DC \u05D4\u05D1\u05E0\u05E7 \u05DC\u05D1\u05D9\u05DF \u05D4\u05D7\u05DC\u05E7 \u05E9\u05D4\u05EA\u05D5\u05D5\u05E1\u05E3." }, { paragraph: "\u05DB\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05D5\u05E6\u05E2\u05D4 \u05EA\u05D5\u05DA \u05E9\u05DE\u05D9\u05E8\u05D4 \u05E2\u05DC \u05E8\u05E6\u05E3 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05DE\u05DC\u05D0 \u05E9\u05DC \u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05D1\u05E0\u05E7, \u05DC\u05E9\u05DD \u05DB\u05DA \u05E2\u05DE\u05DC\u05E0\u05D5 \u05DC\u05E7\u05E6\u05E8 \u05D0\u05EA \u05DE\u05E9\u05DA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05DC\u05E1\u05D9\u05D9\u05DE\u05D4 \u05D1\u05EA\u05D5\u05DA \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3 \u05D5\u05D6\u05D0\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05D4\u05E4\u05E2\u05DC\u05EA \u05D4\u05E6\u05D5\u05D5\u05EA \u05D4\u05DE\u05D5\u05E8\u05D7\u05D1 \u05EA\u05D2\u05D1\u05D5\u05E8\u05D5 \u05D1\u05DB\u05D7 \u05D0\u05D3\u05DD \u05E0\u05D5\u05E1\u05E3 \u05DC\u05E4\u05D9 \u05D4\u05E6\u05D5\u05E8\u05DA." }, { paragraph: "\u05E7\u05D5\u05D3\u05DD \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05E2\u05E8\u05DB\u05E0\u05D5 \u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DE\u05D3\u05D5\u05E7\u05D3\u05E7\u05EA \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA \u05E6\u05D5\u05D5\u05EA \u05D4\u05DE\u05D5\u05DE\u05D7\u05D9\u05DD \u05D5\u05D4\u05D9\u05D5\u05E2\u05E6\u05D9\u05DD \u05E9\u05DC\u05E0\u05D5, \u05D0\u05E9\u05E8 \u05D4\u05EA\u05D9\u05D9\u05D7\u05E1\u05D4 \u05D1\u05E4\u05E8\u05D5\u05D8 \u05D5\u05D1\u05D9\u05E8\u05D9\u05D3\u05D4 \u05DC\u05E4\u05E8\u05D8\u05D9\u05DD \u05DC\u05D0\u05D5\u05E4\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA, \u05DB\u05DA \u05E9\u05EA\u05E6\u05D5\u05DE\u05E6\u05DD \u05DC\u05DE\u05D9\u05E0\u05D9\u05DE\u05D5\u05DD \u05D4\u05D4\u05E4\u05E8\u05E2\u05D4 \u05D5\u05D4\u05D4\u05D8\u05E8\u05D3\u05D4 \u05DC\u05E2\u05D5\u05D1\u05D3\u05D9 \u05D4\u05DE\u05E7\u05D5\u05DD \u05D1\u05D6\u05DE\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA. \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05EA\u05D5\u05DB\u05E0\u05E0\u05D4 \u05D1\u05D0\u05D5\u05E4\u05DF \u05E9\u05D1\u05E8\u05D5\u05D1 \u05D6\u05DE\u05DF \u05D4\u05E9\u05D9\u05E4\u05D5\u05E5 \u05DC\u05D0 \u05D4\u05D5\u05E8\u05D2\u05E9\u05D4 \u05DB\u05DC\u05DC \u05DB\u05DC \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D7\u05E8\u05D9\u05D2\u05D4 \u05E2\"\u05D9 \u05D1\u05D0\u05D9 \u05D4\u05DE\u05E7\u05D5\u05DD, \u05E2\u05E0\u05D9\u05DF \u05D6\u05D4 \u05D4\u05D5\u05D3\u05D2\u05E9 \u05E2\"\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7 \u05DB\u05E6\u05D5\u05E8\u05DA \u05D7\u05E9\u05D5\u05D1 \u05D1\u05E2\u05D9\u05E0\u05D9\u05D5, \u05E9\u05DC\u05D0 \u05EA\u05D5\u05E4\u05E8\u05E2 \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E9\u05D5\u05D8\u05E4\u05EA \u05E9\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD \u05D1\u05D6\u05DE\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA, \u05D5\u05D0\u05DB\u05DF \u05D4\u05EA\u05D4\u05DC\u05D9\u05DA \u05DB\u05D5\u05DC\u05D5 \u05D4\u05EA\u05E0\u05D4\u05DC \u05DC\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05E0\u05D5, \u05EA\u05D5\u05DA \u05E9\u05D9\u05EA\u05D5\u05E4\u05D5 \u05D1\u05DB\u05DC \u05E9\u05DC\u05D1\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4, \u05D4\u05E7\u05E9\u05D1\u05D4 \u05DC\u05E6\u05E8\u05DB\u05D9\u05D5 \u05D5\u05D0\u05E3 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E9\u05D9\u05E0\u05D5\u05D9\u05D9\u05DD \u05E9\u05D4\u05EA\u05D1\u05E7\u05E9\u05D5 \u05E2\u05DC \u05D9\u05D3\u05D5 \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4." }];
        this.title = "Citibank - \u05E7\u05E8\u05D9\u05D9\u05EA \u05E2\u05EA\u05D9\u05D3\u05D9\u05DD";
    };
});
define('projects/cellebrite/cellebrite',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CelleBrite = exports.CelleBrite = function CelleBrite() {
        _classCallCheck(this, CelleBrite);

        this.items = [{ src: "src/images/cellebrite/02.jpg" }, { src: "src/images/cellebrite/03.jpg" }, { src: "src/images/cellebrite/04.jpg" }, { src: "src/images/cellebrite/05.jpg" }, { src: "src/images/cellebrite/09.jpg" }, { src: "src/images/cellebrite/11.jpg" }, { src: "src/images/cellebrite/12.jpg" }, { src: "src/images/cellebrite/14.jpg" }, { src: "src/images/cellebrite/15.jpg" }, { src: "src/images/cellebrite/16.jpg" }];
        this.firstItem = 'src/images/cellebrite/01.jpg';
        this.title = "Cellebrite - \u05E4\u05D0\u05E8\u05E7 \u05E2\u05D5\u05E4\u05E8, \u05E4\"\u05EA";
        this.paragraphes = [{ paragraph: "\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DC\u05D7\u05D9\u05D3\u05D5\u05E9 \u05D5\u05E9\u05D9\u05E4\u05D5\u05E5 \u05DE\u05E7\u05D9\u05E3 \u05E9\u05DC \u05DE\u05D1\u05E0\u05D4 \u05EA\u05E4\u05E2\u05D5\u05DC\u05D9 \u05E2\u05E0\u05E7 \u05E9\u05DC \u05D7\u05D1\u05E8\u05D4 \u05D4\u05DE\u05E2\u05E0\u05D9\u05E7\u05D4 \u05E9\u05D9\u05E8\u05D5\u05EA\u05D9 \u05DE\u05D7\u05E9\u05D5\u05D1, \u05D4\u05DB\u05D5\u05DC\u05DC \u05D4\u05D7\u05DC\u05E4\u05EA \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D5\u05D7\u05D9\u05D3\u05D5\u05E9 \u05D4\u05DE\u05E8\u05D0\u05D4." }, { paragraph: "\u05D4\u05DE\u05E7\u05D5\u05DD \u05D4\u05D9\u05E0\u05D5 \u05DE\u05D1\u05E0\u05D4 \u05D2\u05D3\u05D5\u05DC \u05E9\u05DC \u05D7\u05DE\u05E9 \u05E7\u05D5\u05DE\u05D5\u05EA \u05E9\u05DB\u05DC \u05D0\u05D7\u05EA \u05DE\u05D4\u05DD \u05DE\u05E9\u05EA\u05E8\u05E2\u05EA \u05E2\u05DC \u05E4\u05E0\u05D9 1500 \u05DE\"\u05E8. \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D1\u05D9\u05E7\u05E9 \u05DC\u05D1\u05E6\u05E2 \u05D7\u05D9\u05D3\u05D5\u05E9 \u05DE\u05D5\u05D7\u05DC\u05D8 \u05E9\u05DC \u05DE\u05E8\u05D0\u05D4 \u05D4\u05DE\u05D1\u05E0\u05D4 \u05D5\u05D4\u05D7\u05DC\u05E4\u05EA \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D4\u05DE\u05E9\u05DA \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4. \u05DB\u05DE\u05D5\"\u05DB \u05E0\u05D3\u05E8\u05E9\u05D4 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DC\u05D4\u05EA\u05D1\u05E6\u05E2 \u05D1\u05E4\u05E8\u05E7 \u05D6\u05DE\u05DF \u05E7\u05E6\u05E8 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05E9\u05DC \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD." }, { paragraph: "\u05D4\u05D3\u05D1\u05E8 \u05D4\u05D9\u05D5\u05D5\u05D4 \u05D0\u05EA\u05D2\u05E8 \u05DE\u05E9\u05DE\u05E2\u05D5\u05EA\u05D9, \u05D5\u05DC\u05E6\u05D5\u05E8\u05DA \u05DB\u05DA \u05D2\u05D5\u05D9\u05E1 \u05E6\u05D5\u05D5\u05EA \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D4\u05D9\u05E7\u05E3 \u05E2\u05E6\u05D5\u05DD \u05E9\u05DC \u05DC\u05DE\u05E2\u05DC\u05D4 \u05DE\u05DE\u05D0\u05D4 \u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D1\u05D5 \u05D6\u05DE\u05E0\u05D9\u05EA, \u05D1\u05DE\u05D2\u05D5\u05D5\u05DF \u05E8\u05D7\u05D1 \u05E9\u05DC \u05EA\u05D7\u05D5\u05DE\u05D9\u05DD \u05D1\u05DE\u05E7\u05D1\u05D9\u05DC \u05D6\u05D4 \u05DC\u05D6\u05D4, \u05E2\u05DD \u05D6\u05D0\u05EA \u05D4\u05D5\u05E7\u05DD \u05E6\u05D5\u05D5\u05EA \u05D7\u05E9\u05D9\u05D1\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3 \u05DC\u05EA\u05D9\u05D0\u05D5\u05DD \u05D0\u05D5\u05E4\u05DF \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA, \u05D1\u05E6\u05D5\u05E8\u05D4 \u05E9\u05DC\u05D0 \u05EA\u05E4\u05E8\u05D9\u05E2 \u05DC\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D1\u05DE\u05D4\u05DC\u05DA \u05D6\u05DE\u05DF \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4. \u05D7\u05E9\u05D9\u05D1\u05D4 \u05DE\u05D9\u05D5\u05D7\u05D3\u05EA \u05E0\u05D9\u05EA\u05E0\u05D4 \u05E2\u05DC \u05D0\u05D5\u05E4\u05DF \u05E4\u05D9\u05E0\u05D5\u05D9 \u05D4\u05E4\u05E1\u05D5\u05DC\u05EA \u05D5\u05D4\u05D1\u05D0\u05EA \u05D4\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05D1\u05D3\u05E8\u05DA \u05E9\u05DC\u05D0 \u05EA\u05E4\u05E8\u05D9\u05E2 \u05D5\u05DC\u05D0 \u05EA\u05D6\u05D9\u05E7 \u05DC\u05E2\u05D5\u05D1\u05D3\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D4\u05E0\u05DE\u05E6\u05D0\u05D9\u05DD \u05D1\u05E9\u05D8\u05D7 \u05D4\u05DE\u05D1\u05E0\u05D4." }];
        this.topTitle = "Cellebrite";
    };
});
define('projects/daimler/daimler',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Daimler = exports.Daimler = function Daimler() {
        _classCallCheck(this, Daimler);

        this.firstItem = 'src/images/daimler/06.jpg';
        this.items = [{ src: "src/images/daimler/02.jpg" }, { src: "src/images/daimler/04.jpg" }, { src: "src/images/daimler/09.jpg" }, { src: "src/images/daimler/10.jpg" }, { src: "src/images/daimler/11.jpg" }, { src: "src/images/daimler/15.jpg" }, { src: "src/images/daimler/01.jpg" }];
        this.topTitle = "\u05D3\u05D9\u05D9\u05DE\u05DC\u05E8 \u05DE\u05E8\u05E6\u05D3\u05E1";
        this.paragraphes = [{ paragraph: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05DC\u05D4\u05E7\u05DE\u05EA \u05DE\u05EA\u05D7\u05DD \u05D0\u05D2\u05E3 \u05D4\u05DE\u05D7\u05E7\u05E8 \u05D5\u05D4\u05E4\u05D9\u05EA\u05D5\u05D7 \u05E9\u05DC \u05D7\u05D1\u05E8\u05EA \u05DE\u05E8\u05E6\u05D3\u05E1 \u05D1\u05D9\u05E9\u05E8\u05D0\u05DC, \u05DB\u05DC\u05DC \u05D0\u05EA \u05DB\u05DC \u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D4\u05E4\u05E0\u05D9\u05DD \u05D1\u05DE\u05EA\u05D7\u05DD \u05D4\u05DE\u05DE\u05D5\u05E7\u05DD \u05D1\u05DE\u05D2\u05D3\u05DC\u05D9 \u05D0\u05DC\u05D5\u05DF \u05D1\u05EA\"\u05D0. \u05DB\u05D9\u05D0\u05D4 \u05DC\u05DE\u05D5\u05EA\u05D2 \u05D4\u05D9\u05D5\u05E7\u05E8\u05EA\u05D9 \u05E9\u05DC \u05DE\u05E8\u05E6\u05D3\u05E1, \u05E0\u05D3\u05E8\u05E9\u05E0\u05D5 \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E8\u05DE\u05EA \u05D2\u05D9\u05DE\u05D5\u05E8 \u05DE\u05D5\u05E7\u05E4\u05D3\u05EA \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05E9\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD." }, { paragraph: "\u05DC\u05E9\u05DD \u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05EA \u05D5\u05DE\u05E8\u05D0\u05D4 \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8 \u05D1\u05D9\u05DF \u05DC\u05D0\u05D5\u05DE\u05D9, \u05E4\u05E2\u05DC\u05E0\u05D5 \u05E2\u05E4\"\u05D9 \u05EA\u05D5\u05DB\u05E0\u05D9\u05D5\u05EA \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E9\u05E0\u05E2\u05E8\u05DB\u05D5 \u05E2\"\u05D9 \u05DE\u05E2\u05E6\u05D1\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05E9\u05DD \u05D1\u05E1\u05D2\u05E0\u05D5\u05E0\u05D5\u05EA \u05DE\u05E2\u05D5\u05E8\u05D1\u05D9\u05DD \u05D5\u05E9\u05D5\u05E0\u05D9\u05DD, \u05EA\u05D5\u05DA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D0\u05DC\u05DE\u05E0\u05D8\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD \u05DB\u05D2\u05D5\u05DF \u05EA\u05E7\u05E8\u05D5\u05EA \u05E2\u05E5, \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D7\u05E9\u05D5\u05E4\u05D5\u05EA, \u05EA\u05E7\u05E8\u05D5\u05EA \u05DE\u05E8\u05D7\u05E4\u05D5\u05EA \u05D5\u05E8\u05D9\u05E6\u05E4\u05EA \u05D1\u05D8\u05D5\u05DF \u05D1\u05E1\u05D2\u05E0\u05D5\u05DF \u05DE\u05D9\u05E7\u05E8\u05D5 \u05D8\u05D5\u05E4\u05D9\u05E0\u05D2 \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9." }, { paragraph: "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D0\u05E8\u05DB\u05D4 \u05DB\u05D7\u05D5\u05D3\u05E9\u05D9\u05D9\u05DD \u05D1\u05DC\u05D1\u05D3, \u05D5\u05DB\u05DC\u05DC\u05D4 \u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05E2\u05DC \u05E9\u05D8\u05D7 \u05E9\u05DC 500 \u05DE\u05D8\u05E8\u05D9\u05DD \u05DB\u05D5\u05DC\u05DC \u05DB\u05DC \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D7\u05E9\u05DE\u05DC \u05D0\u05D9\u05E0\u05E1\u05D8\u05DC\u05E6\u05D9\u05D4 \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D9\u05E8 \u05DB\u05D9\u05D1\u05D5\u05D9 \u05D0\u05E9 \u05D5\u05DB\u05D3\u05D5', \u05D1\u05E0\u05D9\u05D9\u05EA \u05D4\u05E8\u05E6\u05E4\u05D4 \u05DE\u05D7\u05D9\u05E6\u05D5\u05EA \u05D5\u05E7\u05D9\u05E8\u05D5\u05EA \u05E2\u05D3 \u05DC\u05D2\u05DE\u05E8 \u05D4\u05DE\u05D5\u05E9\u05DC\u05DD." }];
        this.title = "\u05D3\u05D9\u05D9\u05DE\u05DC\u05E8 \u05DE\u05E8\u05E6\u05D3\u05E1, \u05DE\u05D2\u05D3\u05DC\u05D9 \u05D0\u05DC\u05D5\u05DF \u05EA\"\u05D0";
    };
});
define('projects/moovit/moovit',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Moovit = exports.Moovit = function Moovit() {
        _classCallCheck(this, Moovit);

        this.items = [{ src: "src/images/moovit/01.jpg" }, { src: "src/images/moovit/07.jpg" }, { src: "src/images/moovit/14.jpg" }, { src: "src/images/moovit/22.jpg" }, { src: "src/images/moovit/23.jpg" }];
        this.firstItem = 'src/images/moovit/10.jpg';
        this.topTitle = "Moovit";
        this.paragraphes = [{ paragraph: "\u05D1\u05D9\u05E6\u05D5\u05E2 \u05E2\u05D1\u05D5\u05D3\u05EA \u05E4\u05E0\u05D9\u05DD \u05DC\u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05D4\u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05D9\u05DD \u05E9\u05DC \u05D7\u05D1\u05E8\u05EA moovit, \u05D1\u05D4\u05D9\u05E7\u05E3 \u05E9\u05DC 950 \u05DE\"\u05E8 \u05D4\u05DE\u05EA\u05E4\u05E8\u05E1\u05D9\u05DD \u05E2\u05DC \u05E4\u05E0\u05D9 \u05E7\u05D5\u05DE\u05D4 \u05D1\u05D1\u05E0\u05D9\u05DF \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05D1\u05E4\u05D0\u05E8\u05E7 \u05D4\u05DE\u05D3\u05E2 \u05D5\u05D4\u05D8\u05E0\u05DC\u05D5\u05D2\u05D9\u05D4 \u05D1\u05E0\u05E1 \u05E6\u05D9\u05D5\u05E0\u05D4. \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D4\u05DE\u05E8\u05D5\u05E6\u05D4 \u05E7\u05D9\u05D1\u05DC \u05D0\u05EA \u05D4\u05EA\u05D5\u05E6\u05E8 \u05D4\u05DE\u05D5\u05E9\u05DC\u05DD \u05DC\u05D0\u05D7\u05E8 \u05E9\u05DC\u05D5\u05E9\u05D4 \u05D7\u05D3\u05E9\u05D9 \u05E2\u05D1\u05D5\u05D3\u05D4 \u05DB\u05E4\u05D9 \u05D4\u05EA\u05DB\u05E0\u05D5\u05DF." }, { paragraph: "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DB\u05DC\u05DC\u05D4 \u05D4\u05E7\u05DE\u05D4 \u05DE\u05D1\u05E8\u05D0\u05E9\u05D9\u05EA \u05E9\u05DC \u05DE\u05E9\u05E8\u05D3\u05D9\u05DD \u05DE\u05EA\u05E7\u05D3\u05DE\u05D9\u05DD \u05D1\u05E2\u05DC\u05D9 \u05D0\u05D5\u05E4\u05D9 \u05D4\u05D9\u05D9\u05D8\u05E7\u05D9\u05E1\u05D8\u05D9 \u05D7\u05D3\u05E9\u05E0\u05D9 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3. \u05D4\u05D9\u05D7\u05D5\u05D3\u05D9\u05D5\u05EA \u05E9\u05DC \u05D4\u05DE\u05E7\u05D5\u05DD \u05DE\u05EA\u05D1\u05D8\u05D0\u05EA \u05D4\u05DF \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E2\u05D9\u05E6\u05D5\u05D1 \u05D5\u05E1\u05D2\u05E0\u05D5\u05DF \u05D4\u05D1\u05E0\u05D9\u05D9\u05D4 \u05D5\u05D4\u05DF \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05DE\u05EA\u05E7\u05D3\u05DE\u05D5\u05EA \u05D5\u05D4\u05D7\u05D3\u05E9\u05E0\u05D9\u05D5\u05EA \u05E9\u05D4\u05D5\u05EA\u05E7\u05E0\u05D5 \u05D1\u05DE\u05E7\u05D5\u05DD." }, { paragraph: "\u05DC\u05E9\u05DD \u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05D7\u05DE\u05D4 \u05D5\u05E2\u05D5\u05D8\u05E4\u05EA, \u05E0\u05E2\u05E9\u05D4 \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05E6\u05D1\u05E2\u05D9\u05DD \u05D5\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05D4\u05DE\u05E2\u05E0\u05D9\u05E7\u05D9\u05DD \u05D7\u05D5\u05DD \u05D5\u05E0\u05E2\u05D9\u05DE\u05D5\u05EA, \u05EA\u05D5\u05DA \u05E9\u05D9\u05DC\u05D5\u05D1 \u05D5\u05D9\u05E6\u05D9\u05E8\u05EA \u05E8\u05E6\u05E3 \u05D1\u05D9\u05DF \u05D7\u05D3\u05E8\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4, \u05DC\u05D1\u05D9\u05DF \u05D7\u05DC\u05DC\u05D9\u05DD \u05E4\u05EA\u05D5\u05D7\u05D9\u05DD \u05D4\u05DE\u05E9\u05DE\u05E9\u05D9\u05DD \u05DB\u05E4\u05D9\u05E0\u05D5\u05EA \u05DE\u05E8\u05D2\u05D5\u05E2. \u05DC\u05E6\u05D5\u05E8\u05DA \u05E9\u05DE\u05D9\u05E8\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05E9\u05DC\u05D5\u05D5\u05D4 \u05D5\u05E8\u05D2\u05D5\u05E2\u05D4 \u05D1\u05E4\u05D9\u05E0\u05D5\u05EA \u05D4\u05D9\u05E9\u05D9\u05D1\u05D4, \u05E0\u05D6\u05E7\u05E7\u05E0\u05D5 \u05DC\u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05D0\u05E7\u05D5\u05E1\u05D8\u05D9\u05D9\u05DD \u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD, \u05DC\u05E9\u05DD \u05DB\u05DA \u05D4\u05E9\u05EA\u05DE\u05E9\u05E0\u05D5 \u05D1\u05D0\u05DC\u05DE\u05E0\u05D8\u05D9\u05DD \u05D9\u05E2\u05D9\u05DC\u05D9\u05DD \u05D5\u05D7\u05DB\u05DE\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05D0\u05E7\u05D5\u05E1\u05D8\u05D9\u05E7\u05D4 \u05EA\u05D5\u05DA \u05D4\u05EA\u05D9\u05D9\u05E2\u05E6\u05D5\u05EA \u05E2\u05DD \u05DE\u05D5\u05DE\u05D7\u05D9\u05DD \u05D1\u05EA\u05D7\u05D5\u05DD \u05D6\u05D4. " }];
        this.title = "Moovit - \u05D1\u05D9\u05EA \u05D0\u05D9\u05DC\u05DF \u05E8\u05DE\u05D5\u05DF \u05E4\u05D0\u05E8\u05E7 \u05D4\u05DE\u05D3\u05E2 \u05E0\u05E1 \u05E6\u05D9\u05D5\u05E0\u05D4";
    };
});
define('projects/privet-home/privet-home',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var PrivetHome = exports.PrivetHome = function PrivetHome() {
        _classCallCheck(this, PrivetHome);

        this.items = [{ src: "src/images/privet-home/02.jpg" }, { src: "src/images/privet-home/03.jpg" }, { src: "src/images/privet-home/04.jpg" }, { src: "src/images/privet-home/04.jpg" }, { src: "src/images/privet-home/05.jpg" }, { src: "src/images/privet-home/06.jpg" }, { src: "src/images/privet-home/07.jpg" }, { src: "src/images/privet-home/08.jpg" }, { src: "src/images/privet-home/09.jpg" }, { src: "src/images/privet-home/10.jpg" }, { src: "src/images/privet-home/11.jpg" }, { src: "src/images/privet-home/12.jpg" }, { src: "src/images/privet-home/13.jpg" }, { src: "src/images/privet-home/14.jpg" }, { src: "src/images/privet-home/15.jpg" }, { src: "src/images/privet-home/16.jpg" }, { src: "src/images/privet-home/17.jpg" }, { src: "src/images/privet-home/18.jpg" }];
        this.firstItem = 'src/images/privet-home/01.jpg';
        this.topTitle = "\u05D1\u05EA\u05D9\u05DD \u05E4\u05E8\u05D8\u05D9\u05D9\u05DD";
        this.paragraphes = [{ paragraph: "" }];
        this.title = undefined;
    };
});
define('projects/project-view/project-view',["exports", "aurelia-framework"], function (exports, _aureliaFramework) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProjectView = undefined;

  function _initDefineProp(target, property, descriptor, context) {
    if (!descriptor) return;
    Object.defineProperty(target, property, {
      enumerable: descriptor.enumerable,
      configurable: descriptor.configurable,
      writable: descriptor.writable,
      value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
    });
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
      desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
      desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
      return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
      desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
      desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
      Object['define' + 'Property'](target, property, desc);
      desc = null;
    }

    return desc;
  }

  function _initializerWarningHelper(descriptor, context) {
    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
  }

  var _desc, _value, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

  var ProjectView = exports.ProjectView = (_class = function () {
    function ProjectView() {
      _classCallCheck(this, ProjectView);

      _initDefineProp(this, "firstPicture", _descriptor, this);

      _initDefineProp(this, "pictures", _descriptor2, this);

      _initDefineProp(this, "paragraphes", _descriptor3, this);

      _initDefineProp(this, "title", _descriptor4, this);

      _initDefineProp(this, "topTitle", _descriptor5, this);

      this.mainDiv = document.getElementById("mainDiv");
    }

    ProjectView.prototype.attached = function attached() {
      this.mainDiv.scrollTop = 0;
    };

    return ProjectView;
  }(), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "firstPicture", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "pictures", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "paragraphes", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "title", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  }), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "topTitle", [_aureliaFramework.bindable], {
    enumerable: true,
    initializer: null
  })), _class);
});
define('projects/schindler/schindler',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Schindler = exports.Schindler = function Schindler() {
        _classCallCheck(this, Schindler);

        this.items = [{ src: "src/images/schindler/02.jpg" }, { src: "src/images/schindler/03.jpg" }, { src: "src/images/schindler/04.jpg" }, { src: "src/images/schindler/06.jpg" }, { src: "src/images/schindler/09.jpg" }, { src: "src/images/schindler/11.jpg" }, { src: "src/images/schindler/15.jpg" }, { src: "src/images/schindler/18.jpg" }];
        this.firstItem = 'src/images/schindler/01.jpg';
        this.topTitle = "\u05E9\u05D9\u05E0\u05D3\u05DC\u05E8 - \u05E0\u05D7\u05D5\u05E9\u05EA\u05DF";
        this.paragraphes = [{ paragraph: "\u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E9\u05D9\u05E4\u05D5\u05E5 \u05DE\u05D1\u05E0\u05D4 \u05D5\u05D4\u05EA\u05D0\u05DE\u05EA\u05D5 \u05DC\u05E9\u05D9\u05DE\u05D5\u05E9 \u05DE\u05E9\u05E8\u05D3\u05D9 \u05D4\u05E0\u05D4\u05DC\u05EA \u05D7\u05D1\u05E8\u05EA \u05E9\u05D9\u05E0\u05D3\u05DC\u05E8 \u05E0\u05D7\u05D5\u05E9\u05EA\u05DF, \u05D4\u05D9\u05E0\u05D5 \u05E4\u05E8\u05D5\u05D9\u05E7\u05D8 \u05E8\u05D7\u05D1 \u05D4\u05D9\u05E7\u05E3 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D1\u05EA\u05D7\u05D5\u05DD \u05D4\u05E9\u05D9\u05E4\u05D5\u05E5. \u05D0\u05E9\u05E8 \u05D4\u05EA\u05E7\u05D9\u05D9\u05DD \u05D1\u05E9\u05E0\u05D9 \u05E9\u05DC\u05D1\u05D9\u05DD." }, { paragraph: "\u05E2\u05DC \u05D0\u05E3 \u05D4\u05D4\u05D9\u05E7\u05E3 \u05D4\u05E0\u05E8\u05D7\u05D1 \u05E9\u05DC \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05E1\u05D9\u05D9\u05DE\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05E4\u05E8\u05E7 \u05D6\u05DE\u05DF \u05E7\u05E6\u05E8 \u05D1\u05D9\u05D5\u05EA\u05E8 \u05E9\u05DC \u05E9\u05DC\u05E9\u05D4 \u05D7\u05D5\u05D3\u05E9\u05D9\u05DD, \u05E9\u05D1\u05E1\u05D9\u05D5\u05DE\u05DD \u05DE\u05E1\u05E8\u05E0\u05D5 \u05DC\u05D9\u05D3\u05D9 \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D0\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05D5\u05D4\u05D5\u05D0 \u05D0\u05D5\u05DB\u05DC\u05E1 \u05D1\u05D0\u05D5\u05E4\u05DF \u05DE\u05DC\u05D0 \u05D5\u05D4\u05EA\u05E7\u05D9\u05D9\u05DE\u05D4 \u05D1\u05D5 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D0\u05D9\u05E0\u05D8\u05E0\u05E1\u05D9\u05D1\u05D9\u05EA \u05E9\u05DC \u05D4\u05D7\u05D1\u05E8\u05D4 \u05E2\u05DD \u05DE\u05D0\u05D5\u05EA \u05D4\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD." }, { paragraph: "\u05DC\u05D0\u05D7\u05E8 \u05E1\u05D9\u05D5\u05DD \u05E9\u05DC\u05D1 \u05D6\u05D4, \u05D4\u05EA\u05E7\u05D3\u05DE\u05E0\u05D5 \u05D0\u05DC \u05D4\u05E9\u05DC\u05D1 \u05D4\u05E9\u05E0\u05D9 \u05E9\u05DC \u05EA\u05D5\u05E1\u05E4\u05EA \u05D1\u05E0\u05D9\u05D4, \u05D0\u05E9\u05E8 \u05DB\u05DC\u05DC\u05D4 \u05D4\u05E7\u05DE\u05EA \u05E9\u05E0\u05D9 \u05E7\u05D5\u05DE\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05DE\u05DE\u05E1\u05D3 \u05D5\u05E2\u05D3 \u05D8\u05E4\u05D7\u05D5\u05EA \u05D1\u05D4\u05D9\u05E7\u05E3 \u05E9\u05DC 1200 \u05DE\u05D8\u05E8. \u05DB\u05DC \u05D6\u05D0\u05EA \u05EA\u05D5\u05DA \u05E7\u05D9\u05D5\u05DD \u05E4\u05EA\u05E8\u05D5\u05E0\u05D5\u05EA \u05E9\u05D9\u05D0\u05E4\u05E9\u05E8\u05D5 \u05D0\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05E9\u05D5\u05D8\u05E4\u05EA \u05D1\u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05E4\u05E2\u05D9\u05DC\u05D5\u05EA, \u05E2\u05E0\u05D9\u05DF \u05D6\u05D4 \u05D4\u05D9\u05D4 \u05DE\u05D0\u05EA\u05D2\u05E8 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D2\u05DD \u05DC\u05E0\u05D5\u05DB\u05D7 \u05D4\u05D9\u05E7\u05E3 \u05D4\u05E2\u05D5\u05D1\u05D3\u05D9\u05DD \u05D4\u05D2\u05D3\u05D5\u05DC \u05E9\u05D4\u05E9\u05EA\u05DE\u05E9 \u05D1\u05D1\u05E0\u05D9\u05D9\u05DF \u05D1\u05DE\u05E9\u05DA \u05DB\u05DC \u05D6\u05DE\u05DF \u05D4\u05D4\u05E8\u05D7\u05D1\u05D4 \u05D5\u05D4\u05E6\u05D5\u05E8\u05DA \u05DC\u05D0\u05E4\u05E9\u05E8 \u05DC\u05D5 \u05D2\u05D9\u05E9\u05D4 \u05D7\u05D5\u05E4\u05E9\u05D9\u05EA \u05D5\u05DE\u05E0\u05D9\u05E2\u05EA \u05D4\u05D8\u05E8\u05D3\u05D5\u05EA \u05E9\u05DC \u05E8\u05E2\u05E9 \u05D5\u05DC\u05DB\u05DC\u05D5\u05DA, \u05D5\u05D2\u05DD \u05DC\u05E0\u05D5\u05DB\u05D7 \u05D4\u05E6\u05D5\u05E8\u05DA \u05D1\u05E9\u05D9\u05DE\u05D5\u05E8 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05D7\u05E9\u05DE\u05DC \u05DE\u05D9\u05D6\u05D5\u05D2 \u05D0\u05D5\u05D5\u05D9\u05E8 \u05D5\u05DB\u05D3\u05D5' \u05EA\u05D5\u05DA \u05DB\u05D3\u05D9 \u05D7\u05D9\u05D1\u05D5\u05E8 \u05D4\u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05E0\u05D5\u05E1\u05E4\u05D5\u05EA \u05DC\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D0\u05DC\u05D5." }];
        this.title = "\u05E9\u05D9\u05E0\u05D3\u05DC\u05E8 \u2013 \u05E0\u05D7\u05D5\u05E9\u05EA\u05DF, \u05E4\"\u05EA";
    };
});
define('projects/service-now/service-now',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ServiceNow = exports.ServiceNow = function ServiceNow() {
        _classCallCheck(this, ServiceNow);

        this.items = [{ src: "src/images/service-now/02.jpg" }, { src: "src/images/service-now/03.jpg" }, { src: "src/images/service-now/05.jpg" }, { src: "src/images/service-now/07.jpg" }, { src: "src/images/service-now/08.jpg" }, { src: "src/images/service-now/09.jpg" }, { src: "src/images/service-now/10.jpg" }, { src: "src/images/service-now/12.jpg" }];
        this.firstItem = 'src/images/service-now/11.jpg';
        this.topTitle = "Service-now";
        this.paragraphes = [{ paragraph: "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DB\u05DC\u05DC\u05D4 \u05E9\u05D9\u05E4\u05D5\u05E5 \u05DE\u05E7\u05D9\u05E3 \u05DE\u05DF \u05D4\u05D9\u05E1\u05D5\u05D3 \u05E9\u05DC \u05DE\u05EA\u05D7\u05DD \u05D4\u05DE\u05EA\u05E4\u05E8\u05E1 \u05E2\u05DC 2000 \u05DE\"\u05E8 \u05D1\u05DE\u05E4\u05DC\u05E1 \u05D0\u05D7\u05D3. \u05DC\u05E6\u05D5\u05E8\u05DA \u05D4\u05E7\u05DE\u05EA \u05DE\u05E8\u05DB\u05D6 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05DC\u05D7\u05D1\u05E8\u05EA \u05D4\u05D9\u05D9- \u05D8\u05E7 \u05D7\u05D3\u05E9\u05E0\u05D9\u05EA \u05D5\u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05EA. \u05DE\u05D6\u05DE\u05D9\u05DF \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D9\u05E0\u05D5 \u05D7\u05D1\u05E8\u05EA \u05D4\u05D9\u05D9\u05D8\u05E7 \u05DE\u05D0\u05E8\u05D4\"\u05D1 \u05D0\u05E9\u05E8 \u05D1\u05D9\u05E7\u05E9\u05D4 \u05DC\u05E7\u05D1\u05DC \u05DE\u05D5\u05E6\u05E8 \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D9\u05DE\u05D5\u05E8 \u05D2\u05D1\u05D5\u05D4 \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05D5\u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05E9\u05D0\u05D9\u05E0\u05DD \u05DE\u05E7\u05D5\u05D1\u05DC\u05D9\u05DD \u05D1\u05D0\u05E8\u05E5." }, { paragraph: "\u05E2\u05DC \u05E4\u05D9 \u05D7\u05D6\u05D5\u05DF \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D4\u05D3\u05D5\u05D2\u05DC \u05D1\u05DE\u05D9\u05DC\u05D5\u05D9 \u05E8\u05E6\u05D5\u05DF \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D1\u05DB\u05DC \u05DE\u05D7\u05D9\u05E8, \u05D1\u05D9\u05E6\u05E2\u05E0\u05D5 \u05D0\u05EA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05D4\u05DE\u05D9\u05D5\u05D7\u05D3\u05D5\u05EA \u05DC\u05E9\u05D1\u05D9\u05E2\u05D5\u05EA \u05E8\u05E6\u05D5\u05E0\u05D5 \u05E9\u05DC \u05D4\u05DE\u05D6\u05DE\u05D9\u05DF. \u05D4\u05E2\u05D1\u05D3\u05D5\u05EA \u05D4\u05D7\u05DC\u05D5 \u05DE\u05E7\u05D1\u05DC\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05D5\u05E4\u05D9\u05E0\u05D5\u05D9\u05D5 \u05D4\u05DE\u05D5\u05D7\u05DC\u05D8 \u05DE\u05DB\u05DC \u05D7\u05E4\u05E5 \u05D5\u05E1\u05D9\u05DC\u05D5\u05E7 \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D4\u05D9\u05E9\u05E0\u05D5\u05EA, \u05D4\u05DE\u05E9\u05DA \u05D1\u05D4\u05E7\u05DE\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05DE\u05D7\u05D3\u05E9 \u05E2\u05DC \u05DB\u05DC \u05D4\u05E0\u05E6\u05E8\u05DA, \u05D1\u05E0\u05D9\u05D9\u05EA \u05E7\u05D9\u05E8\u05D5\u05EA \u05DC\u05D7\u05DC\u05D5\u05E7\u05EA \u05D4\u05DE\u05E7\u05D5\u05DD \u05E2\u05E4\"\u05D9 \u05D4\u05EA\u05D5\u05DB\u05E0\u05D9\u05EA \u05D5\u05D4\u05E7\u05DE\u05EA \u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05D7\u05D3\u05E9\u05D5\u05EA \u05D5\u05DE\u05D5\u05D3\u05E8\u05E0\u05D9\u05D5\u05EA \u05D1\u05E8\u05DE\u05D4 \u05D2\u05D1\u05D5\u05D4\u05D4, \u05D5\u05DB\u05DC\u05D4 \u05D1\u05D2\u05D9\u05DE\u05D5\u05E8 \u05DE\u05D5\u05E7\u05E4\u05D3 \u05D5\u05DE\u05D4\u05D5\u05E7\u05E6\u05E2 \u05EA\u05D5\u05DA \u05E9\u05D9\u05DE\u05D5\u05E9 \u05D1\u05D7\u05D5\u05DE\u05E8\u05D9\u05DD \u05DE\u05E9\u05D5\u05D1\u05D7\u05D9\u05DD \u05D5\u05DE\u05D9\u05D5\u05D7\u05D3\u05D9\u05DD, \u05DC\u05D9\u05E6\u05D9\u05E8\u05EA \u05D0\u05D5\u05D5\u05D9\u05E8\u05D4 \u05D4\u05D9\u05D9\u05D8\u05E7\u05D9\u05E1\u05D8\u05D9\u05EA \u05D9\u05D5\u05E7\u05E8\u05EA\u05D9\u05EA \u05D5\u05E0\u05D5\u05E6\u05E6\u05EA." }];
        this.title = "Service-now \u05E4\u05EA\u05D7 \u05EA\u05E7\u05D5\u05D4";
    };
});
define('projects/triple-c/triple-c',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var TreepleC = exports.TreepleC = function TreepleC() {
        _classCallCheck(this, TreepleC);

        this.firstItem = 'src/images/triple-c/01.jpg';
        this.items = [{ src: "src/images/triple-c/02.jpg" }, { src: "src/images/triple-c/04.jpg" }, { src: "src/images/triple-c/05.jpg" }, { src: "src/images/triple-c/09.jpg" }];
        this.topTitle = "Triple C";
        this.paragraphes = [{ paragraph: "\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DC\u05D4\u05E7\u05DE\u05EA \u05D7\u05D5\u05D5\u05EA \u05E9\u05E8\u05EA\u05D9 \u05DE\u05D7\u05E9\u05D1 [data center] \u05DC\u05D7\u05D1\u05E8\u05EA \u05D4\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD \u05D4\u05D2\u05D3\u05D5\u05DC\u05D4 Triple C  \u05D1\u05D4\u05D9\u05E7\u05E3 \u05E9\u05DC 500 \u05DE\"\u05E8. \u05DE\u05D9\u05E7\u05D5\u05DD \u05D7\u05D5\u05D5\u05EA \u05D4\u05E9\u05E8\u05EA\u05D9\u05DD \u05D4\u05D9\u05E0\u05D5 \u05D1\u05E7\u05D5\u05DE\u05EA \u05DE\u05E8\u05EA\u05E3 \u05D4\u05DE\u05E6\u05D5\u05D9\u05D4 \u05E9\u05EA\u05D9 \u05E7\u05D5\u05DE\u05D5\u05EA \u05DE\u05EA\u05D7\u05EA \u05DC\u05E4\u05E0\u05D9 \u05D4\u05E7\u05E8\u05E7\u05E2. \u05DE\u05D9\u05E7\u05D5\u05DD \u05D6\u05D4 \u05D4\u05E6\u05D9\u05D1 \u05D1\u05E4\u05E0\u05D9\u05E0\u05D5 \u05D0\u05EA\u05D2\u05E8 \u05D1\u05E2\u05EA \u05D1\u05D9\u05E6\u05D5\u05E2 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05EA\u05D5\u05DA \u05D4\u05D2\u05D1\u05DC\u05D4 \u05D1\u05E9\u05D9\u05E0\u05D5\u05E2 \u05D7\u05D5\u05DE\u05E8\u05D9 \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D5\u05D9\u05E6\u05D9\u05E7\u05D5\u05EA \u05D4\u05D1\u05D8\u05D5\u05DF, \u05D1\u05D7\u05E9\u05D9\u05D1\u05D4 \u05DE\u05E8\u05D5\u05D1\u05D4 \u05D5\u05D9\u05E6\u05D9\u05E8\u05EA\u05D9\u05D5\u05EA \u05D4\u05EA\u05D2\u05D1\u05E8\u05E0\u05D5 \u05E2\u05DC \u05E7\u05D5\u05E9\u05D9 \u05D6\u05D4, \u05D5\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D1\u05D5\u05E6\u05E2\u05D4 \u05D1\u05E6\u05D5\u05E8\u05D4 \u05D7\u05DC\u05E7\u05D4." }, { paragraph: "\u05DC\u05D0\u05D5\u05E8 \u05D1\u05E7\u05E9\u05EA \u05D4\u05DC\u05E7\u05D5\u05D7 \u05D4\u05EA\u05D7\u05D9\u05D9\u05D1\u05E0\u05D5 \u05E9\u05D4\u05E2\u05D1\u05D5\u05D3\u05D5\u05EA \u05DC\u05D0 \u05D9\u05D4\u05D5\u05D5 \u05D4\u05E4\u05E8\u05E2\u05D4 \u05D0\u05D5 \u05DE\u05D8\u05E8\u05D3 \u05DC\u05E2\u05D5\u05D1\u05D3\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D1\u05E9\u05D5\u05DD \u05E9\u05DC\u05D1, \u05D5\u05DB\u05DA \u05D4\u05EA\u05E7\u05D9\u05D9\u05DE\u05D4 \u05E4\u05E2\u05D9\u05DC\u05D5\u05EA \u05DE\u05DC\u05D0\u05D4 \u05E9\u05DC \u05DE\u05D0\u05D5\u05EA \u05E2\u05D5\u05D1\u05D3\u05D9 \u05D4\u05D7\u05D1\u05E8\u05D4 \u05D1\u05E9\u05D0\u05E8 \u05E7\u05D5\u05DE\u05D5\u05EA \u05D4\u05D1\u05E0\u05D9\u05D9\u05DF \u05D1\u05DE\u05E7\u05D1\u05DC \u05DC\u05E2\u05D1\u05D5\u05D3\u05D4 \u05D4\u05D0\u05D9\u05E0\u05D8\u05E0\u05E1\u05D9\u05D1\u05D9\u05EA \u05D5\u05DE\u05D4\u05D9\u05E8\u05D4 \u05D0\u05E9\u05E8 \u05D4\u05EA\u05D1\u05E6\u05E2\u05D4 \u05D1\u05E7\u05D5\u05DE\u05EA \u05D4\u05DE\u05E8\u05EA\u05E3. " }, { paragraph: "\u05D1\u05D5\u05E6\u05E2\u05D4 \u05E2\u05D1\u05D5\u05D3\u05EA \u05E4\u05E0\u05D9\u05DD \u05DB\u05D5\u05DC\u05DC\u05EA, \u05DB\u05D0\u05E9\u05E8 \u05E7\u05D9\u05D1\u05DC\u05E0\u05D5 \u05D0\u05EA \u05D4\u05D0\u05EA\u05E8 \u05DB\u05E9\u05DC\u05D3 \u05E8\u05D9\u05E7, \u05D5\u05D4\u05D5\u05E7\u05DE\u05D5 \u05D1\u05D5 \u05DB\u05DC \u05D4\u05EA\u05E9\u05EA\u05D9\u05D5\u05EA \u05DB\u05D2\u05D5\u05DF \u05DE\u05E2\u05E8\u05DB\u05D5\u05EA \u05D4\u05D0\u05D9\u05E0\u05E1\u05D8\u05DC\u05E6\u05D9\u05D4 \u05D5\u05D4\u05D7\u05E9\u05DE\u05DC \u05D1\u05E1\u05D8\u05E0\u05D3\u05E8\u05D8\u05D9\u05DD \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3 \u05DC\u05E9\u05DD \u05D4\u05D1\u05D8\u05D7\u05EA \u05E9\u05DC\u05DE\u05D5\u05EA \u05D5\u05EA\u05E7\u05D9\u05E0\u05D5\u05EA \u05D4\u05DE\u05D7\u05E9\u05D1\u05D9\u05DD, \u05D3\u05D1\u05E8 \u05D4\u05DE\u05E6\u05E8\u05D9\u05DA \u05EA\u05E7\u05E0\u05D9 \u05D1\u05D8\u05D9\u05D7\u05D5\u05EA \u05D5\u05D0\u05D9\u05DB\u05D5\u05EA \u05D2\u05D1\u05D5\u05D4\u05D9\u05DD \u05D1\u05DE\u05D9\u05D5\u05D7\u05D3." }, { paragraph: "\u05D4\u05E2\u05D1\u05D5\u05D3\u05D4 \u05DB\u05DC\u05DC\u05D4 \u05D1\u05E0\u05D9\u05D9\u05EA \u05E8\u05D9\u05E6\u05E4\u05D4 \u05E6\u05E4\u05D4, \u05DE\u05D7\u05D9\u05E6\u05D5\u05EA \u05D6\u05DB\u05D5\u05DB\u05D9\u05EA \u05DE\u05E8\u05D7\u05E4\u05D5\u05EA, \u05D4\u05E7\u05DE\u05EA \u05DE\u05D7\u05D9\u05E6\u05D5\u05EA \u05E7\u05D1\u05D5\u05E2\u05D5\u05EA \u05D5\u05DE\u05D7\u05D9\u05E6\u05D5\u05EA \u05D2\u05D1\u05E1, \u05DC\u05D0\u05D7\u05E8 45 \u05D9\u05D5\u05DD \u05D1\u05DC\u05D1\u05D3, \u05E9\u05D4\u05D9\u05D5 \u05DE\u05DC\u05D0\u05D9\u05DD \u05D1\u05EA\u05D5\u05DB\u05DF \u05D5\u05D9\u05E6\u05D9\u05E8\u05EA\u05D9\u05D5\u05EA \u05DC\u05E4\u05EA\u05E8\u05D5\u05DF \u05D1\u05E2\u05D9\u05D5\u05EA \u05D5\u05D0\u05EA\u05D2\u05E8\u05D9\u05DD \u05E9\u05E2\u05DC\u05D5 \u05D1\u05DE\u05E9\u05DA \u05D4\u05E2\u05D1\u05D5\u05D3\u05D4, \u05E0\u05EA\u05E7\u05D1\u05DC\u05D4 \u05D1\u05E1\u05D9\u05E4\u05D5\u05E7 \u05EA\u05D5\u05E6\u05D0\u05D4 \u05DE\u05D5\u05E7\u05E4\u05D3\u05EA \u05D5\u05DE\u05D5\u05E9\u05DC\u05DE\u05EA." }];
        this.title = "Triple C - \u05E7\u05E8\u05D9\u05D9\u05EA \u05DE\u05D8\u05DC\u05D5\u05DF \u05E4\"\u05EA";
    };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"./main-page/main-carousel.html\"></require><require from=\"./bottom-page/bottom-page.html\"></require><require from=\"./contact-us/contact-us\"></require><div id=\"mainDiv\" class=\"h-100\"><router-view class=\"h-100\"></router-view><bottom-page></bottom-page></div><contact-us></contact-us></template>"; });
define('text!bottom-page/bottom-page.html', ['module'], function(module) { module.exports = "<template><div class=\"top-background\"><div class=\"dropdown-divider mx-5\"></div><div class=\"row d-flex justify-content-around mx-5 py-2\"><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\" for=\"test\">טופ דיזיין בניה והשקעות</span></div><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\"><i class=\"material-icons m-1\">phonelink_ring</i>052-8592-690</span></div><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\"><i class=\"material-icons m-1\">phone</i>03-5094729</span></div><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\"><i class=\"material-icons m-1\">print</i>03-5094732</span></div><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\"><i class=\"material-icons m-1\">mail_outline</i>office@top-d.co.il</span></div><div class=\"p-1 top-font\"><span class=\"customfont d-flex flex-wrap justify-content-center align-items-center\" for=\"address\"><i class=\"material-icons\">location_on</i>המפלסים 4, פתח תקווה</span></div></div></div></template>"; });
define('text!head-page-new/head-page-new.html', ['module'], function(module) { module.exports = "<template><div class=\"d-flex pt-2 justify-content-between top-background-transparent\"><nav class=\"navbar navbar-expand-md\"><button class=\"navbar-toggler custom-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbar\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon top-font\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbar\"><ul class=\"navbar-nav ml-auto mt-2 mt-md-0 top-direction-r\"><li class=\"nav-item active\"><a class=\"nav-link text-right customfont top-font\" route-href=\"route: main;\" href=\"#\">דף הבית <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link text-right customfont top-font\" route-href=\"route: projects;\" href=\"#\">הפרוייקטים שלנו</a></li><li class=\"nav-item\"><a class=\"nav-link text-right customfont top-font\" route-href=\"route: about-us;\" href=\"#\">אודותנו</a></li><li class=\"nav-item\"><a class=\"nav-link text-right customfont top-font\" data-toggle=\"modal\" data-target=\"#contactUs\" href=\"#\">צור קשר</a></li></ul></div></nav><div class=\"p-2 d-block\"><img class=\"m-auto d-block w-75\" src=\"src/images/main-carousel/koteret.png\" alt=\"\"></div><div class=\"p-2 d-block-inline\"><a class=\"navbar-brand\" route-href=\"route: main;\" href=\"#\"><img class=\"mx-auto d-block w-75\" src=\"src/images/logo/logo.png\" alt=\"\"></a></div></div></template>"; });
define('text!contact-us/contact-us.html', ['module'], function(module) { module.exports = "<template><div class=\"modal fade\" id=\"contactUs\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header d-flax flex-nowrap\"><button type=\"button\" class=\"close order-2\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button><h5 class=\"modal-title order-1 text-center w-100 d-flex\">צור קשר</h5></div><div class=\"modal-body\"><div class=\"form-group\"><label class=\"float-right\" for=\"contactAsName\">שם פרטי</label><input class=\"form-control\" value.bind=\"privetName\"></div><div class=\"form-group\"><label class=\"float-right\" for=\"contactAsFamily\">שם משפחה</label><input class=\"form-control\" value.bind=\"familyName\"></div><div class=\"form-group\"><label class=\"float-right\" for=\"contactAsEmail\">כתובת מייל</label><input type=\"email\" class=\"form-control\" value.bind=\"mailAddress\" placeholder=\"mail@example.com\"></div><div class=\"form-group\"><label class=\"float-right\" for=\"contactAsEmail\">טלפון</label><input type=\"number\" class=\"form-control float-right\" value.bind=\"phone\" placeholder=\"הכנס מס' טלפון\"></div><div class=\"form-group\"><label class=\"float-right\" for=\"contactAsTreeText\">תוכן הפניה</label><textarea type=\"number\" class=\"form-control float-right\" value.bind=\"freeText\" row=\"3\"></textarea></div></div><div class=\"modal-footer row d-flex justify-content-between\"><span class=\"d-flex flex-wrap justify-content-center align-items-center\"><i class=\"material-icons m-1\">phonelink_ring</i>052-8592-690</span> <span class=\"d-flex flex-wrap justify-content-center align-items-center\" for=\"address\"><i class=\"material-icons\">location_on</i>המפלסים 4, פתח תקווה</span> <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" click.delegate=\"sendCustomerInformation()\">שלח פרטים</button></div></div></div></div></template>"; });
define('text!about-us/about-us.html', ['module'], function(module) { module.exports = "<template><require from=\"../head-page-new/head-page-new.html\"></require><head-page-new></head-page-new><div class=\"container-fluid\"><div class=\"container-fluid w-100\"><div class=\"row mt-2\"><div class=\"col-11\"><h1 class=\"customfont-bold top-gold text-center mb-5\" if.bind=\"hebrew\">${titleH1}</h1><h1 class=\"customfont-bold top-gold text-center mb-5\" if.bind=\"!hebrew\">${titleH1E}</h1></div><div class=\"col-1\"><button type=\"button\" class=\"rounded-circle btn btn-dark top-gold\" click.delegate=\"languageChange()\">${buttonText}</button></div></div></div><div class=\"row mx-5 d-flex justify-content-center\"><div class=\"col-md-5 my-3\" if.bind=\"hebrew\"><h5 class=\"customfont-bold top-gold text-right\">${title1H5}</h5><p class=\"top-gold text-right\">${paragraph1}</p><h5 class=\"customfont-bold top-gold text-right\">${title2H5}</h5><p class=\"top-gold text-right\">${Paragraph2}</p><p class=\"top-gold text-right\">${paragraph3}</p><h5 class=\"customfont-bold top-gold text-right\">${title3H5}</h5><p class=\"top-gold text-right\">${paragraph4}</p><p class=\"top-gold text-right\">${paragraph5}</p><p class=\"top-gold text-right\">${paragraph6}</p><p class=\"top-gold text-right\">${paragraph7}</p><p class=\"top-gold text-right\">${paragraph8}</p></div><div class=\"col-7 my-3\"><div class=\"row justify-content-center h-100\"><div repeat.for=\"item of logos\" class=\"col-md-4 my-2 justify-content-center\"><img src.bind=\"item.src\" alt=\"Lights\" class=\"d-block m-auto mw-100\" style=\"\"></div></div></div><div class=\"col-md-5 my-3 top-direction\" if.bind=\"!hebrew\"><h5 class=\"top-direction-l customfont-bold top-gold\">${title1H5E}</h5><p class=\"top-direction-l top-gold\">${paragraph1E}</p><h5 class=\"top-direction-l customfont-bold top-gold\">${title2H5E}</h5><p class=\"top-direction-l top-gold\">${Paragraph2E}</p><p class=\"top-direction-l top-gold\">${Paragraph2E2}</p><p class=\"top-direction-l top-gold\">${paragraph3E}</p><h5 class=\"top-direction-l customfont-bold top-gold\">${title3H5E}</h5><p class=\"top-direction-l top-gold\">${paragraph4E}</p><p class=\"top-direction-l top-gold\">${paragraph5E}</p><p class=\"top-direction-l top-gold\">${paragraph6E}</p><p class=\"top-direction-l top-gold\">${paragraph7E}</p><p class=\"top-direction-l top-gold\">${paragraph8E}</p><p class=\"top-direction-l top-gold\">${paragraph9E}</p><p class=\"top-direction-l top-gold\">${paragraph10E1}</p><p class=\"top-direction-l top-gold\">${paragraph10E2}</p><p class=\"top-direction-l top-gold\">${paragraph10E3}</p><p class=\"top-direction-l top-gold\">${paragraph10E4}</p><p class=\"top-direction-l top-gold\">${paragraph11E}</p><p class=\"top-direction-l top-gold\">${paragraph12E}</p><p class=\"top-direction-l top-gold\">${paragraph13E}</p><p class=\"top-direction-l top-gold\">${paragraph14E}</p><p class=\"top-direction-l top-gold\">${paragraph15E}</p><p class=\"top-direction-l top-gold\">${paragraph16E}</p><p class=\"top-direction-l top-gold\">${paragraph17E}</p><p class=\"top-direction-l top-gold\">${paragraph18E}</p><p class=\"top-direction-l top-gold\">${paragraph19E}</p><p class=\"top-direction-l top-gold\">${paragraph20E}</p><p class=\"top-direction-l top-gold\">${paragraph21E}</p><p class=\"top-direction-l top-gold\">${paragraph22E}</p></div></div></div></template>"; });
define('text!main-page/main-carousel.html', ['module'], function(module) { module.exports = "<template><require from=\"../head-page-new/head-page-new.html\"></require><div class=\"h-100\"><div class=\"fixed-top\"><head-page-new></head-page-new></div><div id=\"carouselExampleIndicators\" class=\"d-flex carousel slide h-100 w-100\" data-ride=\"carousel\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li></ol><div class=\"carousel-inner h-100\"><div class=\"carousel-item active h-100\"><img class=\"d-block w-100 h-100\" src.bind=\"firstItem\" alt=\"First slide\"></div><div repeat.for=\"item of items\" class=\"carousel-item h-100\"><img class=\"d-block w-100 h-100\" src.bind=\"item.src\" alt=\"Second slide\"></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span></a></div></div></template>"; });
define('text!my-carousel/my-carousel.html', ['module'], function(module) { module.exports = "<template><div id=\"carouselExampleControls\" class=\"d-flex carousel slide px-5 h-100 w-75\" data-ride=\"carousel\"><div class=\"carousel-inner h-100\"><div class=\"carousel-item h-100 active\"><img class=\"d-block w-100 h-100\" src.bind=\"firstItem\" alt=\"First slide\"></div><div repeat.for=\"item of items\" class=\"carousel-item h-100\"><img class=\"d-block w-100 h-100\" src.bind=\"item.src\" alt=\"Second slide\"></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a><a class=\"carousel-control-next\" href=\"#carouselExampleControls\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span></a></div></template>"; });
define('text!projects/projects.html', ['module'], function(module) { module.exports = "<template><router-view></router-view></template>"; });
define('text!images/cellebrite/celle-birte.html', ['module'], function(module) { module.exports = "<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width,initial-scale=1\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Document</title></head><body></body></html>"; });
define('text!projects/beta-media/beta-media.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/all-projects/all-projects.html', ['module'], function(module) { module.exports = "<template><require from=\"../../head-page-new/head-page-new.html\"></require><div class=\"d-flex flex-column\"><head-page-new id=\"test\"></head-page-new><div class=\"d-flex flex-column\"><div class=\"row justify-content-center mx-5 scrollbar\" id=\"style-scrollbar\"><a repeat.for=\"item of items\" route-href=\"route.bind: item.route\" href=\"#\" class=\"col-md-4 min-height p-3 d-flex flex-column\"><div class=\"make-span-big col d-flex justify-content-center px-0\"><div class=\"mw-100 d-flex justify-content-center flex-column\"><img src.bind=\"item.src\" alt=\"Lights\" class=\"d-block mw-100\"><div class=\"position-relative\"><span class=\"project-span-text customfont-bold top-font text-center\">${item.projectName}</span></div></div></div></a></div></div></div></template>"; });
define('text!projects/akamai/akamai.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/alpha-bio/alpha-bio.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/citibank/citibank.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/daimler/daimler.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/cellebrite/cellebrite.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/moovit/moovit.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/privet-home/privet-home.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/project-view/project-view.html', ['module'], function(module) { module.exports = "<template><require from=\"../../head-page-new/head-page-new.html\"></require><div class=\"d-flex flex-column h-100\"><head-page-new></head-page-new><h2 class=\"customfont-bold text-center top-gold mb-3\">${topTitle}</h2><div id=\"carousel\" class=\"d-flex carousel slide container-fluid pb-2\" data-ride=\"carousel\"><div class=\"carousel-inner mh-100\"><div class=\"carousel-item active h-100\"><img class=\"d-block mx-auto img-fluid\" src.bind=\"firstPicture\" alt=\"First slide\"></div><div repeat.for=\"item of pictures\" class=\"carousel-item h-100\"><img class=\"d-block mx-auto img-fluid\" src.bind=\"item.src\" alt=\"Second slide\"></div><div if.bind=\"title\" class=\"text-box-info w-25\" id=\"style-scrollbar\"><h3 class=\"customfont-bold text-center top-direction-r m-3\">${title}</h3><article><p repeat.for=\"item of paragraphes\" class=\"text-right top-direction-r m-2\">${item.paragraph}</p></article></div></div><a class=\"carousel-control-prev\" href=\"#carousel\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Previous</span> </a><a class=\"carousel-control-next\" href=\"#carousel\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span></a></div></div></template>"; });
define('text!projects/schindler/schindler.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/service-now/service-now.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
define('text!projects/triple-c/triple-c.html', ['module'], function(module) { module.exports = "<template><require from=\"../project-view/project-view\"></require><project-view first-picture.bind=\"firstItem\" pictures.bind=\"items\" paragraphes.bind=\"paragraphes\" top-title.bind=\"topTitle\" title.bind=\"title\"></project-view></template>"; });
//# sourceMappingURL=app-bundle.js.map