import React from "react";

function Title(props) {
  const variant = {
    main: "mb-5 lg:text-5xl font-bold md:text-3xl sm:text-2xl text-main",
  };
  return (
    <h1 className={variant.main} style={{ fontFamily: props.font }}>
      {props.title}
    </h1>
  );
}

export default Title;
