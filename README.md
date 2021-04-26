# station
Capabilities

## Install

Install dependencies: 
```
yarn install
```

Build TS files:
```
yarn build
```
set .env variables from .env.example. For publishing you need to set SUPERFACE_STORE_REFRESH_TOKEN you can obtain it on https://superface.dev/auth/github

## Usage

**Compile maps and profiles**

Compiles files into `superface/grid` folder.

```
yarn compile
```

**Create profile**

Creates scope and usecae folders, creates `profile.supr` file (with basic template) and adds profile to `super.json`.

```
yarn create:profile {scope}/{usecase} 
```

**Create provider**

Creates provider.json, adds it to super.json

```
yarn create:provider {provider}
```

**Create map**

Create a map file, test file and adds newly created map to to super.json

```
yarn create:map {scope}/{usecase} {provider}
```

**Test**

Most of the test need some sort of secrets so running all test files:
```
//This will probably fail
yarn test
```
will probably fail.

To test single map/usecase set secrets to `.env.capabilities` and run: 

```
yarn test {path to test}
```

To enable debugging to see what's going on inside the SDK, use:

```
yarn test:debug
```

**Upload:**

Uploads map/profile/provider to Store - use paths to `.supr` file for profiles, `.suma` for maps and `.json` for providers. Do not use path ending with `.ast.json` (compiled files).

```
yarn upload {path}
```


## Adding new capability

First, create new profile:

```
 yarn create:profile {scope}/{usecase}
```
Edit created .supr file

Secondly, create new provider:

```
 yarn create:provider {provider}
```

Edit created .json file

Next, create map for created profile and provider

```
 yarn create:map {scope}/{usecase} {provider}
```

Edit created .suma file and test file (.test.ts)

Compile created files:

```
 yarn compile
```

Test created capability

```
 yarn test {path to test file}
```

Upload newly created files
```
yarn upload {path to profile}
yarn upload {path to map}
yarn upload {path to provider}
```

## Enviroment variables

Secretes used for authentication during tests are stored in `.env.capabilities` and loaded using dotenv. Run `cp .env.capabilities.example .env.capabilities` to start from the template.
