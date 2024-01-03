import useToggle from "../../hooks/useToggle";

export default function Box() {
  const [on, toggle] = useToggle({ initialValue: false });

  return <div onClick={toggle} className={`box ${on ? "filled" : ""}`}></div>;
}
