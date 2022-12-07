import { AppBar, Drawer, List, ListItem, Toolbar, Typography } from '@mui/material';
import React from 'react';

export default function NavDrawer() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" noWrap>
            MUI Example App
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={true}
      >
        <List>
          {[{ text: "Input Form" }, { text: "Contact Card Grid" }].map((nav, index) => (
            <ListItem key={nav.text}>{nav.text}</ListItem>
          ))}
        </List>
      </Drawer>

      <main>
      </main>
    </>
  )
}
