/* main.js */

'use strict';

var React = require('react');
var Sidebar = require('./components/sidebar.js');
var Navbar = require('./components/navbar.js');

import '../vendor/bootstrap/dist/css/bootstrap.css';
import './css/style.css';

var Main = React.createClass({
    render: function() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    <Navbar />
                    <div className="col-xs-12 col-sm-7 col-sm-offset-4 col-md-9 col-md-offset-3">
                        <div className="page-header">
                            <h1>Article</h1>
                        </div>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>      
        );
    }
});

React.render(<Main />, document.body);