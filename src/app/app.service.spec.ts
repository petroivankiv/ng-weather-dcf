import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { WeatherApiData } from 'src/app/weather.model';

let httpClientSpy: jasmine.SpyObj<HttpClient>;

let service: AppService;

beforeEach(() => {
  httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  service = new AppService(httpClientSpy, {
    apiKey: '',
    url: '',
    googleMapApiKey: '',
  });
});

describe('AppService', () => {
  it('should return expected data', (done: DoneFn) => {
    const expected: Partial<WeatherApiData> = {
      name: 'Name',
    };

    httpClientSpy.get.and.returnValue(of(expected));

    service.getCurrentWeather('').subscribe({
      next: (data) => {
        expect(data)
          .withContext('expected')
          .toEqual(expected as WeatherApiData);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });

    httpClientSpy.get.and.returnValue(of(errorResponse));

    service.getCurrentWeather('').subscribe({
      next: (data) => done.fail('expected an error, not data'),
      error: (error) => {
        expect(error.message).toContain('test 404 error');
        done();
      },
    });
  });
});
