import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableMP3Component } from './table-mp3.component';

describe('TableMP3Component', () => {
  let component: TableMP3Component;
  let fixture: ComponentFixture<TableMP3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableMP3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableMP3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
