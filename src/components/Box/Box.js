import "./Box.scss";

function Box({ chart }) {
  return (
    <div className="Box">
      <h4 className="Box__title">{chart.title}</h4>
      {<chart.component {...chart.props} />}
    </div>
  );
}

export { Box };
