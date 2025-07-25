#!/bin/bash

# Cost Calculator - Local Development Automation Script
# This script automates common development tasks

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Function to install dependencies
install_deps() {
    print_status "Installing dependencies..."
    npm install
    print_success "Dependencies installed successfully!"
}

# Function to run development server
dev_server() {
    print_status "Starting development server..."
    npm run dev
}

# Function to build project
build_project() {
    print_status "Building project..."
    npm run build
    print_success "Project built successfully!"
}

# Function to run linting
lint_project() {
    print_status "Running linting..."
    npm run lint
    print_success "Linting completed!"
}

# Function to regenerate logos
regenerate_logos() {
    print_status "Regenerating logos..."
    if [ -f "./convert_logo.sh" ]; then
        chmod +x ./convert_logo.sh
        ./convert_logo.sh public/img/logo.png
        ./convert_logo.sh public/img/logoA.png
        ./convert_logo.sh public/img/logoB.png
        ./convert_logo.sh public/img/logoC.png
        print_success "Logos regenerated successfully!"
    else
        print_error "convert_logo.sh not found!"
        exit 1
    fi
}

# Function to commit and push changes
commit_push() {
    print_status "Adding all changes to git..."
    git add .
    
    echo "Enter commit message:"
    read -r commit_message
    
    if [ -z "$commit_message" ]; then
        commit_message="Auto-commit: $(date '+%Y-%m-%d %H:%M:%S')"
    fi
    
    print_status "Committing changes..."
    git commit -m "$commit_message"
    
    print_status "Pushing to remote repository..."
    git push origin main
    print_success "Changes pushed successfully!"
}

# Function to setup project for first time
setup_project() {
    print_status "Setting up project for first time..."
    
    # Check if required tools are installed
    if ! command_exists node; then
        print_error "Node.js is not installed. Please install Node.js first."
        exit 1
    fi
    
    if ! command_exists npm; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    if ! command_exists git; then
        print_error "git is not installed. Please install git first."
        exit 1
    fi
    
    # Install dependencies
    install_deps
    
    # Build project to verify everything works
    build_project
    
    print_success "Project setup completed successfully!"
}

# Function to deploy to production
deploy_production() {
    print_status "Deploying to production..."
    
    # Run tests and build
    lint_project
    build_project
    
    # Commit and push if there are changes
    if ! git diff --quiet; then
        print_warning "There are uncommitted changes. Committing them first..."
        commit_push
    fi
    
    print_success "Deployment process completed! GitHub Actions will handle the rest."
}

# Function to show help
show_help() {
    echo "Cost Calculator - Development Automation Script"
    echo ""
    echo "Usage: $0 [COMMAND]"
    echo ""
    echo "Commands:"
    echo "  setup     - Setup project for first time (install deps, build)"
    echo "  dev       - Start development server"
    echo "  build     - Build the project"
    echo "  lint      - Run linting"
    echo "  logos     - Regenerate all logos"
    echo "  commit    - Commit and push changes"
    echo "  deploy    - Deploy to production (lint, build, commit, push)"
    echo "  install   - Install dependencies"
    echo "  help      - Show this help message"
    echo ""
    echo "Examples:"
    echo "  $0 setup     # First time setup"
    echo "  $0 dev       # Start development"
    echo "  $0 deploy    # Deploy to production"
}

# Main script logic
case "${1:-help}" in
    setup)
        setup_project
        ;;
    dev)
        dev_server
        ;;
    build)
        build_project
        ;;
    lint)
        lint_project
        ;;
    logos)
        regenerate_logos
        ;;
    commit)
        commit_push
        ;;
    deploy)
        deploy_production
        ;;
    install)
        install_deps
        ;;
    help|--help|-h)
        show_help
        ;;
    *)
        print_error "Unknown command: $1"
        echo ""
        show_help
        exit 1
        ;;
esac