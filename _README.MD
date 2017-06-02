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
AUTO_PROPERTIES
```

## usage:
```jsx
BACKUP_USAGE
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

