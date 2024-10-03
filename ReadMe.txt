Glósur fyrir GIT / NPM / NPX ofl
mkdir = nýr folder 
mkdir * nafn *  cd * nafn * npx create-react-app .


NPM = Node Package Manager / install globally or locally / npm install react - g til að install globally
NPX = Node Package Executor / npx create-react-app my-app


Stofna nýtt og starta React:
npx create-react-app / nafnið á verkefninu /
cd / nafnið á verkefninu /
npm start


Glósur:

The main difference between `npx` and `npm` lies in how they execute packages:

### **`npm` (Node Package Manager)**

- **Purpose**: `npm` is used to install and manage dependencies for your projects.
- **How It Works**:
  - You install packages globally or locally to a project using `npm`.
  - Example: `npm install react` installs React either locally to your project (default) or globally if you specify the `-g` flag.
  - After installation, you typically execute the package by using a script or command from the installed package in your project.

### **`npx` (Node Package Executor)**

- **Purpose**: `npx` is used to execute Node packages **without** needing to install them globally.
- **How It Works**:
  - `npx` can run commands from packages directly without needing to install them in your project or globally first.
  - Example: `npx create-react-app my-app` will run the `create-react-app` package without having it installed globally.
  - Useful for one-time package executions or when you don't want to clutter your global installation space.

### Key Differences:

- **Installation vs. Execution**: 
  - `npm` is primarily for **installing** packages (e.g., `npm install`), while `npx` is for **executing** a package directly (e.g., `npx create-react-app`).
  
- **Global Package Installation**:
  - With `npm`, if you need to use a package like `create-react-app` multiple times, you'd install it globally: `npm install -g create-react-app`.
  - With `npx`, you can execute it without installing globally: `npx create-react-app my-app`.

- **Version Management**:
  - `npx` always executes the latest version of a package unless you specify otherwise, while `npm` installs and locks the version at the time of installation (unless updated).

### Example:
- **Using `npm`**:
  - Install globally: `npm install -g create-react-app`
  - Run the app creator: `create-react-app my-app`

- **Using `npx`**:
  - Run the command directly without global install: `npx create-react-app my-app`

In summary, use `npm` to install and manage packages, and use `npx` when you need to quickly execute a package without the need to install it globally.