pipeline {
    agent any

    tools {
        nodejs 'NodeJS' //  Jenkins NodeJS tool name
    }

    environment {
        FRONTEND_DIR = 'frontend'
        BACKEND_DIR = 'backend'
         //Render deploy hook URLs
        FRONTEND_HOOK = 'https://api.render.com/deploy/srv-d28r9uur433s73bsdp4g?key=F_eGReM6VmQ'
        BACKEND_HOOK = 'https://api.render.com/deploy/srv-d28ri0uuk2gs73fnd0dg?key=bW1_zse0H2o'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/APP4080A/copilot-core.git',
                    credentialsId: 'gitHub-pat'
            }
        }

        stage('Install Dependencies') {
            parallel {
                stage('Frontend Install') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            bat 'npm install'
                        }
                    }
                }
                stage('Backend Install') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            bat 'npm install'
                        }
                    }
                }
            }
        }

        stage('Build') {
            parallel {
                stage('Frontend Build') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            bat 'npm run build'
                        }
                    }
                }
                stage('Backend Build') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            bat 'echo "Backend build complete (nothing to compile)"'
                        }
                    }
                }
            }
        }

        stage('Test') {
            parallel {
                stage('Frontend Tests') {
                    steps {
                        dir("${FRONTEND_DIR}") {
                            bat 'set CI=true && npm test'
                        }
                    }
                }
                stage('Backend Tests') {
                    steps {
                        dir("${BACKEND_DIR}") {
                            bat 'npm test'
                        }
                    }
                }
            }
        }

        stage('Deploy') {
            parallel {
                stage('Deploy Frontend') {
                    steps {
                        bat "curl -X POST ${FRONTEND_HOOK}"
                    }
                }
                stage('Deploy Backend') {
                    steps {
                        bat "curl -X POST ${BACKEND_HOOK}"
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning workspace...'
            bat '''
                if exist "frontend\\node_modules" rd /s /q "frontend\\node_modules"
                if exist "backend\\node_modules" rd /s /q "backend\\node_modules"
            '''
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}
