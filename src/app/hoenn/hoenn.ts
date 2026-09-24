import { Component, inject } from '@angular/core';
import { HoennService } from '../services/hoenn.service';

@Component({
  selector: 'app-hoenn',
  standalone: true,
  imports: [],
  templateUrl: './hoenn.html',
  styleUrl: './hoenn.css'
})
export class Hoenn {

  private hoennService = inject(HoennService);

  leaders = this.hoennService.getLeaders();
}