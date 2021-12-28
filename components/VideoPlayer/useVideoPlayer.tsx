import screenfull from "screenfull";

export const useVideoPlayer = (ref: any, refContainer: any) => {
	let seekTo;
	let getCurrentTime;
	let toggleFullScreen;

	if (ref) {
		seekTo = (a: number) => {
			//@ts-ignore
			return ref.current.seekTo(a);
		};
		getCurrentTime = () => {
			return ref.current.getCurrentTime();
		};
	}

	if (refContainer) {
		toggleFullScreen = () => {
			if (refContainer) {
				//screenfull.toggle(refContainer.current);
			}
		};
	}

	return { seekTo, getCurrentTime, toggleFullScreen };
};
