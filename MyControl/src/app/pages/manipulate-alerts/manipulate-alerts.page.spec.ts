import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ManipulateAlertsPage } from './manipulate-alerts.page';

import {HttpClientTestingModule} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';

describe('ManipulateAlertsPage', () => {
  let component: ManipulateAlertsPage;
  let fixture: ComponentFixture<ManipulateAlertsPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ManipulateAlertsPage ],
      imports: [IonicModule.forRoot(),HttpClientTestingModule],providers:[HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(ManipulateAlertsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
