import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Start from './containers/Start';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Start} />
	</Route>
);
