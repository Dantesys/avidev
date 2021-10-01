import { Test, TestingModule } from '@nestjs/testing';
import { Service } from './service';

describe('Service', () => {
  let provider: Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Service],
    }).compile();

    provider = module.get<Service>(Service);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
