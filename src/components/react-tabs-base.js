import React,{Children, PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className:PropTypes.string,
    activeIndex:PropTypes.number,
    onItemClick:PropTypes.func,
    overflow:PropTypes.oneOf(['hidden','scroll','auto']),
  };

  static defaultProps = {
    activeIndex:0,
    onItemClick:noop
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {
      activeIndex:props.activeIndex
    };
  }

  componentWillReceiveProps(nextProps){
    const activeIndex = nextProps.activeIndex;
    if(activeIndex !== this.state.activeIndex){
      this.setState({activeIndex});
    }
  }

  get children(){
    const { children } = this.props;
    const { activeIndex } = this.state;
    return Children.map(children,(child,index)=>{
      return <li onClick={this._onClick.bind(this,index)} className={classNames('item',{active:index===activeIndex})} children={child} />;
    })
  }

  _onClick = (inIndex,inEvent) =>{
    this.setState({ activeIndex:inIndex },()=>{
      this.props.onItemClick({
        target : {
          value: inIndex
        }
      });
    });
  };
}
