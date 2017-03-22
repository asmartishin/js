import React from 'react';
import ReactDOM from 'react-dom';
const utils = require('./lib/utils.js');


var Alert = React.createClass({
    render: function() {
        if (utils.pathExists(this, 'props.data.message.children.alert')) {
            const alertStatus = utils.getFirstKey(this.props.data.message.children.alert) || '';
            return (
                <div className="alert">
                    <span className="description">{this.props.data.message.status}</span>
                    <br />
                    <span className="status">{this.props.data.message.description}</span>
                    <br />
                    <span className="status">{alertStatus}</span>
                </div>
            );
        }
    }
});


var AlertsContainer = React.createClass({
    loadAlertsFromServer: function() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadAlertsFromServer();
        setInterval(this.loadAlertsFromServer, this.props.pollInterval);
    },

    render: function() {
        return (
            <div id="alerts-container">
                <h2>Alerts</h2>
                <AlertsList data={this.state.data} />
            </div>
        );
    }
});


var AlertsList = React.createClass({
    render: function() {
        var alertNodes = this.props.data.map(function(alert, index) {
            return (
                <Alert key={index} data={alert.data}></Alert>
            );
        });
        return (
            <div id="alerts-list">
                {alertNodes}
            </div>
        );
    }
});


export default AlertsContainer
