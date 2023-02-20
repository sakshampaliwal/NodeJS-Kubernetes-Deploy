# Node Web Application Deployment on Kubernetes

In this project, we will be creating a Node.js web application and deploying it on Kubernetes using Minikube. The following steps will be covered:

## Dockerizing Node.js Application
Pushing Custom Image to Docker Hub
Creating Deployment based on Custom Docker Image
Scaling Custom Image Deployment
Creating NodePort Service
Creating LoadBalancer Service
Rolling Update of the Deployment
Handling Pod Deletion
Accessing Kubernetes Dashboard
Creating YAML Deployment Specification File
Using Kubernetes Documentation
Applying YAML Deployment File
Creating YAML Service Specification File
Plan for the Creation of Two Deployments
Dockerizing Node.js Application
We will start by containerizing our Node.js application using Docker. We will create a Dockerfile that includes all the necessary dependencies and configuration required to run the application. Once the Docker image is built, we will test it locally to ensure it works as expected.

## Pushing Custom Image to Docker Hub
After successfully testing the Docker image locally, we will push the image to the Docker Hub repository. This will allow us to access the image from Kubernetes and deploy it to a cluster.

## Creating Deployment based on Custom Docker Image
Using the custom Docker image, we will create a Kubernetes deployment that will manage the deployment of our application. We will define the desired state of our application in the deployment YAML file and deploy it to a cluster.

## Scaling Custom Image Deployment
We will learn how to scale our deployment based on the number of replicas we want to run. Scaling allows us to increase or decrease the number of instances of our application based on the demand.

## Creating NodePort Service
To access our application from outside the cluster, we will create a Kubernetes service that will map a port on the node to a port on the pod running our application. This will allow us to access our application using the IP address of the node and the mapped port.

## Creating LoadBalancer Service
In addition to NodePort service, we will also create a LoadBalancer service that will distribute traffic across multiple replicas of our application. This provides high availability and allows us to handle more traffic.

## Rolling Update of the Deployment
We will learn how to perform a rolling update of our deployment to update the application with a new version. This ensures that there is no downtime during the update process and the new version of the application is deployed gradually.

## Handling Pod Deletion
We will understand what happens when a pod is deleted and how Kubernetes handles it. We will see how Kubernetes ensures that the desired state of the deployment is maintained even when a pod is deleted.

## Accessing Kubernetes Dashboard
We will learn how to access the Kubernetes Dashboard to view the state of our cluster and manage our applications. The Kubernetes Dashboard provides a web-based interface for managing and monitoring Kubernetes clusters.

## Creating YAML Deployment Specification File
We will create a YAML specification file for our deployment that can be used to deploy our application to a cluster. The YAML file defines the desired state of our application and provides the necessary information for Kubernetes to deploy and manage the application.

## Using Kubernetes Documentation
We will learn how to use the Kubernetes documentation to look up information on Kubernetes objects, API resources, and other topics related to Kubernetes.

## Applying YAML Deployment File
We will apply the YAML deployment specification file to deploy our application to a cluster. We will use the kubectl command-line tool to apply the YAML file to the cluster.

## Creating YAML Service Specification File
We will create a YAML specification file for our service that can be used to expose our application to the outside world. The YAML file defines the service type, port, and other configuration options required for Kubernetes to manage the service.

