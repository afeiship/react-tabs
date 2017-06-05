import React,{Children, PureComponent, cloneElement} from 'react';

import PropTypes from 'prop-types';
import ReactTabsBase from './react-tabs-base';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';

export default class extends ReactTabsBase{
  render(){
    const { className,activeIndex,onItemClick,...props } = this.props;
    return (
      <menu {...props} data-active-index={this.state.activeIndex} className={classNames('react-tabs-menu',className)}>
        <div className="scroller">{this.children}</div>
      </menu>
    );
  }
}
