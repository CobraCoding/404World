import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-nav">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span> 
                        </button>
                            <a className="navbar-brand" href="">404 World</a>
                        </div>
                        <div className="collapse navbar-collapse" id="main-nav">
                            <ul className="nav navbar-nav">
                                <li>
                                    <NavLink to={ '/' } exact activeClassName='active'>
                                        <span className='glyphicon glyphicon-home'></span> Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/counter' } activeClassName='active'>
                                        <span className='glyphicon glyphicon-education'></span> Counter
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={ '/fetchdata' } activeClassName='active'>
                                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                                    </NavLink>
                                </li>
                            </ul>
                            {/* <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
                            </ul> */}
                            <form className="navbar-form navbar-right" action="/action_page.php">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <div className="input-group-btn">
                                    <button className="btn btn-default" type="submit">
                                        <i className="glyphicon glyphicon-search"></i>
                                    </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                </div>;
    }
}
