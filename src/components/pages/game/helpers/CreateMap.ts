export function createMap(
  gameFields: number[] | undefined,
  setGameFields: (
    value:
      | ((prevState: number[] | undefined) => number[] | undefined)
      | number[]
      | undefined
  ) => void
) {
  if (!gameFields) {
    let tempMap: number[] = [];
    for (let i = 0; i < 100; i++) {
      tempMap.push(i);
    }
    setGameFields(tempMap);
  }
}
