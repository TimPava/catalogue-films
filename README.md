# Catalogue de Films

## K8s

Démarrage de minikube :

```
minikube start
```

Dépoiement Kubernetes :

```
kubectl apply -f deployment.yml
```

## Docker

Génération de l'image Docker :

```
docker build -t timpava/react-catalogue-films:latest
```

Publication sur DockerHub :

```
docker push timpava/react-catalogue-films:latest
```
