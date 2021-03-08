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
                sh "podman build -t mbulaheni/todo-api:1.0 ."
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