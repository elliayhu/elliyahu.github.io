import {bindable} from 'aurelia-framework';
export class ProjectView
{
  @bindable firstPicture;
  @bindable pictures;
  @bindable paragraphes;
  @bindable title;
  @bindable topTitle;

  mainDiv = document.getElementById("mainDiv");
  attached()
  {
    this.mainDiv.scrollTop =0;
  }
}