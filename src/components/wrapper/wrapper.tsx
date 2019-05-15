import * as React from 'react';

export class WrapperComponent extends React.Component<any, any> {
    public render() {
        return this.props.children;
    }
}
