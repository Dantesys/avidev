import { Test, TestingModule } from '@nestjs/testing';
import { ProducaoService } from './producao.service';

describe('ProducaoService', () => {
  let provider: ProducaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProducaoService],
    }).compile();

    provider = module.get<ProducaoService>(ProducaoService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
