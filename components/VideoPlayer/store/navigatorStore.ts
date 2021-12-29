import { createState, useState } from "@hookstate/core";
import { QuestionAnswer, OndemandVideo } from "@mui/icons-material";
const navigatorStore = createState({
	tipo: "video",
	arr: [
		{
			icon: OndemandVideo,
			primary: "Info1",
			secondary: "Info2",
			type: "video",
			id: "https://www.youtube.com/watch?v=UFFa0QoHWvE&ab_channel=Seatbelts-Topic",
			blocked: false,
		},
		{
			icon: QuestionAnswer,
			primary: "Info2",
			secondary: "Info3",
			type: "questions",
			id: "a",
			blocked: true,
		},
		{
			icon: OndemandVideo,
			primary: "Info3",
			secondary: "Info4",
			type: "video",
			id: "https://www.youtube.com/watch?v=DwPWGUhEtP0&ab_channel=Yes-Topic",
			blocked: true,
		},
	],
});

// The following 2 functions can be exported now:
export const accessnavigatorStore = () => navigatorStore;
export const useNavigatorStore = () => useState(navigatorStore);
