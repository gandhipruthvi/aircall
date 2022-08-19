import React, {useState, useEffect} from 'react';
import axios from "axios";

import List from '@mui/material/List';
import ActivityItem from "../components/ActivityItem";

import { activities as activitiesEndpoint} from "../endpoints";

function ActivityLog(props) {

    const [activities, setActivities] = useState([]);
    const [error, setError] = useState(null);
    const fetchActivitiesHandler = () => {
        try{
            setError(null)
            axios.get(activitiesEndpoint)
                .then((response) => {
                    if (response.status === 200){
                        console.log(response.data)
                        setActivities(response.data)
                    }
                })
        }
        catch (error){
            setError(error)
        }
    }

    React.useEffect( fetchActivitiesHandler, [])

    return (
        <List>
            {activities.map((activity) => (
                <ActivityItem
                    activity={activity}
                />
            ))}
        </List>
    );
}

export default ActivityLog;