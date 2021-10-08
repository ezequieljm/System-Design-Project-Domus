import React from "react";
import CorporateClient from "./CorporateClient/CorporateClient";
import PrivateClient from "./PrivateClient/PrivateClient";
import { Button, Card, CardActionArea, CardActions, CardMedia, Typography, makeStyles, CardContent, Grow } from "@material-ui/core";
import { AccountBox, Business } from "@material-ui/icons";
import dbClients from "./dbClients.json";

const cardText = dbClients.cardText;

const useStyles = makeStyles({
	root: {
		width: 400,
		height: 400,
		margin: "3rem",
	},
	media: {
		height: 240,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		background: "linear-gradient(to left, #2193b0, #6dd5ed)",
	},
	styleIconMedia: {
		fontSize: "9rem",
		color: "white",
	},
});

const MediaCard = ({ textContent, deploy, icon }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root} elevation={5}>
			<CardActionArea>
				<CardMedia
					className={classes.media}
					title='Contemplative Reptile'
					onClick={() => deploy(icon)}>
					{icon === 1 
                        ? <AccountBox className={classes.styleIconMedia} />
                        : <Business className={classes.styleIconMedia} />
					}
				</CardMedia>
				<CardContent>
					<Typography gutterBottom variant='h5' component='h2'>
						{textContent.title}
					</Typography>
					<Typography variant='body2' color='textSecondary' component='p'>
						{textContent.parrf}
					</Typography>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<Button size='small' color='primary' onClick={() => deploy(icon)}>
					{textContent.btnOne}
				</Button>
			</CardActions>
		</Card>
	);
}

const ButtonDep = ({ handleDeploy }) =>
    <Grow in>
        <div>
            <Typography variant='h4'>Nuevo cliente</Typography>
            <div
                elevation={5}
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <MediaCard textContent={cardText[0]} deploy={handleDeploy} icon={1} />
                <MediaCard textContent={cardText[1]} deploy={handleDeploy} icon={2} />
            </div>
        </div>
    </Grow>


/**
 * Main Component: NewClient
 */
const NewClient = () => {
    const [deploy, setDeploy] = React.useState(0);
	return (
		<>
			{
                deploy === 0 
                    ? <ButtonDep handleDeploy={setDeploy} /> 
                    : deploy === 1 
                        ? <CorporateClient />
                        : <PrivateClient />
            }
		</>
	);
}

export default NewClient;