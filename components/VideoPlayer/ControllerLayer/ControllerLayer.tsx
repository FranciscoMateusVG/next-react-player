import { Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import { BotControls } from "./BotControls/BotControls";
import { MidControls } from "./MidControls/MidControls";
import { TopControls } from "./TopControls/TopControls";

interface ControllerLayerProps {
	utils: any;
	show: any;
	handleMouseEnter: any;
}

export const ControllerLayer: React.FC<ControllerLayerProps> = ({
	utils,
	show,
	handleMouseEnter,
}) => {
	// Hooks
	const { controlsWrapper } = useStyles();

	return (
		<div
			className={controlsWrapper}
			style={{ display: show ? "" : "none" }}
			onMouseLeave={() => {
				handleMouseEnter(false);
			}}
		>
			<TopControls />
			<MidControls utils={utils} />
			<BotControls utils={utils} />
		</div>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		controlsWrapper: {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
			background: "rgba(0,0,0,0.6)",
			display: "flex",
			flexDirection: "column",
			justifyContent: "space-between",
			zIndex: 1,
		},
	}),
);
