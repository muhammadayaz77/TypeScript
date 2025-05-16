import { useEffect, useRef } from "react";

const DomRef = () => {
  let Inputref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    Inputref.current?.focus();
  },[])
  return (
    <div>
      <input type="text" ref={Inputref} />
    </div>
  );
};

export default DomRef;