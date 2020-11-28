import React from "react";
import "./Establishment.css";
import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height: 400,
    margin: 10,
    minWidth: 350,
    cursor: "pointer",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  badge: {
    marginLeft: 40,
  },
}));

function Establishment({ establishment }) {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push(`/establishments/${establishment.id}`);
  };

  console.log(establishment);

  return (
    <Card className={`establishment ${classes.root} `} onClick={handleClick}>
      <CardHeader
        title={establishment.name}
        subheader={establishment.schedule}
      />
      <CardMedia
        className={classes.media}
        image={establishment.img}
        title={establishment.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {establishment.address}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <strong>Occupancy count: </strong>
          {establishment.current_count} / {establishment.max_count}
          {(establishment.current_count / establishment.max_count) * 100 >
            80 && (
            <Badge
              className={classes.badge}
              badgeContent="crowded"
              color="secondary"
            />
          )}
        </Typography>
      </CardContent>
      {/* <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions> */}
    </Card>
  );
}

export default Establishment;
