import { Box } from "../Box";

import "./Layout.scss";

function Layout({ charts }) {
  return (
    <div className="Layout__container">
      <div className="Layout__row">
        {charts.map((chart, i) => (
          <Box key={i} chart={chart} />
        ))}
      </div>
    </div>
  );
}

export { Layout };
