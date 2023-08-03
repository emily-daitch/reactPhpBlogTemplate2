import * as React from "react";
import {Typography, Box, Card} from '@mui/material'

import { Link } from 'react-router-dom';

type PostListInput = {
    id: string,
    title: string,
    image: string
}

export default function PostList({id, title, image}: PostListInput) {
    function slug(str: string) {
        return str.toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');
    }

    return (
        <Box padding={'auto'} justifyContent={'center'} display={'flex'} marginBottom={'15px'}>
            <Card>
                <Link to={slug(title)} state={id} color="#dddddd" style={{textDecoration:'none'}}>
                    <img height={'200px'} width={'200px'} src={image} alt={title}/>
                    <Typography textAlign={'center'} color={'#dddddd'}>{title}</Typography>
                </Link>
            </Card>
        </Box>
    );
}
