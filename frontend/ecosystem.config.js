module.exports = {
    apps: [
        {
            name: 'real-time-dashboard-fe',
            script: 'npm',
            args: 'start',
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 3011,
            },
        },
    ],
};