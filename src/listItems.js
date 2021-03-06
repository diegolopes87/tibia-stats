
import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PieChartIcon from '@material-ui/icons/PieChart';
import AdbIcon from '@material-ui/icons/Adb';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <div>
    <Link to="/loot-stats">
      <ListItem button>
        <ListItemIcon>
          <PieChartIcon />
        </ListItemIcon>
        <ListItemText primary="Loot Stats" />
      </ListItem>
    </Link>
    <Link to="/hunts">
      <ListItem button>
        <ListItemIcon>
          <AdbIcon />
        </ListItemIcon>
        <ListItemText primary="Hunting Places" />
      </ListItem>
    </Link>
    <Link to="/quests">
      <ListItem button>
        <ListItemIcon>
          <AdbIcon />
        </ListItemIcon>
        <ListItemText primary="Quests" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div><h1>Secondary List Items</h1></div>
);