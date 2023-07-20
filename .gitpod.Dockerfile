FROM gitpod/workspace-full
USER gitpod
RUN sudo apt-get remove -yq php7.2 && \
    sudo add-apt-repository ppa:ondrej/php && \
    sudo apt-get update -q && \
    sudo apt-get install -yq php7.4 && \
    sudo rm -rf /var/lib/apt/lists/*\

RUN sudo apt-get install -y nginx

# Configurar Nginx
COPY nginx.conf /etc/nginx/sites-available/default

# Iniciar el servicio PHP-FPM
CMD ["php-fpm"]

# Exponer el puerto 8080 para Nginx
EXPOSE 8080