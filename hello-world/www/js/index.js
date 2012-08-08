var app = {
    initialize: function() {
        this.bind();
    },
    bind: function() {
        document.addEventListener('deviceready', this.deviceready, false);
    },
    deviceready: function() {
        // note that this is an event handler so the scope is that of the event
        // so we need to call app.report(), and not this.report()
        app.report('deviceready');
        app.helloWorld();
    },
    report: function(id) { 
        console.log("report:" + id);
        // hide the .pending <p> and show the .complete <p>
        document.querySelector('#' + id + ' .pending').className += ' hide';
        var completeElem = document.querySelector('#' + id + ' .complete');
        completeElem.className = completeElem.className.split('hide').join('');
    },
    helloWorld: function() {
        new Gitana({
                   "baseURL" : 'http://api.cloudcms.com:80',
                   "clientId" : "676e3450-6131-46c2-99cc-496aa2ad80fa",
                   "clientSecret" : "5fGkvesH/tWEMX6SpevL54rY6iJK5ADzLH963sif2ljrWvFOhV2zXv6rSpLF2uMWlJ9SG0uEO9uQO4JZac0i7DZquA/5W8ixJwhj76g0Ksk="
        }).authenticate({
                        "username" : "demo",
                        "password" : "demo"
        }).then(function() {
                var authInfo = this.getDriver().getAuthInfo();
                var name = authInfo.getPrincipalName();
                var welcomeElem = document.querySelector('#cloudcms-welcome');
                console.log("Cloud CMS User: " + name);
                welcomeElem.innerHTML = 'Hello ' + name + '! Welcome to Cloud CMS!';
        });    
    }
};
