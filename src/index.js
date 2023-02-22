import React from "react";
import ReactDOM from "react-dom";
import VideoPlayer from "./VideoPlayer.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        controls
        // autoplay
        sources={[
          {
            src:
              "https://r6---sn-gpv7enek.c.2mdn.net/videoplayback/id/f2ff4d5145b1651b/itag/347/source/doubleclick_dmm/ctier/L/acao/yes/ip/0.0.0.0/ipbits/0/expire/3717006855/sparams/acao,ctier,expire,id,ip,ipbits,itag,mip,mm,mn,ms,mv,mvi,pl,source/signature/330316C11105E6BFAD83EF2DA47B143DAB109984.195E665EBDBEC89EF43673641327AAFFC1E9331B/key/cms1/cms_redirect/yes/mip/2804:14d:5082:8d46:3160:1430:3b89:124a/mm/42/mn/sn-gpv7enek/ms/onc/mt/1575385655/mv/m/mvi/5/pl/52?cpn=14UeHxkMrkZycD4c&file=file.mp4",
            type: "video/mp4"
          }
        ]}
        ima={{
          adTagUrl:
            "https://pubads.g.doubleclick.net/gampad/ads?iu=/8948849/Teste-video&description_url=https%3A%2F%2Fwww.personare.com.br&tfcd=0&npa=0&sz=400x300%7C620x350%7C640x480&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator="
        }}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
