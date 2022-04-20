import React from "react";

const linkToPPTFile =
  "https://docs.google.com/gview?url=https://www.yourwebsite.com/powerpoint.ppt&embedded=true";
export default function App() {
  return (
    <>
      <iframe
        src={`https://view.officeapps.live.com/op/embed.aspx?src=${linkToPPTFile}`}
        width="100%"
        height="600px"
        frameBorder="0"
      ></iframe>
    </>
  );
}
