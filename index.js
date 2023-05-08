const coerce = require('semver/functions/coerce');
const core = require('@actions/core');

try {
    const versioning = core.getInput('versioning', { required: true });
    core.info(`Coercing version from ${versioning}...`);

    const version = coerce(versioning)
    core.info(`Setting version to ${version}...`);

    core.setOutput('version', version.raw);
} catch (error) {
    core.setFailed(error.message);
}
