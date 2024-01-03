import { useEffect, useRef } from "react";

export default function useEffectOnUpdate(effectFunction, dependencies) {
  const firstRender = useRef(true);

  //the useEffect is not working as expected
  useEffect(() => {
    firstRender.current ? (firstRender.current = false) : effectFunction();
  }, dependencies);
}
