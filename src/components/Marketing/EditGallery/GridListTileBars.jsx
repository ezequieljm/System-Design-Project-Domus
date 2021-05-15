import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	GridList,
	GridListTile,
	GridListTileBar,
	IconButton,
  Paper,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-around",
		overflow: "hidden",
		backgroundColor: theme.palette.background.paper,
		padding: '.5rem'
	},
	gridList: {
		width: 800,
		height: 450,
	},
	icon: {
		color: "rgba(255, 255, 255, 0.54)",
	},
}));

const tileData = [
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
	{
		img: "",
		tile: "anything",
		author: "somebody",
	},
];
export default function TitlebarGridList() {
	const classes = useStyles();

	return (
		<Paper elevation={5} className={classes.root}>
			<GridList cellHeight={180} cols={3} className={classes.gridList}>
				{tileData.map((tile) => (
					<GridListTile key={tile.img}>
						<img src={tile.img} alt={tile.title} />
						<GridListTileBar
							title={tile.title}
							subtitle={<span>Eliminar</span>}
							actionIcon={
								<IconButton
									aria-label={`info about ${tile.title}`}
									className={classes.icon}>
									<Delete />
								</IconButton>
							}
						/>
					</GridListTile>
				))}
			</GridList>
		</Paper>
	);
}
