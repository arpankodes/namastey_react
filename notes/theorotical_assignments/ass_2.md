## What is NPM?
npm is a package manager for Nodejs. Helps install open source packages from npm Registry.

## What are bundler and why do we need them?
Bundlers help in making an app performant by performing the following tasks:
- resolving, transforming, bundling, compressing, optimizing.
Some of the features of parcel
- Hot module replacemnet on live dev servers
- https
- caching, content delivery optimization

## nox
executes <command /> and even installs any package required to run that command

## difference between "dependencies" and "devDependencies" in package.json
devDependencies are the dependencies/ packages required only in dev environment and not in production. In order to improve the performance in production they are kept separately.

## Tree Shaking
parcel analysis imports and exports of each module and remove everything that is not used

## Hot module replacement
parcel watches files continuously for any change, so that during re-building the app, parcel only replaces the files that has any changes which significantly reduces the build time.

## 5 super powers of parcel
  - caching of assets
  - minification
  - tree Shaking
  - https
  - hot module replacement

## .gitignore
its a text file to which the files in the repo, which the developer wants to ignore for version control can be added.
node_modules or any other file that can be regenerated at he server is ignored.

## difference between package.json and package-lock.json
package.json is a config file for nodejs package that contains everything about the project. It also contains dependencies and dev devDependencies
package-lock.json takes the snapshot of the exact same versions of the dependency packages for other devs or team members to install exact same dependencies

## why package-lock.json should not be modified?
it tracks the exact tree of dependencies. It is a generated file, not to be edited manually. One should commit package-lock

## node_modules
is the collection of node packages that may be required in a particular project, and their dependencies as well

## dist folder
dist folder contains the minified version of the source code

## browserslist in package.json
one can add the browsers and versions(older) on which one wants his application to be compatible with (backward compatibility)

## ^caret and ~tilda <version> in package.json
caret : accepts minor updates, bug fixes (patch versions). enables backward compatibility as well
tilda: accepts only patch updates (bug fixes)

## script type attribute
module
importmap
