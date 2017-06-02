# react-tabs
> Tabs component for react.


## react-tabs-base:
```javascript
  // react-tabs-base
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    activeIndex:PropTypes.number,
    onItemClick:PropTypes.func,
  };

  static defaultProps = {
    activeIndex:0,
    onItemClick:noop
  };
  /*===properties end===*/
```

## properties:
```javascript

  static propTypes = {
    className:PropTypes.string
  };

  static defaultProps = {
  };
  
```

## usage:
```jsx

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

```


## dependencis:
```scss
/* customize your css */
.react-tabs{
  &-menu{
    display: flex;

    >.item{
      color:#000;
      padding:10px 0;
      background: #eee;
      text-align: center;
      margin:0 1px;
      flex:1;
      &.active{
        color:#FFF;
        background: #999;
      }
    }
  }

  &-body{
    >.item{
      border:1px solid #eee;
      padding:10px;
      display: none;
      &.active{
        display: block;
      }
    }
  }
}
```


## resource:
+ http://www.cnblogs.com/Kummy/p/4966937.html
+ https://github.com/steven5538/vue-button
+ https://yarnpkg.com/en/docs/install

