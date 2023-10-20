import { useEffect } from "react";
import React, { useState } from "react";
import GetApi from "../getApi";
import apikey from "../apikey";

function AboutSatUrlGen({ noradid, type }) {
  const apiKey = apikey();
  const [url, setUrl] = useState("");

  // https://api.n2yo.com/rest/v1/satellite/tle/{noradid}&apiKey={apikey}

  useEffect(() => {
    setUrl(
      "https://api.n2yo.com/rest/v1/satellite/tle/" +
        noradid +
        "&apiKey=" +
        apiKey
    );
  }, []);

  return (
    <div>
      <GetApi url={url} type={type} />
    </div>
  );
}

export default AboutSatUrlGen;