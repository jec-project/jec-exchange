# JEC Exchange Project

JEC Exchange is a [JavaScript Enterprise Container][jec-url] project focused on the portability of JEC applications.

[![][jec-logo]][jec-url]

The `jslet` package contains classes and interfaces that describe and define the 
contracts between a jslet class and a conforming JEC runtime environment.

The `security` package represents the abstract layer that must be implemented by
a conforming JEC runtime environment to deploy secured applications.

## Requirements

JEC Exchange needs the following system parameters in order to work correctly:

- Node 6+
- npm 3+
- TypeScript 2+

## Installation

Set up the JEC Exchange module with:

```bash
$ npm install jec-exchange --save
```

## Using Components

All JEC Exchange components have to be imported with the ES6 syntax:

```javascript
import { HttpJslet, WebJslet, HttpRequest, HttpResponse } from "jec-exchange";

@WebJslet({
  name: "HelloWorld",
  urlPatterns: ["/hello"]
})
export class HelloWorld extends HttpJslet {
  
  public doGet(req:HttpRequest, res:HttpResponse, exit:Function):void {
    exit(req, res.send("Hello World!"));
  }
}
```

For a complete list of available components, please refer to the [API Reference](#api-reference) documentation.

## Running Tests

To execute all unit tests, use:

```bash
$ grunt test
```

## API Reference

The API Reference documentation is not included into the JEC Exchange node module. To build the API reference documentation, use:

```bash
$ grunt doc
```

Documentation will be generated in the `docs/api-reference` repository.
The online version of the  API reference documentation will be available soon at the JEC Website.

The documentation generator is [TypeDoc](http://typedoc.org/)

## Update Release Notes

**Current stable release:** [1.1.7](CHANGELOG.md#jec-exchange-1.1.7)
 
For a complete listing of release notes for all JEC Exchange update releases, see the [CHANGELOG](CHANGELOG.md) file. 

## License
This JEC Exchange Project is licensed under Apache 2.0. Full license text is available in [LICENSE](LICENSE).

```
Copyright 2016-2018 Pascal ECHEMANN.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

[jec-url]: https://jecproject.org
[jec-logo]: https://raw.githubusercontent.com/pechemann/JEC/master/assets/jec-logos/jec-logo.png