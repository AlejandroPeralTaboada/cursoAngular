import { PtModule } from './pt.module';

describe('PtModule', () => {
  let ptModule: PtModule;

  beforeEach(() => {
    ptModule = new PtModule();
  });

  it('should create an instance', () => {
    expect(ptModule).toBeTruthy();
  });
});
