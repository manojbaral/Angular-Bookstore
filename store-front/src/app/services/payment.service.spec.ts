import { TestBed, inject } from '@angular/core/testing';

import { PaymentService } from './payment.service';

describe('PaymentServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PaymentService]
    });
  });

  it('should ...', inject([PaymentService], (service: PaymentService) => {
    expect(service).toBeTruthy();
  }));
});
