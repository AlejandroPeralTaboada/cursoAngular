import { CocheModule } from './coche.module';

describe('CocheModule', () => {
  let cocheModule: CocheModule;

  beforeEach(() => {
    cocheModule = new CocheModule();
  });

  it('should create an instance', () => {
    expect(cocheModule).toBeTruthy();
  });
});
