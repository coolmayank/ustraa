import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "@material-ui/lab/Rating";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const theme = createMuiTheme({
  typography: {
    subtitle1: {
      fontSize: 12
    },
    subtitle2: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: "italic"
    }
  }
});
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "green"
  },
  card: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 150
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    paddingTop: theme.spacing(0)
  }
}));

export default function MediaControlCard(props) {
  const classes = useStyles();
    return (
      <div>
        {props.products.map((products, index) => {
          return (
            <Card key={index} className={classes.card}>
              <CardMedia
                className={classes.cover}
                image={products.image_urls.x240}
                title={products.base_product_name}
              />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <ThemeProvider theme={theme}>
                    <Typography component="h8" variant="body1">
                      {products.base_product_name}
                    </Typography>

                    <Typography variant="subtitle1" color="textSecondary">
                      {products.name}
                    </Typography>
                    <Typography component="h5" variant="h6">
                      {products.tagline}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      color="textSecondary"
                      style={{ textDecorationLine: "line-through" }}
                    >
                      {products.product_category_content}
                    </Typography>
                  </ThemeProvider>
                </CardContent>
                <div className={classes.controls}>
                  <Button variant="contained" className={classes.button}>
                    Primary
                  </Button>
                </div>
              </div>
              <Box component="fieldset" borderColor="transparent" mt={2} ml={5}>
                <Typography component="legend" color="textSecondary">
                  {products.rating}
                  <Rating name="customized-10" value={0} max={1} size="small" />
                </Typography>
              </Box>
            </Card>
          );
        })}
      </div>
    );
}
