import { Grid, Theme } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useEffect, useState } from "react";
import { PrettoSlider } from "../../../../PrettoSlider/PrettoSlider";
import { useNavigatorStore } from "../../../store/navigatorStore";
import { usereactVideoStore } from "../../../store/reactVideoStore";

interface SeekSliderProps {
	utils: any;
}

export const SeekSlider: React.FC<SeekSliderProps> = ({ utils }) => {
	// Hooks
	const { playedTotal, playedSeconds, url } = usereactVideoStore();
	const { arr } = useNavigatorStore();
	// Consts
	const { getPercentage, getDuration, seekTo } = utils;
	const [percent, setPercent] = useState(0);

	useEffect(() => {
		setPercent(getPercentage ? getPercentage() : 0);

		if (percent > 89) {
			let index = 0;
			if (url.get() === "https://www.youtube.com/watch?v=mHdrAl3Iv5A")
				index = 1;
			if (url.get() === "https://www.youtube.com/watch?v=6GxRsmbB23I")
				index = 3;

			let teste = arr.get();
			const newArr = [...teste];

			// newArr.forEach((a: any, i: any) => {
			// 	if (!a.blocked) index = i;
			// });
			// index = index + 1;
			const obj = arr[index].get();
			const newObj = {
				icon: obj.icon,
				primary: obj.primary,
				secondary: obj.secondary,
				type: obj.type,
				id: obj.id,
				blocked: false,
			};
			arr[index].set((p) => newObj);
		}
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
