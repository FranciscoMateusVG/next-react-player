import { createState, useState } from "@hookstate/core";
import { QuestionAnswer, OndemandVideo } from "@mui/icons-material";
const navigatorStore = createState({
	tipo: "",
	arr: [
		{
			icon: OndemandVideo,
			primary: "Video 1",
			secondary: "Info",
			type: "video",
			id: "https://www.youtube.com/watch?v=mHdrAl3Iv5A",
			blocked: false,
		},
		{
			icon: QuestionAnswer,
			primary: "Questionario 1",
			secondary: "Info",
			type: "questions",
			id: "a",
			blocked: true,
		},
		{
			icon: OndemandVideo,
			primary: "Video 2",
			secondary: "Info4",
			type: "video",
			id: "https://www.youtube.com/watch?v=6GxRsmbB23I",
			blocked: true,
		},
		{
			icon: OndemandVideo,
			primary: "Video 3",
			secondary: "Info4",
			type: "video",
			id: "https://www.youtube.com/watch?v=C6QxTPYs68s",
			blocked: true,
		},
	],
});

// The following 2 functions can be exported now:
export const accessnavigatorStore = () => navigatorStore;
export const useNavigatorStore = () => useState(navigatorStore);
