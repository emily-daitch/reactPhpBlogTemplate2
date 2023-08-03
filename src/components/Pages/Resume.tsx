import * as React from "react";
import { Link } from 'react-router-dom';
import Typography from "@mui/material/Typography";

// You can host your resume on google drive, or a platform of your preference and make it available here for viewing / downloading.
export default function Resume() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}><br/><Typography color={'primary'}>Resume</Typography>
            <br/><Link to='https://drive.google.com/file/d/1mBbvpMeTKAhM1y-A1mxXj2fRkFnqurlu/view?usp=sharing' style={{color: '#345678'}} target="_blank" rel="noopener noreferrer">
                View/Download my Resume
            </Link>
        </div>
    );
}
