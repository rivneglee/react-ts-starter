import React from 'react';
import './SimpleComponent.scss';

export interface Props {
  id: string;
}

export default (props: Props) => (
  <div className="cra-simple-component" id={props.id}>
    <span className="cra-simple-component__content">A Component</span>
  </div>
);
