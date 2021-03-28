import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oops - we've looked overywhere and could not find this.
            </Header>
            <Segment.Inline>
                <Button as={Link} to={`/activities`} primary >
                    Return to activity page
                </Button>
            </Segment.Inline>
        </Segment>
    )
}