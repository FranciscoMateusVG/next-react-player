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

interface LeftControlsProps {
	utils: any;
}

export const LeftControls: React.FC<LeftControlsProps> = ({ utils }) => {
	// Hooks
	const { bottomIcons, volumeSlider } = useStyles();
	const { muted, volume, playedSeconds } = usereactVideoStore();
	// Consts

	const handleVolumeChange = (e: any, newValue: any) => {
		volume.set(newValue / 100);

		muted.set(newValue === 0 ? true : false);
	};

	let played = playedSeconds.get();

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
					<Typography>{played}</Typography>
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
