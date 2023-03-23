import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: any): unknown {
    if(value.url != null){
      return value.url
    }else{
      return "https://ionicframework.com/docs/img/demos/card-media.png";
    }
  }

}
