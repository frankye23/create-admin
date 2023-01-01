# create-admin

## Description
Create a background template project with a single command.Just like vue-cli, you can use the global command to generate projects directly after installing it.

## Template
This script is relatively simple. The core of this script is to use the git clone command to pull code from another template project to generate a new project.It is also possible to pull the code after directly accessing the template project repository. The template project code address is as follows：
`
git clone https://github.com/frankye23/vue3-project-management.git
`

## Dependencies
* figlet
* util
* chalk
* clear
* fs
* ...

## Installation
```
$ npm install dx-backend-cli -g
```

## create project
```
$ dx-backend-cli init projectName(replace)
```

