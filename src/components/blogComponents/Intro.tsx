import * as React from "react";
import Link from '@mui/material/Link';

export default function Intro() {
    const portfolioUrl = `https://${process.env.PORTFOLIO_SITE}`;

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            {/* You can add introduction/content to precede the list of blog posts on the home page here. */}
            
            {/* You can remove this line if this is your main portfolio, but if this is a project you can link to your portfolio here through an environment variable. */}
            <p>See my main portfolio site <Link href={portfolioUrl} color='#345678'>here</Link>.</p>
        </div></>
    );
}