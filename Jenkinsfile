pipeline {
    
    agent any

    environment {
        registry = "mbulaheni/todo-api"
    }

    stages {

        stage("Build-Docker-Image") {
            steps {
                echo 'Build docker image'
                sh 'pwd -P'
                sh 'ls -l'
                script {
                    dockerImage = docker.build + registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage("Deploy-Docker-Image") {
            steps {
                echo 'Deploy docker image'
                sh 'podman images'
            }
        }
    }
}