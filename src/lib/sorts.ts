import { SortMapping } from '../types';

export function mapSortNameToSort(
  sortKey: string,
  sortsMapping: SortMapping[],
) {
  const sortMapping = sortsMapping.find((value) => value.name === sortKey);
  if (sortMapping !== undefined) {
    return sortMapping.value;
  } else {
    return undefined;
  }
}
