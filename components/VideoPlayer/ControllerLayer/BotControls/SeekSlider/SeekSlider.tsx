import { Grid, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { PrettoSlider } from "../../../../PrettoSlider/PrettoSlider";
import { usereactVideoStore } from "../../../store/reactVideoStore";

interface SeekSliderProps {
	utils: any;
}

export const SeekSlider: React.FC<SeekSliderProps> = ({ utils }) => {
	// Hooks
	const { playedTotal, playedSeconds } = usereactVideoStore();
	// Consts
	const { getPercentage, getDuration, seekTo } = utils;
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		setPercent(getPercentage ? getPercentage() : 0);
	}, [playedSeconds.get()]);

	return (
		<Grid item xs={12}>
			<PrettoSlider
				min={0}
				max={100}
				value={percent}
				valueLabelDisplay="auto"
				onChange={(e, newValue) => {
					const value = newValue as number;

					const newPlayedTotal = (value / 100) * getDuration();

					seekTo(newPlayedTotal);
				}}
			/>
		</Grid>
	);
};

const useStyles = makeStyles((theme: Theme) => createStyles({}));
