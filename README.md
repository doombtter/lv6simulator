PLAY ON : https://abrelshud.lolin.in/

## CodePipeline
### AWS CodePipeline
1. IAM Role 설정
2. CodePipeline Service를 통해 Github(Version 2) repository 연결
### AWS CodeBuild
1. 신규 CodeBuild를 활성화
이 작업에는 프로젝트명, 운영체제, VPC, 컴퓨팅, 로그, 빌드스펙 등이 포함됨
2. 지정해둔 S3에 아티팩트를 배포
### AWS Lambda
1. S3의 변동 사항을 감지하여 EC2에 압축을 해제하고 배포하는 함수 제작
