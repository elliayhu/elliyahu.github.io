export class AllProjects
{
  
  activate()
  {
    if(document.getElementById("mainDiv")){
    let mainDiv = document.getElementById("mainDiv");
    mainDiv.scrollTop =0;
    }
  }
  items=[
      {route:"daimler",src:"src/images/projects/daimler.jpg",projectName:"דיימלר - מרצדס"},
      {route:"schindler",src:"src/images/projects/schindler.jpg",projectName:"Schindler"},
      {route:"alpha-bio",src:"src/images/projects/alpha-bio.jpg",projectName:"Alpha Bio"},
      {route:"akamai",src:"src/images/projects/akamai.jpg",projectName:"Akamai"},
      {route:"cellebrite",src:"src/images/projects/cellebrite.jpg",projectName:"Cellebrite"},
      {route:"beta-media",src:"src/images/projects/atrium-building.jpg",projectName:"Beta Media"},
      {route:"citibank",src:"src/images/projects/citibank.jpg",projectName:"Citibank"},
      {route:"moovit",src:"src/images/projects/moovit.jpg",projectName:"Moovit"},
      {route:"service-now",src:"src/images/projects/service_now.jpg",projectName:"Service Now"},
      {route:"triple-c",src:"src/images/projects/tripleC.jpg",projectName:"Triple C"},
      {route:"privet-home",src:"src/images/projects/privet-home.jpg",projectName:"בתים פרטיים"}
  ];

  scrollTop;

  attached()
  {
    this.scrollTop ='0px';
  }
}