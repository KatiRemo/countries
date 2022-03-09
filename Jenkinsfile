pipeline {
    agent any
    
    tools {nodejs "node"}
    
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
         stage('Run') {
            steps {
                sh 'npm start'
            }
        }
        }
}