import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  padding: 10,
  margin: 10
};

const ImageThumbail = (props) => {
	return (
		<Paper style={style} zDepth={1}>
			<img src={props.src} height={100} />
		</Paper>
	)
}

export default ImageThumbail;