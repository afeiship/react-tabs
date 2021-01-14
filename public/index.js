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
        <Tabs value="key1">
          <Tab value="key1" title="tab1">
            Tab content1
          </Tab>
          <Tab value="key2" title="tab2">
            Tab content2
          </Tab>
        </Tabs>
        <button className="button is-primary is-fullwidth">Start~</button>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
