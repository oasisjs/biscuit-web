import { FunctionComponent } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';

const Progressbar: FunctionComponent<LinearProgressProps & { value: number }> = (props) => {
	return (
		<Box sx={{ display: 'flex', alignItems: 'center' }}>
			<Box sx={{ width: '100%', mr: 1 }}>
				<LinearProgress variant="determinate" {...props} />
			</Box>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};

export default Progressbar;