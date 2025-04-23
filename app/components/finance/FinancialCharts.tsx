'use client';

import { PieChart, Pie, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const FinancialCharts = () => {
  // Market Size Data
  const marketSizeData = [
    { name: 'TAM', value: 720 },
    { name: 'SAM', value: 360 },
    { name: 'SOM', value: 30 }
  ];

  // Year 1 Expenses Data
  const year1ExpensesData = [
    { name: 'R&D', value: 600 },
    { name: 'Sales & Marketing', value: 200 },
    { name: 'G&A', value: 300 }
  ];

  // Revenue Projection Data
  const revenueProjectionData = [
    { year: 'Year 1', revenue: 0 },
    { year: 'Year 2', revenue: 3 },
    { year: 'Year 3', revenue: 9 },
    { year: 'Year 4', revenue: 18 },
    { year: 'Year 5', revenue: 45 }
  ];

  const COLORS = ['#FF6384', '#36A2EB', '#4BC0C0'];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-obsidian border border-fog p-4 rounded-lg">
          <p className="text-fog">{`${label}: $${payload[0].value}M`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div className="glass-panel p-6">
        <h3 className="text-xl font-bold mb-4">Market Size Breakdown</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={marketSizeData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {marketSizeData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-panel p-6">
        <h3 className="text-xl font-bold mb-4">Year 1 Expenses</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={year1ExpensesData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {year1ExpensesData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="glass-panel p-6 md:col-span-2">
        <h3 className="text-xl font-bold mb-4">Revenue Projection (Years 1-5)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={revenueProjectionData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.1} />
            <XAxis dataKey="year" stroke="#E2E8F0" />
            <YAxis stroke="#E2E8F0" />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar dataKey="revenue" fill="#4BC0C0" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default FinancialCharts; 