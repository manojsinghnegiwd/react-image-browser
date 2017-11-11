import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class ToolbarExamplesSimple extends React.Component {

	render() {
		return (
			<Toolbar>
				<ToolbarGroup>
					<TextField
						hintText="Folder Path"
						underlineShow={false}
					/>
					<RaisedButton>
						Browse
					</RaisedButton>
				</ToolbarGroup>
			</Toolbar>
		);
	}

}