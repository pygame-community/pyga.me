import styles from '@/styles/button.module.css';
import React from 'react';

interface ButtonProps {
  text: string;
  fontSize: string;
  link: string;
}

export default class Button extends React.Component<ButtonProps, any> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return (
      <a href={this.props.link}>
        <div className={styles.button}>
          <div style={{ fontSize: this.props.fontSize }}>{this.props.text}</div>
        </div>
      </a>
    );
  }
}
