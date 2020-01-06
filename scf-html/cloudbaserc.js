module.exports = {
    envId: '{{envId}}',
    functionRoot: './functions',
    functions: [
        {
            name: 'scf-html',
            config: {
                // 超时时间
                timeout: 5,
                runtime: 'Nodejs8.9'
            },
            handler: 'index.main'
        }
    ]
};