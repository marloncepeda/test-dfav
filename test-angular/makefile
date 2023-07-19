# Variable para almacenar el archivo de entorno actual
ENV_FILE := src/environments/environment
FORMAT_FILE := ".ts"

.PHONY: dev prod

# Objetivo por defecto
all: dev

# Objetivo para el modo de desarrollo
dev:
	@echo "====> Ejecutando en modo de desarrollo <===="
	@if [ -f $(ENV_FILE)$(FORMAT_FILE) ] && [ "$$(cat $(ENV_FILE)$(FORMAT_FILE) | head -n 1)" != "// ENV: DEV" ]; then \
		mv $(ENV_FILE)$(FORMAT_FILE) $(ENV_FILE)".prod"$(FORMAT_FILE); \
		mv $(ENV_FILE)".test"$(FORMAT_FILE) $(ENV_FILE)$(FORMAT_FILE); \
	fi
	@ng serve --host 0.0.0.0 --port 8080 --disable-host-check

# Objetivo para el modo de producción
prod:
	@echo "====> Ejecutando en modo de producción <===="
	@if [ -f $(ENV_FILE)$(FORMAT_FILE) ] && [ "$$(cat $(ENV_FILE)$(FORMAT_FILE) | head -n 1)" != "// ENV: PROD" ]; then \
		mv $(ENV_FILE)$(FORMAT_FILE) $(ENV_FILE)".test"$(FORMAT_FILE); \
		mv $(ENV_FILE)".prod"$(FORMAT_FILE) $(ENV_FILE)$(FORMAT_FILE); \
	fi
	@ng serve --host 0.0.0.0 --port 8080 --disable-host-check
