import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import React from "react";

function CardComponent() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://via.placeholder.com/1920x1080"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">
                  A simple paragraph is the first element taught in writing. It
                  is an independent entity, without any connection to any other
                  topic, thought or idea. It exists on its own.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://via.placeholder.com/1920x1080"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">
                  A simple paragraph is the first element taught in writing. It
                  is an independent entity, without any connection to any other
                  topic, thought or idea. It exists on its own.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://via.placeholder.com/1920x1080"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">
                  A simple paragraph is the first element taught in writing. It
                  is an independent entity, without any connection to any other
                  topic, thought or idea. It exists on its own.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item lg={3}>
          <Card>
            <CardActionArea>
              <CardMedia
                image="https://via.placeholder.com/1920x1080"
                style={{ height: 200 }}
              />
              <CardContent>
                <Typography variant="h4">Post Title</Typography>
                <Typography variant="subtitle1">
                  A simple paragraph is the first element taught in writing. It
                  is an independent entity, without any connection to any other
                  topic, thought or idea. It exists on its own.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button>Read More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default CardComponent;
