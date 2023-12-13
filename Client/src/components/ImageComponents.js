import React from "react";

const ImageComponents = React.memo(({ singleData }) => {
  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(singleData.image.data.data))
  );

  return (
    base64String && (
      <img
        key={singleData._id}
        src={`data:image/png;base64,${base64String}`}
        width={60}
        height={50}
        alt=""
      />
    )
  );
});

export default ImageComponents;
