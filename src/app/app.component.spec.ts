import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DataService } from './data.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [DataService]
    }).compileComponents();
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });
  
  it('should show loading page initially', function(done) {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const paragraph = fixture.debugElement.query(By.css('p'));
    expect(paragraph.nativeElement.innerText).toEqual('Loading...');
    setTimeout(function() {
      fixture.detectChanges();
      const paragraph = fixture.debugElement.query(By.css('p'));
      expect(paragraph.nativeElement.innerText).toEqual('Rushikesh');
      done();
    }, 6000);
  });

});
