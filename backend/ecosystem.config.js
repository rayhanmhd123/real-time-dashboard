module.exports = {
    apps: [{
        name: 'real-time-dashboard-be',
        script: 'dist/server.js',
        autorestart: true,
        watch: false,
        env: {
            NODE_ENV: 'production',
        },
    }],
};