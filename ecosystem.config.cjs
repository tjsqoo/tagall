module.exports = {
  apps: [{
    name: "tagall",
    script: "./app.js",
    instances: 2, // 0이면 CPU 개수에 맞춰 스레드 생성
    exec_mode: 'cluster', // fork가 아닌 cluster 모드로 실행
    merge_logs: true, // 클러스터 모드 사용 시 각 클러스터에서 생성되는 로그를 한 파일로 합쳐준다.
    autorestart: true, // 프로세스 실패 시 자동으로 재시작할지 선택
    watch: true, // 파일이 변경되었을 때 재시작 할지 선택
    env_production: {
      NODE_ENV: "production"
    },
    env_development: {
      NODE_ENV: "development"
    }
  }]
}