import * as React from "react";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from '@mui/material';

import parse from 'html-react-parser';

type PostData = {
    title: string,
    content: string,
    image: string
}

export default function SinglePost() {

    const location = useLocation();
    const [postDataId, setPostData] = useState({});
    const [postData, setCurrentPost] = useState<PostData>({image: '', title: '', content: ''});
    const [postLoading, setPostLoading] = useState(true);
    const [postError, setPostError] = useState(null);

    const env = process.env.STAGE;
    const url = process.env.URL;
    const certed = process.env.CERTED;
    const protocol = certed === 'false' ? 'http' : 'https';

    const fetchCurrentPost = async (id: string) => {
        const res = await fetch(
            `${protocol}://${env}${url}/api/getCurrentTopic?id=${id}`
        );

        return await res.json();
    };

    async function getPost() {
        try {
            setPostData(location.state);
            setPostLoading(true);
            const postData = await fetchCurrentPost(location.state);
            setCurrentPost(postData);
        } catch (e: any) {
            setPostError(e);
        } finally {
            setPostLoading(false);
        }
    }
    useEffect(() => {
        getPost();
    }, []);
    
    if (postError) {
        console.log('postError: ', postError);
        return <p>Failed to load Post data</p>;
    }

    return postLoading ? <p>Loading...</p> : (
        <>
            {postData != null && 
                <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
                        <br/><Typography color={'primary'}>{postData.title}</Typography>
                        <br/>
                        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
                            <img src={postData.image} width='400px' height='400px' alt='altTest'/>
                        </div>
                    <br/>
                    <br/>
                    <p>
                        <Typography color={'primary'}>{parse(postData.content)}</Typography>
                    </p>
                </div>
            }
        </>
    );
}
