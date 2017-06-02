import './dev.scss';

import {
  ReactTabs,
  ReactTabsBody,
  ReactTabsMenu,
} from './main';

/*===example start===*/

// install: npm install afeiship/react-tabs --save
// import : import {  ReactTabs, ReactTabsBody, ReactTabsMenu } from 'react-tabs'

class App extends React.Component{
  state = {
    activeIndex:0
  };

  _click = (e) =>{
    const activeIndex = e.target.value;
    this.setState({activeIndex});
  };

  render(){
    return (
      <div className="hello-react-tabs">
        <ReactTabs>
          <ReactTabsMenu onItemClick={this._click} activeIndex={this.state.activeIndex}>
            <span>已开始</span>
            <span>进行中</span>
            <span>已结束</span>
          </ReactTabsMenu>
          <ReactTabsBody activeIndex={this.state.activeIndex}>
            <div className="bd">bd1</div>
            <div className="bd">bd2</div>
            <div className="bd">bd3</div>
          </ReactTabsBody>
        </ReactTabs>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
