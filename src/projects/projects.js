export class Projects {
    configureRouter(config, router) {
        this.router = router;
        config.title = 'projects';
        config.map([
            { route: '', redirect: 'all-projects' },
            { route: 'all-projects', name: 'all-projects', moduleId: './all-projects/all-projects'},
            { route: 'alpha-bio', name: 'alpha-bio', moduleId: './alpha-bio/alpha-bio',title:'Alpha Bio'},
            { route: 'akamai', name: 'akamai', moduleId: './akamai/akamai', title:'Akamai' },
            { route: 'beta-media', name: 'beta-media', moduleId: './beta-media/beta-media',title:'Beta-Media' },
            { route: 'cellebrite', name: 'cellebrite', moduleId: './cellebrite/cellebrite', title:'Cellebrite' },
            { route: 'citibank', name: 'citibank', moduleId: './citibank/citibank' ,title:'citibank'},
            { route: 'daimler', name: 'daimler', moduleId: './daimler/daimler',title:'דיימלר-מרצדס' },
            { route: 'moovit', name: 'moovit', moduleId: './moovit/moovit',title: 'Moovit' },
            { route: 'privet-home', name: 'privet-home', moduleId: './privet-home/privet-home', title:'בתים פרטיים'},
            { route: 'service-now', name: 'service-now', moduleId: './service-now/service-now',title:'service-now' },
            { route: 'schindler', name: 'schindler', moduleId: './schindler/schindler', title: 'Schindler'},         
            { route: 'triple-c', name: 'triple-c', moduleId: './triple-c/triple-c', title:'Triple C'}
        ]);
    }

    mainDiv = document.getElementById("mainDiv");
    attached()
    {
      this.mainDiv.scrollTop =0;
    }
}