import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import Marketplace from "./src/pages/Marketplace";

try {
  console.log("Rendering...");
  const html = renderToString(
    <StaticRouter location="/marketplace">
      <Marketplace />
    </StaticRouter>
  );
  console.log("Success! Length:", html.length);
} catch (e) {
  console.error("Render Error:", e);
}
