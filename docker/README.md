# Docker Setup for UI Component Library

This directory contains Docker configurations for testing and running the different implementations of the UI component library in isolated environments. Using Docker ensures consistent behavior across different systems and simplifies setup.

## Prerequisites

- [Docker](https://www.docker.com/get-started) (v20.10.0+)
- [Docker Compose](https://docs.docker.com/compose/install/) (v2.0.0+)

## Available Services

The `docker-compose.yml` file in the repository root defines the following services:

| Service Name | Description | Port | Technology |
|--------------|-------------|------|------------|
| `static-html` | Static HTML implementation | 5000 | Nginx |

## Running the Static HTML

From the repository root, you can run using Docker Compose:

### Static HTML Implementation

```bash
docker-compose up static-html
```

This will:
1. Build an Nginx container with the static HTML files
2. Mount the `sample-data` directory
3. Expose the implementation on [http://localhost:5000](http://localhost:5000)

## Configuration Details

### Nginx Configuration

The Nginx configurations for each implementation are in:
- `docker/static-html/nginx.conf` - For the static HTML implementation
- `docker/php/nginx.conf` - For the PHP implementation

These configurations include:
- Cache settings for static assets
- Proper MIME types for JSON files
- Error handling

### Customizing the Docker Setup

To modify the Docker setup:

1. Edit the `docker-compose.yml` file to change ports, volumes, or other settings
2. Edit the Nginx configuration files to change server behavior
3. Rebuild the containers with:

```bash
docker-compose down
docker-compose up --build <service-name>
```

## Troubleshooting

### Port Conflicts

If you see an error like "port is already allocated," change the port in `docker-compose.yml`:

```yaml
services:
  static-html:
    ports:
      - "8080:80"  # Change 5000 to another port like 8080
```

### Volume Mounting Issues

If files aren't updating in the container:

1. Ensure file paths in `docker-compose.yml` are correct
2. Try restarting the container:

```bash
docker-compose restart static-html
```

### Permissions Issues

If you encounter permissions errors, you may need to adjust permissions on mounted volumes or in the Dockerfile.
