import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStylesTow = makeStyles({
	root: {
		minWidth: 200,
		minHeight: 150,
		maxHeight: 170,
		boxShadow:
			"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
	},
});

const valuesOfCards = {
	titles: [
		"Total",
		"Recibidos ayer",
		"Sin verificar",
		"Cientes no registrados",
	],
	values: [23, 2, 2, 4],
};

const stylesOfContentCards = {
      display: "flex"
    , justifyContent: "space-between"
    , marginBottom: 20
    , marginTop: 20
}

const SimpleCard = ({ title, value, colorBackground, colorTxt }) =>
    <Card className={useStylesTow().root} style={{background: colorBackground}}>
        <CardContent>
            <Typography variant='h6' component='h2'>
                {title}
            </Typography>
            <Typography variant='h1' className={useStylesTow().colorFont} style={{color: colorTxt}}>
                {value}
            </Typography>
        </CardContent>
    </Card>

const ContentCards = () =>
    <div style={stylesOfContentCards}>
        <SimpleCard
            title={valuesOfCards.titles[0]}
            value={valuesOfCards.values[0]}
            colorTxt="#039be5"
        />
        <SimpleCard
            title={valuesOfCards.titles[1]}
            value={valuesOfCards.values[1]}
            colorTxt="#ec407a"
        />
        <SimpleCard
            title={valuesOfCards.titles[2]}
            value={valuesOfCards.values[2]}
            colorTxt="#00897b"
        />
        <SimpleCard
            title={valuesOfCards.titles[3]}
            value={valuesOfCards.values[3]}
            colorTxt="#ff5722"
        />
    </div>

export default ContentCards;