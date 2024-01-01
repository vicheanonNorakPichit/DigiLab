import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Unity, useUnityContext } from "react-unity-webgl";

function Experiment() {
  const [data, setData] = useState({});
  const params = useParams();
  const experiment_id = params.experiment_id;

  const { unityProvider } = useUnityContext({
    loaderUrl: `/${experiment_id}/Build/${experiment_id}.loader.js`,
    dataUrl: `/${experiment_id}/Build/${experiment_id}.data`,
    frameworkUrl: `/${experiment_id}/Build/${experiment_id}.framework.js`,
    codeUrl: `/${experiment_id}/Build/${experiment_id}.wasm`,
  });

  const fetch_data = async () => {
    await axios
      .get(
        `http://localhost:3000/api/experiments/?experiment_id=${experiment_id}`
      )
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch_data();
  }, []);

  return (
    <div className="p-20 flex justify-center items-center ">
      {data.unity_scene ? (
        <div className="w-full flex justify-center items-center ">
          {/* {!isLoaded && (
            <p>
              Loading Application... {Math.round(loadingProgression * 100)}%
            </p>
          )} */}
          {
            <Unity
              className="rounded-xl w-4/5 "
              unityProvider={unityProvider}
              // style={{ visibility: isLoaded ? "visible" : "hidden" }}
            />
          }
        </div>
      ) : (
        <iframe
          src={data.phet_url}
          className="card card-side w-full lg:h-[600px] border-4 shadow-xl"
        ></iframe>
      )}
    </div>
  );
}
//
export default Experiment;
