# NODE JS

# Steps.

## 1. Download Node.js

1. We can use the Node Version Manager (nvm). Read the documentation from 
[Github](https://github.com/nvm-sh/nvm?tab=readme-ov-file#intro). To install 
we can do the next steps.

```bash

# Download and install nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh

# in lieu of restarting the shell
bash ."$HOME/.nvm./nvm.sh"

```

2. Install the version of Node.js and the package manager that you want. By 
default Node.js use npm, so it's installed. 

```bash

# Download and install Node.js:
nvm install 18

# Verify the Node.js version:
node -v         # Shoud print "v18.20.8"
nvm current     # Should print "v18.20.8"

# Download and install pnpm:
corepack enable pnpm

# Verify pnpm version:
pnpm -v

```
