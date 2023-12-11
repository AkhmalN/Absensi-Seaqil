import React from "react";

const ImageDetailComponents = React.memo(({ singleData }) => {
  // Check if singleData and image properties exist
  if (!singleData || !singleData.image || !singleData.image.data) {
    // Handle the case where data is not available
    return <div>No image data available</div>;
  }

  const base64String = btoa(
    String.fromCharCode(...new Uint8Array(singleData.image.data.data))
  );

  return (
    base64String && (
      <img
        src={`data:image/png;base64,${base64String}`}
        width={200}
        height={200}
        alt={singleData.username}
      />
    )
  );
});

export default ImageDetailComponents;
