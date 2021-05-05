import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStylesTow = makeStyles({
  root: {
    minWidth: 200,
    minHeight: 150,
    maxHeight: 170,
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
    marginTop: 30,
  },
});

function SimpleCard({title, value}) {
  const classes = useStylesTow();
  return (
    <Card className={classes.root}>
      <CardContent >
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography variant="h1">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}

const valuesOfCards = {
  titles: ['Total', 'Recibidos ayer', 'Sin verificar', 'Cientes no registrados'], 
  values:[23, 2, 2, 4]
};

export default function ContentCards() {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: 20, marginTop: 20}}>
      <SimpleCard title={valuesOfCards.titles[0]} value={valuesOfCards.values[0]} />
      <SimpleCard title={valuesOfCards.titles[1]} value={valuesOfCards.values[1]} />
      <SimpleCard title={valuesOfCards.titles[2]} value={valuesOfCards.values[2]} />
      <SimpleCard title={valuesOfCards.titles[3]} value={valuesOfCards.values[3]} />
    </div>
  )
}