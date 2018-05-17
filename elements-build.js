const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/runtime.js',
        './dist/polyfills.js',
        './dist/scripts.js',
        './dist/main.js'

    ]

    await fs.ensureDir('elements')
    await concat(files, 'elements/framework-poll.js')
    await fs.copyFile('./dist/styles.css', 'elements/styles.css')
    await fs.copy('./dist/assets', 'elements/assets/')
})()