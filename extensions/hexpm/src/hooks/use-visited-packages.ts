import { getPreferenceValues } from '@raycast/api';
import { isPackage } from '../helpers';
import { Package } from '../types';
import { useLocalStorage } from './use-localstorage';

export function useVisitedPackages() {
  const preferenceValues = getPreferenceValues();
  const localStorage = useLocalStorage<Package[]>({
    namespace: 'HEXPM',
    key: 'VISITED_PACKAGES',
    initialValue: [],
  });

  function onVisitPackage(pkg: Package) {
    localStorage.onSetItem((prevData) => {
      return [pkg, ...(prevData.filter(isPackage(pkg)) ?? [])].slice(0, preferenceValues.visitedPackageHistoryCount);
    });
  }

  return {
    ...localStorage,
    onVisitPackage,
  };
}
