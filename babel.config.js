const presets = [['@babel/env']];
const plugins = [['@babel/plugin-proposal-class-properties', { loose: true }]];
const env = {
    test: {
        presets: [['@babel/env', { modules: 'commonjs' }]],
    },
};
module.exports = { presets, plugins, env };
