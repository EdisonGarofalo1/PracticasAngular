import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoreComponent } from './autore.component';

describe('AutoreComponent', () => {
  let component: AutoreComponent;
  let fixture: ComponentFixture<AutoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
