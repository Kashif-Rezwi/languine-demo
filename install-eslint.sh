#!/bin/bash

# Install eslint and plugins via npx
npx -p eslint -p @typescript-eslint/parser -p @typescript-eslint/eslint-plugin -p eslint-plugin-react -p eslint-config-next eslint --init

# Update package.json manually to add ESLint as a dev dependency
echo "ESLint and plugins installed through npx."
echo "You may need to add these to your package.json manually by adding these lines to devDependencies:"
echo '"eslint": "^8.56.0",'
echo '"@typescript-eslint/eslint-plugin": "^6.21.0",'
echo '"@typescript-eslint/parser": "^6.21.0",'
echo '"eslint-plugin-react": "^7.33.2",'
echo '"eslint-config-next": "14.2.5"' 