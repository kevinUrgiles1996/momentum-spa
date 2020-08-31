import { BlogTextPipe } from './blog-text.pipe';

describe('BlogTextPipe', () => {
  it('create an instance', () => {
    const pipe = new BlogTextPipe();
    expect(pipe).toBeTruthy();
  });
});
