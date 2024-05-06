import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramWidgetComponent } from './instagram-widget.component';

describe('InstagramWidgetComponent', () => {
  let component: InstagramWidgetComponent;
  let fixture: ComponentFixture<InstagramWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstagramWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InstagramWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
