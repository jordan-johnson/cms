# CMS

A super basic and lightweight content management system. This project is for learning React.

## Features

* User authentication with multiple users and permissions.

* Flexible object creation. Users with correct permissions can develop objects and their fields. For instance, a user can create a Contacts object with Name, Phone Number, and Email fields.

* When adding records, fields will be validated based on their expected data type.


## Installation

> NOTE: No binaries as of yet. Must build from source -- details below.

This project runs an API service alongside the react-based client. `cms/package.json` includes a `postinstall` script that will install the nested dependencies in `cms/api/package.json` and `cms/client/package.json`. Simply navigate to the root folder and run:

```
npm install
```

Next, run `npm start` in the root directory. This will run both the API and client servers. By default, the API service uses port `3001` and the client `3000`. To change the API port, modify `config/setup.json`. Changing the client port [requires a little more effort](https://stackoverflow.com/a/41770848).