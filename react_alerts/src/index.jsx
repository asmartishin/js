import 'sass/index';

import React from 'react';
import ReactDOM from 'react-dom';
import AlertsContainer from 'jsx/alerts';

let startTimestamp = Math.floor(Date.now() / 1000) - 1800 + '0'.repeat(9);

ReactDOM.render(
        <AlertsContainer url={`/alerts/get/?start=${startTimestamp}`} pollInterval={2000} />,
        document.getElementById('content')
);
