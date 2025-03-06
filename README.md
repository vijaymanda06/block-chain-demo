# Blockchain Demo with Kubernetes Monitoring

A blockchain demonstration project with Kubernetes deployment and comprehensive monitoring using Prometheus and Grafana.

## Prerequisites

- Docker Desktop with Kubernetes enabled
- Azure CLI
- Helm
- kubectl

## Setup Instructions

### 1. Azure AKS Cluster Setup

```bash
# Create resource group
az group create --name myResourceGroup --location eastus

# Create AKS cluster
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --node-vm-size Standard_B2s --enable-addons monitoring --generate-ssh-keys

# Get credentials
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```
Let me help you update the README.md file with all sections. I'll add the remaining content after line 25:

```markdown:c:\Users\vijay\OneDrive\Desktop\Git Repos\block-chain-demo\README.md
# Blockchain Demo with Kubernetes Monitoring

A blockchain demonstration project with Kubernetes deployment and comprehensive monitoring using Prometheus and Grafana.

## Prerequisites

- Docker Desktop with Kubernetes enabled
- Azure CLI
- Helm
- kubectl

## Setup Instructions

### 1. Azure AKS Cluster Setup

```bash
# Create resource group
az group create --name myResourceGroup --location eastus

# Create AKS cluster
az aks create --resource-group myResourceGroup --name myAKSCluster --node-count 2 --node-vm-size Standard_B2s --enable-addons monitoring --generate-ssh-keys

# Get credentials
az aks get-credentials --resource-group myResourceGroup --name myAKSCluster
```

### 2. Monitoring Stack Installation

```bash
# Add Prometheus Helm repository
helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
helm repo update

# Create monitoring namespace
kubectl create namespace monitoring

# Install monitoring stack
helm install monitoring prometheus-community/kube-prometheus-stack -n monitoring -f k8s/monitoring/values.yaml
```

### 3. Accessing Monitoring Dashboards

#### Grafana
```bash
kubectl port-forward svc/monitoring-grafana 3000:80 -n monitoring
```
Access at: http://localhost:3000
- Username: admin
- Password: your-secure-password (configured in values.yaml)

#### Prometheus
```bash
kubectl port-forward svc/monitoring-kube-prometheus-prometheus 9090:9090 -n monitoring
```
Access at: http://localhost:9090

## Project Structure

```
block-chain-demo/
├── k8s/
│   └── monitoring/
│       └── values.yaml    # Monitoring configuration
├── src/                   # Application source code
└── README.md
```

## Monitoring Configuration

### values.yaml
The monitoring configuration includes:
- Prometheus scrape configuration
- Grafana dashboard setup
- Custom metrics collection
- Resource monitoring

### Grafana Dashboards
Pre-configured dashboards include:
1. Blockchain Demo Overview
   - Node CPU Usage
   - Memory Usage
   - Custom blockchain metrics

## Deployment Verification

1. Check cluster status:
```bash
kubectl get nodes
```

2. Verify monitoring pods:
```bash
kubectl get pods -n monitoring
```

3. Check services:
```bash
kubectl get svc -n monitoring
```

## Troubleshooting

### Common Issues

1. Pod Status Issues
```bash
kubectl describe pod <pod-name> -n monitoring
```

2. Service Connection Issues
```bash
kubectl get endpoints -n monitoring
```

3. Prometheus Target Issues
- Access Prometheus UI
- Check Targets page for scrape status

### Logs Access

1. Grafana Logs:
```bash
kubectl logs -f deployment/monitoring-grafana -n monitoring
```

2. Prometheus Logs:
```bash
kubectl logs -f statefulset/monitoring-prometheus-kube-prometheus-prometheus -n monitoring
```

## Maintenance

### Updating Monitoring Stack

```bash
helm upgrade monitoring prometheus-community/kube-prometheus-stack -n monitoring -f k8s/monitoring/values.yaml
```

### Cleaning Up

```bash
# Delete monitoring stack
helm uninstall monitoring -n monitoring

# Delete AKS cluster
az aks delete --resource-group myResourceGroup --name myAKSCluster --yes
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

[MIT License](LICENSE)

## Support

For issues and feature requests, please create an issue in the GitHub repository.
```

Would you like me to help you commit this complete README.md to your repository?