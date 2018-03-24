import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class WelcomeBanner extends React.Component<{},{}> {

    render() {
        return <div className="col-xs-12 col-sm-12 col-md-12 welcome-banner">
                    <div>
                        <h1>404 World!</h1>
                        <p>Welcome to the application where you can never find the right page</p>
                    </div>
                </div>;
    }
}