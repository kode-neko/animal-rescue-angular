import { Component } from '@angular/core';
import socialList from '../../../../constants/social.constants'

@Component({
  selector: 'app-menu-social',
  templateUrl: './menu-social.component.html',
  styleUrls: ['./menu-social.component.css']
})
export class MenuSocialComponent {
  socialList = socialList;

  handleClick(id: string) {
    const path =  socialList.find(s => s.id === id)?.path
    window.open(path, '_blank');
  }
}
