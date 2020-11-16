
'use strict'

const { line2Camel } = require('../lib/utils')


test('trim space', () => {
    const target = "my-component"
    const result = "myComponent"

    expect(line2Camel(target)).toBe(result);
});