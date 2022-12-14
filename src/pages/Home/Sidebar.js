import { Box, List, ListItemButton, ListItemIcon, ListItemText, styled } from '@mui/material';
import React from 'react';
import { Home, AllInbox, Archive, RestoreFromTrash, Settings, Group, Person } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const StyledText = styled(ListItemText)(({ theme })=>({
    [theme.breakpoints.only('xs')]: {
        display: 'none'
      },
}));
const Sidebar = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <Box flex={{xs: 0, md: 1}}>
            <Box position='fixed'>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItemButton as={Link} to='/home'
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <Home />
                        </ListItemIcon>
                        <StyledText primary="Home" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/blogs'
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <AllInbox />
                        </ListItemIcon>
                        <StyledText primary="Blogs" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/archive'
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <Archive />
                        </ListItemIcon>
                        <StyledText primary="Archive" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/trash'
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <RestoreFromTrash />
                        </ListItemIcon>
                        <StyledText primary="Trash" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/setting'
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <Settings />
                        </ListItemIcon>
                        <StyledText primary="Settings" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/group'
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon>
                            <Group />
                        </ListItemIcon>
                        <StyledText primary="Group" />
                    </ListItemButton>
                    <ListItemButton as={Link} to='/friend'
                        selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6)}
                    >
                        <ListItemIcon>
                            <Person />
                        </ListItemIcon>
                        <StyledText primary="Friends" />
                    </ListItemButton>
                </List>
            </Box>
        </Box>
    );
};

export default Sidebar;