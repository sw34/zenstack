require('dotenv').config({ path: './.env.local' });
require('dotenv').config({ path: './.env' });
const fs = require('fs');

const filesToReplace = ['dist/post-install.js', 'dist/cli/index.mjs'];
for (const file of filesToReplace) {
    let content = fs.readFileSync(file, 'utf-8');
    if (process.env.TELEMETRY_TRACKING_TOKEN) {
        content = content.replace('<TELEMETRY_TRACKING_TOKEN>', process.env.TELEMETRY_TRACKING_TOKEN);
    } else {
        content = content.replace('<TELEMETRY_TRACKING_TOKEN>', '');
    }
    console.log('Updating file:', file);
    fs.writeFileSync(file, content, {
        encoding: 'utf-8',
    });
}

let cliContent = fs.readFileSync('dist/cli/index.mjs', 'utf-8');
if (process.env.DEFAULT_NPM_TAG) {
    cliContent = cliContent.replace('<DEFAULT_NPM_TAG>', process.env.DEFAULT_NPM_TAG);
} else {
    cliContent = cliContent.replace('<DEFAULT_NPM_TAG>', 'latest');
}

console.log('Updating file: dist/cli/index.mjs');
fs.writeFileSync('dist/cli/index.mjs', cliContent, {
    encoding: 'utf-8',
});
