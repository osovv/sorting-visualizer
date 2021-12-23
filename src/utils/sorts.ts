import { SortHistoryStep, SortMapping } from "../types";

export function mapSortNameToSort(
  sortKey: string,
  sortsMapping: SortMapping[],
  defaultSort: (_array: number[]) => SortHistoryStep[]
): (_array: number[]) => SortHistoryStep[] {
  const sortMapping = sortsMapping.find((value) => value.name === sortKey);
  if (sortMapping !== undefined) {
    return sortMapping.value;
  } else {
    return defaultSort;
  }
}
