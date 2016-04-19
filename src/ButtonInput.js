import React from 'react';
import Button from './Button';
import FormGroup from './FormGroup';
import InputBase from './InputBase';
import childrenValueValidation from './utils/childrenValueInputValidation';
import deprecationWarning from './utils/deprecationWarning';

class ButtonInput extends InputBase {
  renderFormGroup(children) {
    /* eslint-disable */
    let {bsStyle, value, ...other} = this.props;
    return <FormGroup {...other}>{children}</FormGroup>;
    /* eslint-enable */
  }

  renderInput() {
    let {children, value, ...other} = this.props;
    let val = children ? children : value;
    return <Button {...other} componentClass="input" ref="input" key="input" value={val} />;
  }
}

ButtonInput.types = Button.types;

ButtonInput.defaultProps = {
  type: 'button'
};

ButtonInput.propTypes = {
  type: React.PropTypes.oneOf(ButtonInput.types),
  bsStyle() {
    // defer to Button propTypes of bsStyle
    return null;
  },
  children: childrenValueValidation,
  value: childrenValueValidation
};

export default deprecationWarning.wrapper(ButtonInput,
  '`<ButtonInput>`',
  '`<Button>` directly'
);
