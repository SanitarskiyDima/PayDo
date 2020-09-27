pipeline {
    agent none
    stages {
        stage('Install node') {
            agent {
                docker { 
                    image 'node:10'
                    args '-u root:root'
                    }
            }
            steps {
                sh 'node --version'
            }
        }
        stage('Cypress tests') {
            agent {
                docker { 
                    image 'cypress/base:10'
                    args '-u root:root'
                    }
            }
            steps {
                sh 'npm install'
                sh 'npx cypress run'
            }
        }
    }
}
