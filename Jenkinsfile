pipeline {
    
    agent any

    environment {
        registry = "mbulaheni/todo-api"
    }

    stages {
        stage("Pull Images") {
            steps {
                echo 'Pulling mongo docker image'
                sh "podman pull docker.io/library/mongo:latest"
                echo 'Pulling mongo-express docker image'
                sh "podman pull docker.io/library/mongo-express:latest"
            }
        }

        stage("Build-Docker-Image") {
            steps {
                echo 'Build docker image'
                sh 'pwd -P'
                sh "podman build -t docker.io/mbulaheni/todo-api:latest ."
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