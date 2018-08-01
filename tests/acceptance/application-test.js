import { module, test } from 'qunit';
import { visit, currentRouteName } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | login', function(hooks) {
  setupApplicationTest(hooks);

  /**
    Execute this test in Chrome or PhantomJS for correct results
  */
  test('Verify correct webkit vendor prefix from autoprefixer', async function(assert) {
    assert.expect(3);

    await visit('/');

    const webkitUserSelect = window.getComputedStyle(document.querySelector('#title'), null).getPropertyValue('-webkit-user-select');

    assert.equal(currentRouteName(), 'index', 'On the index page');
    assert.ok(document.querySelector('#title'), 'Page contains a header title');
    assert.equal(webkitUserSelect, 'none', '');
  });
});
