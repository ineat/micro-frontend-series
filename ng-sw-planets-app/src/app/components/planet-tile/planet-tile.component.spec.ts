import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetTileComponent } from './planet-tile.component';

describe('PlanetTileComponent', () => {
  let component: PlanetTileComponent;
  let fixture: ComponentFixture<PlanetTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
