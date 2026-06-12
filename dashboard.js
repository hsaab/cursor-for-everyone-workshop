/* Renders the Revenue Analytics "before" dashboard from data.js.
 * Plain browser JS — no build step, no dependencies. Open the HTML directly. */

(function () {
  "use strict";

  const data = window.DASHBOARD_DATA;

  /* ---------- formatting helpers ---------- */
  function moneyM(value) {
    return "$" + value + "M";
  }

  function percent(value) {
    return (value >= 0 ? "+" : "") + value.toFixed(1) + "%";
  }

  function pctChange(current, previous) {
    return ((current - previous) / previous) * 100;
  }

  function niceMax(value, step) {
    return Math.ceil(value / step) * step;
  }

  /* ---------- KPI cards ---------- */
  function buildKpis() {
    const revenue = data.monthlyRevenueM;
    const current = revenue[revenue.length - 1].value;
    const previous = revenue[revenue.length - 2].value;

    const customers = data.kpis.activeCustomers;
    const hours = data.kpis.totalGpuHoursM;

    const revPerCustNow = current / customers.value;
    const revPerCustPrev = previous / customers.prev;

    return [
      {
        label: "Total revenue (Jun)",
        value: moneyM(current),
        delta: pctChange(current, previous),
        note: "MoM",
      },
      {
        label: "Active customers",
        value: customers.value.toLocaleString(),
        delta: pctChange(customers.value, customers.prev),
        note: "MoM",
      },
      {
        label: "GPU hours (Jun)",
        value: hours.value + "M",
        delta: pctChange(hours.value, hours.prev),
        note: "MoM",
      },
      {
        label: "Revenue / customer",
        value: "$" + revPerCustNow.toFixed(2) + "M",
        delta: pctChange(revPerCustNow, revPerCustPrev),
        note: "MoM",
      },
    ];
  }

  function renderKpis() {
    const row = document.getElementById("kpiRow");
    row.innerHTML = buildKpis()
      .map(function (kpi) {
        const sign = kpi.delta >= 0 ? "pos" : "neg";
        const arrow = kpi.delta >= 0 ? "▲" : "▼";
        return (
          '<div class="kpi">' +
          '<div class="kpi-label">' +
          kpi.label +
          "</div>" +
          '<div class="kpi-value">' +
          kpi.value +
          "</div>" +
          '<div class="kpi-delta ' +
          sign +
          '">' +
          arrow +
          " " +
          percent(kpi.delta) +
          ' <span class="muted">' +
          kpi.note +
          "</span></div>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Revenue trend (vertical bars) ---------- */
  function renderTrend() {
    const chart = document.getElementById("trendChart");
    const values = data.monthlyRevenueM.map((m) => m.value);
    const max = niceMax(Math.max.apply(null, values), 50);

    chart.innerHTML = data.monthlyRevenueM
      .map(function (point) {
        const heightPct = (point.value / max) * 100;
        return (
          '<div class="bar-col">' +
          '<div class="bar-val">' +
          moneyM(point.value) +
          "</div>" +
          '<div class="bar-track">' +
          '<div class="bar-fill" style="height:' +
          heightPct +
          '%"></div>' +
          "</div>" +
          '<div class="bar-label">' +
          point.month +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  /* ---------- Revenue by region (horizontal bars) ---------- */
  function renderRegions() {
    const chart = document.getElementById("regionChart");
    const rows = data.revenueByRegionM;
    const max = Math.max.apply(
      null,
      rows.map((r) => r.value)
    );

    document.getElementById("regionSub").textContent =
      data.asOf + " · share of total";

    chart.innerHTML = rows
      .map(function (row) {
        const widthPct = (row.value / max) * 100;
        return (
          '<div class="hbar-row">' +
          '<div class="hbar-label">' +
          row.region +
          "</div>" +
          '<div class="hbar-track">' +
          '<div class="hbar-fill" style="width:' +
          widthPct +
          '%"></div>' +
          "</div>" +
          '<div class="hbar-val">' +
          moneyM(row.value) +
          "</div>" +
          "</div>"
        );
      })
      .join("");
  }

  function renderAsOf() {
    document.getElementById("asOf").textContent = "As of " + data.asOf;
  }

  document.addEventListener("DOMContentLoaded", function () {
    renderAsOf();
    renderKpis();
    renderTrend();
    renderRegions();
  });
})();
