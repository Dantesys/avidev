import { Test, TestingModule } from '@nestjs/testing';
import { EscalaService } from './escala.service';

describe('EscalaService', () => {
  let provider: EscalaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EscalaService],
    }).compile();

    provider = module.get<EscalaService>(EscalaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
