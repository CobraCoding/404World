import * as React from 'react';
import { NavMenu } from './NavMenu';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div className='container-fluid'>
            <div className='row'>
            <NavMenu /> 
            <div className='col-xs-12 col-sm-12 col-md-12 background'>
                { this.props.children }
            </div>
            </div>
        </div>;
    }
}
