import React from 'react';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const styles = {
	toolbar: {
		backgroundColor: '#4285f4',
		width: '100%'
	},
	underlineStyle: {
		borderColor: 'white'
	},
	hintStyle: {
		color: 'white'
	},
	inputStyle: {
		color: 'white'
	}
}

export default class Header extends React.Component {

	render() {
		return (
			<Toolbar style={styles.toolbar}>
				<ToolbarGroup>
					<TextField
						inputStyle={styles.inputStyle}
						hintText="Folder Path"
						underlineStyle={styles.underlineStyle}
						underlineFocusStyle={styles.underlineStyle}
						hintStyle={styles.hintStyle}
					/>
				</ToolbarGroup>
				<ToolbarGroup lastChild={true}>
					<RaisedButton>
						Browse
					</RaisedButton>
				</ToolbarGroup>
			</Toolbar>
		);
	}

}