module.exports = {
  apps: [{
    name: "tagall",
    script: "./app.js",
    instances: 1, // 0이면 CPU 개수에 맞춰 스레드 생성
    exec_mode: 'cluster', // fork가 아닌 cluster 모드로 실행
    merge_logs: true, // 클러스터 모드 사용 시 각 클러스터에서 생성되는 로그를 한 파일로 합쳐준다.
    autorestart: false, // 프로세스 실패 시 자동으로 재시작할지 선택
    watch: true, // 파일이 변경되었을 때 재시작 할지 선택
    ignore_watch : ["node_modules", "conf", ".git", "logs", "*.pid"],
    out_file: "./logs/out.log",
    error_file: "./logs/error.log",
    combine_logs: true,
    merge_logs: true,
    time: true,
    // pid_file: "./app.pid",
    env_production: {
      NODE_ENV: "PROD"
    },
    env: {
      NODE_ENV: "DEV",
      EXPRESS: {
        PORT: 3500,
      },
      REDIS: {
        HOST: '127.0.0.1',
        PORT: 6379,
      },
    }
  }]
}
