# react-tabs
> Tabs component for react.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-tabs
```

## properties
| Name      | Type    | Required | Default | Description                           |
| --------- | ------- | -------- | ------- | ------------------------------------- |
| className | string  | false    | -       | The extended className for component. |
| value     | string  | false    | -       | The changed value.                    |
| extra     | element | false    | -       | The extra element.                    |
| onChange  | func    | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@jswork/react-tabs/dist/style.css";

  // or use sass
  @import "~@jswork/react-tabs/dist/style.scss";

  // customize your styles:
  $react-tabs-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import { Tabs, Tab } from '@jswork/react-tabs';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/react-tabs">
          <Tabs value="key1">
            <Tab value="key1" title="tab1">
              Tab content1
            </Tab>
            <Tab value="key2" title="tab2">
              Tab content2
            </Tab>
          </Tabs>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-tabs/


## license
Code released under [the MIT license](https://github.com/afeiship/react-tabs/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-tabs
[version-url]: https://npmjs.org/package/@jswork/react-tabs

[license-image]: https://img.shields.io/npm/l/@jswork/react-tabs
[license-url]: https://github.com/afeiship/react-tabs/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-tabs
[size-url]: https://github.com/afeiship/react-tabs/blob/master/dist/react-tabs.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-tabs
[download-url]: https://www.npmjs.com/package/@jswork/react-tabs
