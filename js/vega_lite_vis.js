// Embeds each Vega-Lite chart into its container on index.html.
// Each chart's specification is a separate JSON file in the vega-lite/ folder.
// Paths are relative to index.html, not to this file.

const charts = [
  { container: "#chart-01", specification: "vega-lite/chart_01_lollipop.vg.json" },
  { container: "#chart-02", specification: "vega-lite/chart_02_stacked_area.vg.json" },
  { container: "#chart-03", specification: "vega-lite/chart_03_bump.vg.json" },
  { container: "#chart-04", specification: "vega-lite/chart_04_flow_map.vg.json" },
  { container: "#chart-05", specification: "vega-lite/chart_05_symbol_map.vg.json" },
  { container: "#chart-06", specification: "vega-lite/chart_06_choropleth.vg.json" },
  { container: "#chart-07", specification: "vega-lite/chart_07_market_heatmap.vg.json" },
  { container: "#chart-08", specification: "vega-lite/chart_08_bubble_scatter.vg.json" },
  { container: "#chart-09", specification: "vega-lite/chart_09_small_multiples.vg.json" },
  { container: "#chart-10", specification: "vega-lite/chart_10_sankey.vg.json" },
  { container: "#chart-11", specification: "vega-lite/chart_11_waterfall.vg.json" },
  { container: "#chart-12", specification: "vega-lite/chart_12_waffle.vg.json" }
];

function embedChart(chart) {
  vegaEmbed(chart.container, chart.specification, {
    actions: false,
    renderer: "svg"
  }).catch(function (error) {
    console.error("Chart " + chart.container + " could not be loaded:", error);

    const container = document.querySelector(chart.container);

    if (container) {
      container.innerHTML =
        "<p class='error-message'>This chart could not be loaded.</p>";
    }
  });
}

// Wait for the web fonts so chart text is measured and laid out correctly.
const fontsReady = document.fonts ? document.fonts.ready : Promise.resolve();

fontsReady.then(function () {
  charts.forEach(embedChart);
});
