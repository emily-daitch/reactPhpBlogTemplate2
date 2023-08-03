import * as React from "react";
import Link from '@mui/material/Link';

export default function Intro() {
    const portfolioUrl = `https://${process.env.PORTFOLIO_SITE}`;

    return (
        <>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
            <p>This is a test site built following this <Link href='https://www.youtube.com/watch?v=RQYpSfXUgn4' color='#345678'>
                YouTube tuorial</Link> by&ensp;
            <Link href='https://www.youtube.com/@ZarxBiz' color='#345678'>Zarx Biz</Link>, using php and MySQL. The tutorial used ChakraUI and create-react-app but I have switched to MaterialUI and removed the create-react-app dependency.
                It is hosted on an Apache server with Hostinger.</p>
            <p>This site frontend was built with React and the help of&nbsp;
                <Link href='https://mui.com' color='#345678'>MaterialUI</Link>.</p><br/>
            <p>You can find a guide to setting up your own project and hosting on the github&nbsp;
                <Link href='https://github.com/emily-daitch/reactPhpBlogTemplate#readme' color='#345678'>README</Link>.</p>
            <p>The test posts you see exist so that enough content is here to demo the pagination on the home page.</p><br/>
            <p>So far this site has support for: 
                <div className='List'>
                     -   paginated blog posts<br/>
                     -   resume page<br/>
                     -   contact info page<br/>
                     -   calendar / scheduling page<br/>
                </div>
                <br/>
                For fun I&apos;ve added an optional Strava page that serves as an example for presenting data from an external API&nbsp;
                <Link href='https://www.developers.strava.com/docs/reference/' color='#345678'>(Strava)</Link> using&nbsp;
                <Link href='https://www.canvasjs.com' color='#345678'>CanvasJS charts</Link>.</p><br/>
            <p>See my main portfolio site <Link href={portfolioUrl} color='#345678'>here</Link>.</p>

        </div></>
    );
}