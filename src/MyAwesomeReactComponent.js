import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

const styles = {
  container: {
    marginTop: 20
  },
};

injectTapEventPlugin();

const MyAwesomeReactComponent = () => (
    <Grid fluid>
        <Row>
            <Col xs md>
            <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
            />
            </Col>
        </Row>
        <Row>
            <Col xs md>
                <h1>My App</h1>
            </Col>
            <Col xs md>
                <RaisedButton label="Default" style={styles.container} />
            </Col>
        </Row>
    </Grid>
);

export default MyAwesomeReactComponent;