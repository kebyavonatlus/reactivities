import React from "react";
import { Button, Card, Icon, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    cancelSelectedActivity: () => void;
}

export default function ActivityDetais({ activity, cancelSelectedActivity}: Props) {
    return (
        <Card fluid>
            <Image src={`/assets/categoryImages/${ activity != undefined ? activity.category : ''}.jpg`} />
            <Card.Content>
                <Card.Header>{activity != undefined ? activity.title : ''}</Card.Header>
                <Card.Meta>
                    <span>{activity != undefined ? activity.date : ''}</span>
                </Card.Meta>
                <Card.Description>
                    {activity != undefined ? activity.description : ''}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button basic color='blue' content='Edit' />
                    <Button onClick={cancelSelectedActivity} basic color='grey' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}