import { Grid, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { PrettoSlider } from "../../../../PrettoSlider/PrettoSlider";
import { usereactVideoStore } from "../../../store/reactVideoStore";

interface SeekSliderProps {
	utils: any;
}

export const SeekSlider: React.FC<SeekSliderProps> = ({ utils }) => {
	// Hooks
	const { playedTotal, playedSeconds } = usereactVideoStore();
	// Consts
	const { seekTo } = utils;
	const value = playedSeconds.get();

	return (
		<Grid item xs={12}>
			<PrettoSlider
				min={0}
				max={100}
				value={value}
				valueLabelDisplay="auto"
				onChange={(e, newValue) => {
					const newPlayedTotal = newValue as number;

					playedTotal.set(newPlayedTotal / 100);
				}}
			/>
		</Grid>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
