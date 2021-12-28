import { Theme, Grid, IconButton } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { FastRewind, FastForward, Pause, PlayArrow } from "@mui/icons-material";
import { usereactVideoStore } from "../../store/reactVideoStore";

interface MidControlsProps {
	utils: any;
}

export const MidControls: React.FC<MidControlsProps> = ({ utils }) => {
	const { playing } = usereactVideoStore();
	const { seekTo, getCurrentTime } = utils;

	return (
		<Grid
			container
			direction="row"
			alignItems="center"
			justifyContent="center"
			style={{ padding: 16 }}
		>
			<IB
				label="rewind"
				Icon={FastRewind}
				onClick={() => {
					if (seekTo) {
						seekTo(getCurrentTime() - 10);
					}
				}}
			/>
			{playing.get() && (
				<IB label="pause" Icon={Pause} onClick={() => playing.set(false)} />
			)}
			{!playing.get() && (
				<IB
					label="pause"
					Icon={PlayArrow}
					onClick={() => playing.set(true)}
				/>
			)}
			<IB
				label="foward"
				Icon={FastForward}
				onClick={() => {
					if (seekTo) {
						seekTo(getCurrentTime() + 10);
					}
				}}
			/>
		</Grid>
	);
};

const IB = (props: any) => {
	const { controlIcons } = useStyles();
	const { label, Icon, onClick } = props;
	return (
		<IconButton className={controlIcons} aria-label={label} onClick={onClick}>
			<Icon fontSize="inherit" />
		</IconButton>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		controlIcons: {
			color: "white",
			fontSize: 50,
			transform: "scale(0.9)",
			"&:hover": {
				color: "red",
				transform: "scale(1)",
			},
		},
	}),
);
