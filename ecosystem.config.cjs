module.exports = {
	apps: [
		{
			name: 'const-homepage',
			script: './server.js',
			instances: 1,
			exec_mode: 'fork',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
			},
			// 자동 재시작 설정
			watch: false,
			ignore_watch: ['node_modules', 'dist'],
			max_memory_restart: '500M',
			// 로그 설정
			log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
			error_file: './logs/error.log',
			out_file: './logs/out.log',
			log_file: './logs/combined.log',
		},
	],
};
