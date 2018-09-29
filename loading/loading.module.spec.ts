import { LoadingModule } from './loading.module';

describe('NgxLoadingModule', () => {
  let loadingModule: LoadingModule;

  beforeEach(() => {
    loadingModule = new LoadingModule();
  });

  it('should create an instance', () => {
    expect(loadingModule).toBeTruthy();
  });
});
