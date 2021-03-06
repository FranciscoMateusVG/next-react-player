import { createState, useState } from "@hookstate/core";
const reactVideoStore = createState({
	width: "100%",
	height: "100%",
	url: "",
	muted: false,
	playing: false,
	volume: 0.5,
	rate: 1,
	playedSeconds: 0,
	playedTotal: 0,
});

// The following 2 functions can be exported now:
export const accessreactVideoStore = () => reactVideoStore;
export const usereactVideoStore = () => useState(reactVideoStore);
