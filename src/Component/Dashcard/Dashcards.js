import React, { Fragment, useState } from "react";
import DashCards from "./DashcardData";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

function Dashcards(props) {
  const [cards] = useState(DashCards);

  const [graphdata] = useState({
    data: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "",
          data: [200, 310, 50, 250, 50, 300, 100, 200],
          backgroundColor: "rgb(255 255 255 / 41%)",
          borderColor: "rgb(255 255 255 / 41%)",
          tension: 0.4,
          pointStyle: "circle",
          pointBackgroundColor: "rgba(255 255 255 / 41%)",
          pointBorderColor: "rgba(255 255 255 / 41%)",
          drawborder: false,
          borderWidth: 7,
        },
      ],
    },
    options: {
      plugins: {
        legend: {
          display: false,
        },
      },

      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },

        y: {
          grid: {
            display: false,
          },
          ticks: {
            display: false,
          },
        },
      },
    },
  });
  return (
    <>
      {cards.map((e) => {
        const { cardid, downarrow, price, interest, svg, background } = e;
        return (
          <Fragment>
            <div className="col-xl-3 col-lg-6 col-12 mb-3" key={cardid}>
              <div
                className="dashcards"
                style={{
                  backgroundColor: `${background}`,
                }}
              >
                <div className="dashcardheader">
                  <div className="headercontent">
                    <p>
                      <span className="icon">{downarrow} </span>
                      {interest}
                    </p>
                    <h2>{price}</h2>
                  </div>
                  <div className="iconholder">{svg}</div>
                </div>

                <div className="dashcardbody">
                  <Line
                    width="100%"
                    height="35%"
                    className="LineGraph"
                    data={graphdata.data}
                    options={graphdata.options}
                  />
                </div>
              </div>
            </div>
          </Fragment>
        );
      })}
    </>
  );
}

export default Dashcards;
