# react-calculator-app
A simple calculator made from react. It's a part of learning react.
- Website - https://bladearya.github.io/react-calculator-app/

# Steps
- Create a react app "npx create-react-app {name_of_the_react_app}"
- Install "npm install gh-pages --save-dev"
- Open package.json file in your react app and add the following code -
  -  Add "homepage": "https://{username}.github.io/{repo-name}" after "private"
  - Add "predeploy":"npm run build" and "deploy":"gh-pages -d build" in "scripts"
  - Then "git init" 
  - And "git remote add origin https://github.com/{username}/{repo-name}.git"
  - Atlast run "npm run deploy" command
 - The website will be uploaded on "https://{username}.github.io/{repo-name}"
