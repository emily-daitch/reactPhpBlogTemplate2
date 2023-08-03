import * as React from "react";
import { useEffect, useState } from 'react';

import { slug } from '../../utils/slug';

import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { TextField, List, ListItem, Link } from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { DarkMode, LightMode, Search, ArrowDownward
 } from '@mui/icons-material';
import ThemeSwitcherButton from "./ThemeSwitcherButton";

export default function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    type SearchResultItem = {
        id: string;
        title: string;
      };

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [searchResultItems, setSearchResultItems] = useState([]);

    useEffect(() => {
        const env = process.env.STAGE;
        const url = process.env.URL;
        const certed = process.env.CERTED;
        const protocol = certed === 'false' ? 'http' : 'https';
        
        const fetchSearchResults = async (searchTerm: string) => {
            let res;
            try{
                res = await fetch(
                    `${protocol}://${env}${url}/api/searchResults?keyword=${searchTerm}`
                );
            } catch(err){
                res = new Response('{}');
            }
  
          
            const data = await res.json();
            return data;
        };

        const getUsersInput = setTimeout(() => {
            fetchSearchResults(searchTerm).then((item) => {
                setSearchResultItems(item.posts);
            });
        }, 100);

        return () =>clearTimeout(getUsersInput);
    }, [searchTerm]);

    const [openDialog, setOpenDialog] = React.useState(false);
    const handleSearchTermChange = (event: any) => {
        setSearchTerm(event.target.value);
      };
    const handleOpenDialog = () => {
      setOpenDialog(true);
    };
  
    const handleCloseDialog = () => {
      setOpenDialog(false);
    };
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const pages = ['Home', 'Contact', 'Resume', 'Calendar'];

    return (
        <>
        <AppBar position="fixed" elevation={0}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#D8C3D5',
                  textDecoration: 'none',
                }}
              >
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleOpenNavMenu}
                    color={"default"}
                  >
                    <MenuIcon />
                  </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Button
                        key={page}
                        href={`/${page == 'Home' ? '' : page}`}
                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
                      >
                        {page}
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
    
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: '#8D5286',
                  textDecoration: 'none',
                }}
              >
    
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                {pages.map((page) => (
                  <Button
                    key={page}
                    href={`/${page == 'Home' ? '' : page}`}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#FFFFFF', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
    
              <ThemeSwitcherButton/>

              <Box sx={{ flexGrow: 0 }}>
                  <a onClick={(e) => { if (window.innerWidth > 768) { e.preventDefault(); handleOpenDialog(); } }} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton sx={{ p: 0 }}>
                      <Search />
                    </IconButton>
                  </a>
              </Box>
              <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Search</DialogTitle>
                <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="search"
                            label="Search Criteria"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={handleSearchTermChange}
                        />
                    </DialogContent>
                    <DialogContent>
                    {searchResultItems && 
                        <List>
                            {searchResultItems.map(
                                function(item: SearchResultItem)
                                    {
                                        return (
                                            <Link href={slug(item.title)} key={item.id}>
                                                <ListItem
                                                    key={item.id}>
                                                    {item.title}
                                                </ListItem>
                                            </Link>);
                                    }
                            )}
                        </List>
                    }
                    </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog} color="primary">
                    Close
                  </Button>
                </DialogActions>
              </Dialog>
            </Toolbar>
          </Container>
        </AppBar>
        <div style={{height: '70px'}}></div>
        </>
      );
}