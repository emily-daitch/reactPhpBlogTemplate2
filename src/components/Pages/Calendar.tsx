import * as React from "react";
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";

export default function Calendar() {
    // You can use these environment variable to provide a calendar and scheduling link, or you could remove this page from the site or change it's components.
    const calendar_link = process.env.GOOGLE_CALENDAR_LINK;
    const calendly_link = process.env.CALENDLY_SCHEDULE_LINK as string;
    console.log('calendar link', calendar_link);
    console.log('calendly link', calendly_link);

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}><br/><Typography color={'primary'}>Calendar</Typography>
            <br/><div style={{justifyContent: 'center', display: 'flex'}}>
                <iframe src={calendar_link} 
                    style={{border: 'solid 1px #777'}} 
                    width="800" 
                    height="600" 
                    frameBorder="0" 
                    scrolling="no"></iframe>
            </div>
            <br/>
            <p>Schedule a meeting with me <Link to={calendly_link} target="_blank" rel="noopener noreferrer" style={{color: '#345678'}}>here</Link>.</p>
        </div>
    );
}
