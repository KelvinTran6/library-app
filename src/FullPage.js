import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class FullPage extends React.Component {
  render() {
    return (
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Harry Potter
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              ct matter mostly revolves around contemporary Malaysia and while
              she evidently draws on elements of Chinese modernist literature,
              Ho’s style evokes the work of European modernists, including Franz
              Kafka and Italo Calvino, two writers she has mentioned as major
              influences
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Exit
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default FullPage;
