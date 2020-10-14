import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SondageModalComponent } from './sondage-modal.component';

describe('SondageModalComponent', () => {
  let component: SondageModalComponent;
  let fixture: ComponentFixture<SondageModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SondageModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SondageModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
