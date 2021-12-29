import screenfull from "screenfull";

export const useVideoPlayer = (ref: any, refContainer: any) => {
	let seekTo;
	let getCurrentTime;
	let toggleFullScreen;
	let getDuration;
	let getPercentage;

	if (ref) {
		seekTo = (a: number) => {
			//@ts-ignore
			return ref.current.seekTo(a);
		};
		getCurrentTime = () => {
			return ref.current.getCurrentTime();
		};

		getDuration = () => {
			return ref.current.getDuration();
		};
		getPercentage = () => {
			const calculate =
				(ref.current.getCurrentTime() / ref.current.getDuration()) * 100;

			return parseInt(calculate.toString());
		};
	}

	if (refContainer) {
		toggleFullScreen = () => {
			if (refContainer) {
				//screenfull.toggle(refContainer.current);
			}
		};
	}

	return {
		seekTo,
		getCurrentTime,
		toggleFullScreen,
		getDuration,
		getPercentage,
	};
};
