import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { WelcomeBanner } from './Home/WelcomeBanner'

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div className="row">
            <WelcomeBanner />
        </div>;
    }
}
