# Paquetes instalados en el proyecto

## Configuración de PrimeNG

Lo primero es instalar los paquetes de PrimeNG y PrimeIcons con el siguiente comando:

```txt
pnpm i primeng primeicons -S
```

Luego, dentro del archivo `angular.json` añadimos las siguientes líneas y recargamos el servidor:

```json
{
    ...,
    "projects": {
        "actfis": {
            ...,
            "architect": {
                "build": {
                    ...,
                    "options": {
                        "styles": {
                            "src/styles.css",
                            "node_modules/primeicons/primeicons.css",
                            "node_modules/primeng/resources/themes/lara-light-blue/theme.css",
                            "node_modules/primeng/resources/primeng.min.css"
                        }
                    }
                }
            }
        }
    }
}
```

## Animate.css

Se hace uso de Animate.css para simplificar las animaciones de los elementos. Su instalación se realiza con el siguiente comando:

```txt
pnpm i animate.css -S
```
