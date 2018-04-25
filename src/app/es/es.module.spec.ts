import { EsModule } from './es.module';

describe('EsModule', () => {
  let esModule: EsModule;

  beforeEach(() => {
    esModule = new EsModule();
  });

  it('should create an instance', () => {
    expect(esModule).toBeTruthy();
  });
});
