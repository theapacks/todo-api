pipeline {
    
    agent any

    environment {
        registry = "mbulaheni/todo-api"
    }

    stages {
        stage("Pull Images") {
            steps {
                echo 'Pulling mongo docker image'
                sh "/usr/local/bin/docker pull docker.io/library/mongo:latest"
                echo 'Pulling mongo-express docker image'
                sh "/usr/local/bin/docker pull docker.io/library/mongo-express:latest"
            }
        }

        stage("Build-Docker-Image") {
            steps {
                echo 'Build docker image'
                sh 'pwd -P'
                sh "/usr/local/bin/docker build -t docker.io/mbulaheni/todo-api:latest ."
            }
        }

        stage("Push-Docker-Image") {
            steps {
                echo 'Push docker image to repo'
                sh '/usr/local/bin/docker images mbulaheni/todo-api:latest'
            }
        }

        stage("Invoke-Web-Client-Pipeline") {
            steps {
                build 'todo-webclient-pipeline'
            }
        } 

        stage("Deploy") {
            steps {
                sh '/Library/Frameworks/Python.framework/Versions/3.7/bin/docker-compose -f fullstack.yaml up -d'
            }
        }                
    }
}