import { Paper } from '@mui/material';

export const Container = ({ background, padding = 0, children }) => {
    return (
        <Paper style={{ margin: '5px 0', background, padding: `${padding}px` }}>
            {children}
        </Paper>
    );
};
