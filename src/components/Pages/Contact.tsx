import * as React from "react";
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";

export default function Contact() {
    const win: Window = window;
    // You can provide additional links to various socials on this page. For now I have linkedin and a mailto button.
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}><br/><Typography color={'primary'}>Contact</Typography>
            <br/><Link to='https://www.linkedin.com/in/emilydaitch' target="_blank" rel="noopener noreferrer" style={{color: '#345678'}}>Linkedin</Link>
            <Button sx={{margin: 'auto'}} onClick={() => win.location = 'mailto:emily.daitch@gmail.com'} style={{color: '#345678', textDecoration: 'underline'}}>Email Me</Button>
        </div>
    );
}
