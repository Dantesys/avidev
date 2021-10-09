import { Test, TestingModule } from '@nestjs/testing';
import { ProducaoController } from './producao.controller';

describe('ProducaoController', () => {
  let controller: ProducaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProducaoController],
    }).compile();

    controller = module.get<ProducaoController>(ProducaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
