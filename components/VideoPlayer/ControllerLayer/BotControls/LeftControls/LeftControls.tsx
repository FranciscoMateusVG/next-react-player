import {
	Button,
	Grid,
	Theme,
	Typography,
	Slider,
	IconButton,
} from "@mui/material";
import { VolumeUp, VolumeMute } from "@mui/icons-material";
import { createStyles, makeStyles } from "@mui/styles";
import { usereactVideoStore } from "../../../store/reactVideoStore";
import { useState, useEffect } from "react";

interface LeftControlsProps {
	utils: any;
}

const format = (seconds: number) => {
	if (isNaN(seconds) || !seconds) return "00:00";

	const date = new Date(seconds * 1000);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes().toString().padStart(2, "0");
	const secondsF = date.getUTCSeconds().toString().padStart(2, "0");
	if (hours) return `${hours}:${minutes}:${secondsF}`;

	return `${minutes}:${secondsF}`;
};

export const LeftControls: React.FC<LeftControlsProps> = ({ utils }) => {
	// Hooks
	const { bottomIcons, volumeSlider } = useStyles();
	const [elapsedTime, setElapsedTime] = useState("00:00");
	const [totalDuration, setTotalDuration] = useState("00:00");
	const { muted, volume, playedSeconds } = usereactVideoStore();
	// Consts
	const { getCurrentTime, getDuration } = utils;
	const handleVolumeChange = (e: any, newValue: any) => {
		volume.set(newValue / 100);

		muted.set(newValue === 0 ? true : false);
	};

	useEffect(() => {
		setElapsedTime(getCurrentTime ? format(getCurrentTime()) : "00:00");
	}, [playedSeconds.get()]);
	useEffect(() => {
		setTotalDuration(getDuration ? format(getDuration()) : "00:00");
	}, [playedSeconds.get()]);

	return (
		<Grid item>
			<Grid container alignItems="center" direction="row">
				{!muted.get() && (
					<IconButton
						aria-label="rewind"
						className={bottomIcons}
						onClick={() => muted.set(true)}
					>
						<VolumeUp fontSize="large" />
					</IconButton>
				)}
				{muted.get() && (
					<IconButton
						aria-label="rewind"
						className={bottomIcons}
						onClick={() => muted.set(false)}
					>
						<VolumeMute fontSize="large" />
					</IconButton>
				)}
				<Slider
					min={0}
					max={100}
					value={volume.get() * 100}
					className={volumeSlider}
					onChange={handleVolumeChange}
				/>
				<Button variant="text" style={{ color: "white", marginLeft: 16 }}>
					<Typography>{`${elapsedTime}/${totalDuration}`}</Typography>
				</Button>
			</Grid>
		</Grid>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		bottomIcons: {
			color: "white",
			"&:hover": {
				color: "red",
			},
		},
		volumeSlider: {
			width: 100,
		},
	}),
);
