import React,{Children, PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import ReactTabsBase from './react-tabs-base';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends ReactTabsBase{
  get children(){
    const { children } = this.props;
    const { activeIndex } = this.state;
    return Children.map(children,(child,index)=>{
      return <li className={classNames('item',{active:index===activeIndex})} children={child} />;
    })
  }

  render(){
    const { className,activeIndex,onItemClick,...props } = this.props;
    return (
      <div {...props} data-active-index={this.state.activeIndex} className={classNames('react-tabs-body',className)}>
        <div className="scroller">{this.children}</div>
      </div>
    );
  }
}
