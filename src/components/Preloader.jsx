import React, { useEffect, useState } from "react";

function Preloader() {

    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const preloaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1800);

    return () => clearTimeout(preloaderTimeout);
  }, []);
  return (
    <div class={`preloader ${isLoading ? "" : "hidden"}`}>
      <div class="loading">
       <img src="https://cutewallpaper.org/25/animated-gif-wallpaper-avengers/avengers-logo-gif-gifs-tenor.gif" alt="preloader" />
      </div>
    </div>
  );
}

export default Preloader;
