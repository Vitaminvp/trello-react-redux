import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CardItem extends Component {
    render() {
        return (
            <Card style={styles.container}>
                <CardContent>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    </Typography>
                </CardContent>
            </Card>
        );
    }
}
const styles = {
    container: {
        marginBottom: 10
    }
}
export default CardItem;