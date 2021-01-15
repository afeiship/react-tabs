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
| Name         | Type    | Required | Default     | Description                           |
| ------------ | ------- | -------- | ----------- | ------------------------------------- |
| className    | string  | false    | -           | The extended className for component. |
| defaultValue | string  | false    | -           | The default value.                    |
| value        | string  | false    | -           | The runtime value.                    |
| trigger      | array   | false    | ['onClick'] | The trigger event.                    |
| extra        | element | false    | -           | The extra element.                    |
| onChange     | func    | false    | noop        | The change handler.                   |


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
          <Tabs
            defaultValue="key1"
            onChange={(e) => {
              console.log('runtime value:', e.target.value);
            }}>
            <Tab value="key1" title="tab1 title">
              Tab content1
            </Tab>
            <Tab value="key2" title="tab2 title">
              Tab content2
            </Tab>
            <Tab value="key3" title="tab3 title">
              Tab content3
            </Tab>
          </Tabs>

          <Tabs
            defaultValue="key1"
            trigger={['onMouseEnter']}
            onChange={(e) => {
              console.log('runtime value:', e.target.value);
            }}>
            <Tab value="key1" title="tab1 title">
              Tab content1
            </Tab>
            <Tab value="key2" title="tab2 title">
              Tab content2
            </Tab>
            <Tab value="key3" title="tab3 title">
              Tab content3
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
