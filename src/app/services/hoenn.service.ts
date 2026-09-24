import { Injectable, signal } from '@angular/core';

export interface HoennLeader {
  name: string;
  town: string;
  specialty: string;
  badge: string;
  team: string[];
}

@Injectable({
  providedIn: 'root'
})
export class HoennService {

  private hoennLeaders = signal<HoennLeader[]>([
    {
      name: 'Roxanne',
      town: 'Rustboro City',
      specialty: 'Rock',
      badge: 'Stone Badge',
      team: ['Geodude', 'Nosepass']
    },
    {
      name: 'Brawly',
      town: 'Dewford Town',
      specialty: 'Fighting',
      badge: 'Knuckle Badge',
      team: ['Machop', 'Makuhita']
    },
    {
      name: 'Wattson',
      town: 'Mauville City',
      specialty: 'Electric',
      badge: 'Dynamo Badge',
      team: ['Magnemite', 'Voltorb', 'Magneton']
    },
    {
      name: 'Flannery',
      town: 'Lavaridge Town',
      specialty: 'Fire',
      badge: 'Heat Badge',
      team: ['Slugma', 'Numel', 'Torkoal']
    },
    {
      name: 'Norman',
      town: 'Petalburg City',
      specialty: 'Normal',
      badge: 'Balance Badge',
      team: ['Slaking', 'Vigoroth', 'Slaking']
    },
    {
      name: 'Winona',
      town: 'Fortree City',
      specialty: 'Flying',
      badge: 'Feather Badge',
      team: ['Swellow', 'Pelipper', 'Skarmory', 'Altaria']
    },
    {
      name: 'Tate & Liza',
      town: 'Mossdeep City',
      specialty: 'Psychic',
      badge: 'Mind Badge',
      team: ['Solrock', 'Lunatone']
    },
    {
      name: 'Wallace',
      town: 'Sootopolis City',
      specialty: 'Water',
      badge: 'Rain Badge',
      team: ['Luvdisc', 'Whiscash', 'Sealeo', 'Seaking', 'Milotic']
    }
  ]);

  getLeaders() {
    return this.hoennLeaders;
  }
}