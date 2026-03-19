import { expect, test } from '@playwright/test';

test.describe('API checks', () => {
  test('can fetch a public API resource', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    expect(body).toMatchObject({
      id: 1,
      userId: 1,
    });
  });
});
