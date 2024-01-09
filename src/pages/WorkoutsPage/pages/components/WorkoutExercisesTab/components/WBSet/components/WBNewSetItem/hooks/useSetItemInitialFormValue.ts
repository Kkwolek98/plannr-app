import { useMemo } from "react";
import { Exercise } from "../../../../../../../../../../types/exercise";
import { SetItem } from "../../../../../../../../../../types/workout";

export default function useSetItemInitialFormValue(
	setItem: SetItem | undefined,
) {
	const initialData = {
		details: {} as Exercise,
		repRangeType: "exact" as "exact" | "range",
		repMin: 0,
		repMax: 0,
		repExact: 0,
		repWeight: 0,
		repType: "kg",
		sort: 0,
		rest: 0,
	};

	function prepareInitialData(setItem?: SetItem) {
		if (!setItem) {
			return initialData;
		}

		return {
			details: setItem.details,
			repRangeType: setItem.repMin && setItem.repMax ? "range" : "exact",
			repMin: setItem.repMin,
			repMax: setItem.repMax,
			repExact: setItem.repExact,
			repWeight: setItem.repWeight,
			repType: setItem.repType,
			sort: setItem.sort,
			rest: setItem.rest,
		};
	}

	const initialDataPrepared = useMemo(
		() => prepareInitialData(setItem),
		[setItem],
	);

	return initialDataPrepared;
}
