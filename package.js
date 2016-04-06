'use strict';

var packageName = 'enzoglauber:ui-bootstrap';
var where = 'client'; // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
    name: packageName,
    summary: 'Version 1.3.1 - ui-bootstrap',
    version: "1.3.1", //packageJson.version,
    git: 'https://github.com/enzoglauber/ui-bootstrap'
});

Package.onUse(function(api) {
    api.versionsFrom(['METEOR@0.9.0','METEOR@1.0','METEOR@1.2']);
   
    api.use(['angular@1.3.9_2'], where);
    api.use(['angular:angular-animate@1.5.3_1'], where);
    api.use(['angular:angular-touch@1.5.3_1'], where);
   
    api.addFiles(['js/ui-bootstrap-tpls.min.js'], where);
});

Package.onTest(function(api) {
    api.use(packageName, where);
    api.use(['webapp'], where);
});