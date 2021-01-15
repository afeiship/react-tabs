import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Tab from './tab';

const CLASS_NAME = 'react-tabs';
const isTab = (child) => child.type === Tab;

export default class ReactTabs extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The default value.
     */
    defaultValue: PropTypes.string,
    /**
     * The runtime value.
     */
    value: PropTypes.string,
    /**
     * The trigger event.
     */
    trigger: PropTypes.array,
    /**
     * The extra element.
     */
    extra: PropTypes.element,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    trigger: ['onClick'],
    onChange: noop
  };

  constructor(inProps) {
    super(inProps);
    const { defaultValue } = inProps;
    this.state = { value: defaultValue };
  }

  shouldComponentUpdate(inProps) {
    const { value } = inProps;
    if (typeof value !== 'undefined' && value !== this.state.value) {
      this.setState({ value });
    }
    return true;
  }

  get menu() {
    const items = this.props.children.filter(isTab);
    return React.Children.map(items, (child) => {
      const { title, value } = child.props;
      return { title, value };
    });
  }

  get children() {
    const _value = this.state.value;
    return React.Children.map(this.props.children, (child) => {
      const { title, value, ...props } = child.props;
      return React.cloneElement(child, {
        ...props,
        'data-active': _value === value
      });
    });
  }

  get triggers() {
    const { trigger } = this.props;
    const result = {};
    trigger.forEach((onEvent) => {
      result[onEvent] = this.handleTrigger;
    });
    return result;
  }

  handleTrigger = (inEvent) => {
    const { value } = inEvent.target.dataset;
    const { onChange } = this.props;
    const target = { value };
    this.setState(target);
    onChange({ target });
  };

  render() {
    const { className, value, children, extra, trigger, ...props } = this.props;
    const _value = this.state.value;

    return (
      <section
        data-component={CLASS_NAME}
        data-value={_value}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <nav className={`${CLASS_NAME}__nav`}>
          {this.menu.map((menu) => (
            <div
              className="is-item"
              data-value={menu.value}
              data-active={_value === menu.value}
              key={menu.value}
              {...this.triggers}>
              {menu.title}
            </div>
          ))}
        </nav>
        <div className={`${CLASS_NAME}__content`}>{this.children}</div>
        {extra}
      </section>
    );
  }
}
