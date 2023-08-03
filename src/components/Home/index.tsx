import React, { useState, useEffect, lazy } from 'react';

import Pagination from '@mui/material/Pagination';
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'

const Intro = lazy(() => import(/* webpackChunkName: "intro" */ '../blogComponents/Intro'));
const PostList = lazy(() => import(/* webpackChunkName: "postList" */ '../blogComponents/PostList'));

type Post = {
    id: string,
    title: string,
    content: string,
    image: string
}

export default function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 8;
    const [postsTotal, setPostsTotal] = useState(0);
    const [posts, setPosts] = useState([] as Post[]);

    const env = process.env.STAGE;
    const url = process.env.URL;
    const certed = process.env.CERTED;
    const fakeDB = process.env.REACT_APP_FAKE_DB;
    const protocol = certed === 'false' ? 'http' : 'https';

    useEffect(() => {        
        const fetchPosts = async (pageSize: string, offset: string) => {
            if(fakeDB === 'true'){
                setPostsTotal(Number(pageSize));
                const fakePosts: Post[] = [];
                for(let i = 0; i < Number(pageSize); i++){
                    fakePosts.push({
                        id: i.toString(),
                        title: `title${i}`,
                        content: 'content',
                        image: 'https://ik.imagekit.io/emilydaitch/Test2.jpg?updatedAt=1680724497500' //replace with publicly available image (that I am not hosting)
                    });
                }
                setPosts(fakePosts);
                return;
            }
            console.log('fetching with pageSize', pageSize, 'and offset', offset);
            let res;
            try{
                res = await fetch(
                    `${protocol}://${env}${url}/api/posts?limit=${pageSize}&offset=${offset}`
                );
            } catch(err){
                res = null;
            }
            
            const data = res ? await res.json() : {count:0, posts:null};

            return data;
        };

        fetchPosts(pageSize.toString(), (pageSize*(currentPage - 1)).toString()).then((fetchedPosts) => {
            setPostsTotal(fetchedPosts.count);
            setPosts(fetchedPosts.posts);
        });

    }, [pageSize, currentPage]);

    const handleChange = (event: any, value: any) => {
        setCurrentPage(value);
      };

    return (
        <Box color={'primary'}>
            <Intro/>
                <Grid container direction={'row'}>
                    {posts ? posts?.map(function({id, title, image}){
                        return <Grid item xs={12} sm={6} lg={3}> <PostList key={id} id={id} title={title}
                            image={image}/> </Grid>;
                    }) : <></>}
                </Grid>
                <Pagination count={postsTotal/pageSize} page={currentPage} onChange={handleChange}/>
        </Box>
    );
}
