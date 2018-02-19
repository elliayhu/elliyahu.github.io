export class App {
  configureRouter(config, router) {
    this.router = router;
    config.title = 'main';
    config.map([
      { route: '', redirect:'main' },
      { route: 'main', name:'main', moduleId:'./main-page/main-carousel' },
      { route: 'projects', name:'projects', moduleId:'./projects/projects'},
      { route: 'about-us', name: 'about-us', moduleId: './about-us/about-us' }
    ]);
  }
}