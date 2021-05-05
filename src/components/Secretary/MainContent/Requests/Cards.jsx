import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStylesTow = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 150,
    background: 'white',
    color: 'black',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStylesTow();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.classContentStyles}>
        <Typography variant="h5" component="h2">
          Cuenta
        </Typography>
        <Typography variant="body2" component="p">
          23
        </Typography>
      </CardContent>
    </Card>
  );
}

