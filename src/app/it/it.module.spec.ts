import { ItModule } from './it.module';

describe('ItModule', () => {
  let itModule: ItModule;

  beforeEach(() => {
    itModule = new ItModule();
  });

  it('should create an instance', () => {
    expect(itModule).toBeTruthy();
  });
});
