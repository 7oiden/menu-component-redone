import { useEffect, useRef } from "react";

export default function useEffectOnUpdate(effectFunction, dependencies) {
  const firstRender = useRef(true);

  //the useEffect is not working as expected, functions in App.jsx are called on initial render
  useEffect(() => {
    firstRender.current ? (firstRender.current = false) : effectFunction();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
}
