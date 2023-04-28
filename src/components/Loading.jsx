import { CircularProgress, Fade } from '@mui/material'

const Loading = ({loading}) => {
    return (
        <Fade
            in={loading}
            unmountOnExit
        >
            <CircularProgress color='primary' />
        </Fade>
    );
};


export default Loading;