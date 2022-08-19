import React from 'react';
import ListItem from '@mui/material/ListItem';

import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import PhoneCallbackIcon from '@mui/icons-material/PhoneCallback';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';

import MoreVertIcon from '@mui/icons-material/MoreVert';

import {to12Hours} from "../helpers/date";

const ActivityItem = (props) => {
    const { id, created_at, direction, from, to, via, duration, is_archived, call_type } = props.activity
    return (
        <ListItem button key={id}>
            <Stack direction="row"
                   justifyContent="space-between">
                {direction === "inbound" && <PhoneCallbackIcon/>}
                {direction === "outbound" && <PhoneForwardedIcon/>}
                <ListItemText primary={from} secondary={to} />
                <MoreVertIcon/>
                <Chip label={to12Hours(created_at)} />
            </Stack>
        </ListItem>
    );
};

export default ActivityItem;
