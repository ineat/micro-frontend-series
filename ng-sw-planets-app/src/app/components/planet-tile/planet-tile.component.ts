import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Planets } from '../../interfaces/planets.interface';

@Component({
  selector: 'app-planet-tile',
  templateUrl: './planet-tile.component.html',
  styleUrls: ['./planet-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlanetTileComponent {
  @Input() planet: Planets;
}
