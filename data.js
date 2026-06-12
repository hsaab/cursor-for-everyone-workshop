/* Data already wired into the "before" dashboard.
 * Note: there is NO GPU-type breakdown here on purpose — that granular data
 * lives in data/revenue_by_gpu_type.csv and gets added during the workshop.
 * Revenue is in USD millions. */

const DASHBOARD_DATA = {
  asOf: "June 2026",

  // Total platform revenue across all customers, by month ($M).
  monthlyRevenueM: [
    { month: "Jan", value: 284 },
    { month: "Feb", value: 302 },
    { month: "Mar", value: 324 },
    { month: "Apr", value: 347 },
    { month: "May", value: 378 },
    { month: "Jun", value: 415 },
  ],

  // Latest-month revenue split by region ($M). Sums to the latest month total.
  revenueByRegionM: [
    { region: "US-East", value: 180 },
    { region: "US-West", value: 120 },
    { region: "US-Central", value: 65 },
    { region: "EU-West", value: 50 },
  ],

  // Supporting KPIs (current month vs. prior month).
  kpis: {
    activeCustomers: { value: 312, prev: 297 },
    totalGpuHoursM: { value: 106, prev: 98 },
  },
};

window.DASHBOARD_DATA = DASHBOARD_DATA;
