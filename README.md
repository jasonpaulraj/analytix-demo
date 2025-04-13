# Dashboard Monitor UI 📊

[![Deploy to GitHub Pages](https://github.com/jpextorche/dashboard-monitor-ui/actions/workflows/deploy.yml/badge.svg)](https://github.com/jpextorche/dashboard-monitor-ui/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This directory contains a framework-free, static HTML implementation of the UI components. This version is ideal for quickly integrating the dashboard into existing projects or for developers who prefer vanilla JavaScript.

🔗 **Live Demo**: [https://jpextorche.github.io/dashboard-monitor-ui](https://jpextorche.github.io/dashboard-monitor-ui)

https://github.com/user-attachments/assets/a01242ce-a8c7-4552-948d-e0ec696515f5

## ✨ Features

- **Pure HTML, CSS, and JavaScript**: No framework dependencies
- **Tailwind CSS**: Fully styled with responsive design
- **GitHub Pages Integration**: Automatic deployment via CI/CD
- **Docker Support**: Easy local development with containerization

## 📁 Structure

- `dashboard.html` - The main dashboard UI
- `.github/workflows` - CI/CD configuration for GitHub Pages deployment
- `docker-compose.yml` - Docker configuration for local development
- `sample-data/` - JSON files that simulate API responses for testing

## 📊 Sample Data

The `sample-data` directory contains pre-generated JSON files that simulate API responses from various monitoring services. These files are used for:

- **Development & Testing**: Populate the dashboard with realistic data without requiring actual API connections
- **Demonstration**: Showcase the dashboard's capabilities with consistent example data
- **Offline Usage**: Allow the dashboard to function without internet connectivity

Key sample files include:
- `service_mesh_uptime_kuma_monitor_statistics.json` - Contains service uptime data, status history, and health metrics

To use the sample data:
1. Make sure the files are accessible from your web server
2. The dashboard will automatically load these files when no live API is configured
3. You can modify these files to test different scenarios and UI states

## 🚀 Getting Started

### Quick Start

The easiest way to run the static implementation:

1. Make sure the `sample-data` directory (at the repository root) contains the JSON files
2. Start a local web server in this directory
3. Access the implementation in your browser

### Local Development Options

#### Option 1: Python HTTP Server 🐍

```bash
cd static-html
python -m http.server 5000
```

Then open [http://localhost:5000](http://localhost:5000) in your browser.

#### Option 2: Node.js HTTP Server

```bash
cd static-html
npx http-server -p 5000
```

Then open [http://localhost:5000](http://localhost:5000) in your browser.

#### Option 3: Docker (Recommended)

From the repository root:

```bash
docker-compose up static-html
```

Then open [http://localhost:5000](http://localhost:5000) in your browser.

## Customizing the Implementation

## Browser Compatibility

This implementation is compatible with all modern browsers (Chrome, Firefox, Safari, Edge). For older browsers, you may need to add polyfills for features like `async/await` and `fetch`.
