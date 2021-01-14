import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import { Tabs, Tab } from '../src/main';
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
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
