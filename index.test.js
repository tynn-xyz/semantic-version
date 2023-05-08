const process = require('process');
const cp = require('child_process');
const path = require('path');

test('sets version output', async () => {
    process.env['INPUT_VERSIONING'] = "release/v1";
    const ip = path.join(__dirname, 'index.js');
    const out = cp.execSync(`node ${ip}`, { env: { ...process.env, 'GITHUB_OUTPUT': '' } });
    expect(out.toString()).toEqual(expect.stringContaining("::set-output name=version::1.0.0"));
});

test('fails without version input', async () => {
    process.env['INPUT_VERSIONING'] = "version";
    const ip = path.join(__dirname, 'index.js');
    await expect(async () => cp.execSync(`node ${ip}`, { env: process.env })).rejects;
});
