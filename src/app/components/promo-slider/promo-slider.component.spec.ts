import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { PromoSliderComponent } from './promo-slider.component';

describe('PromoSliderComponent', () => {
  let component: PromoSliderComponent;
  let fixture: ComponentFixture<PromoSliderComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PromoSliderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromoSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
