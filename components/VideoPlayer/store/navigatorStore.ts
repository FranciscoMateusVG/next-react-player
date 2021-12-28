import { createState, useState } from "@hookstate/core";
const navigatorStore = createState({});

// The following 2 functions can be exported now:
export const accessnavigatorStore = () => navigatorStore;
export const usenavigatorStore = () => useState(navigatorStore);
