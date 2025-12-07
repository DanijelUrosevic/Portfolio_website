import React from "react";
import { FaTelegram, FaFiverr } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex items-center justify-evenly bg-[#0F0416] text-white flex-wrap px-3 py-4">
      <p className="text-sm text-center m-2">
        Designed and Developed by Danijel
      </p>
      <p className="text-sm font-semibold text-center m-2">
        Copyright © 2024 Danijel.dev
      </p>
      <span className="flex items-center justify-center gap-7 m-2">
        <a
          href="https://t.me/DanijelU"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.fiverr.com/danijelurose188?source=gig_cards&referrer_gig_slug=get-dex-defi-dapp-like-gmx-camelot-dex-pancakeswap-velodrome-solidly&ref_ctx_id=28813e5de53d491fbea3ff380fcd9ed9&imp_id=64fab53f-91a3-4c15-8245-4874b7455d5d"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          <FaFiverr />
        </a>
      </span>
    </div>
  );
}

export default Footer;
