'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const FinancialSimulator = () => {
  const [parameters, setParameters] = useState({
    initialUsers: 10000,
    userGrowthRate: 50, // percentage
    arpu: 300, // average revenue per user
    marketPenetration: 1, // percentage of SAM
    cogsPercentage: 20, // percentage
    rndPercentage: 23, // percentage
    smPercentage: 17, // percentage
    gnaPercentage: 10, // percentage
  });

  const [projections, setProjections] = useState<any[]>([]);

  useEffect(() => {
    calculateProjections();
  }, [parameters]);

  const calculateProjections = () => {
    const years = 5;
    const newProjections = [];
    let currentUsers = parameters.initialUsers;
    let cumulativeCashFlow = -1.1; // Starting with Year 1 initial position in millions

    for (let year = 1; year <= years; year++) {
      const revenue = currentUsers * parameters.arpu;
      const cogs = revenue * (parameters.cogsPercentage / 100);
      const grossProfit = revenue - cogs;
      
      const rnd = revenue * (parameters.rndPercentage / 100);
      const sm = revenue * (parameters.smPercentage / 100);
      const gna = revenue * (parameters.gnaPercentage / 100);
      const totalOpex = rnd + sm + gna;
      
      const ebitda = grossProfit - totalOpex;
      const ebitdaInMillions = ebitda / 1000000;
      cumulativeCashFlow += ebitdaInMillions; // Add EBITDA in millions to cumulative cash flow

      newProjections.push({
        year: `Year ${year}`,
        users: currentUsers,
        revenue: revenue / 1000000, // Convert to millions for display
        ebitda: ebitdaInMillions,
        cumulativeCashFlow: cumulativeCashFlow,
      });

      // Calculate next year's users based on growth rate
      currentUsers = Math.round(currentUsers * (1 + parameters.userGrowthRate / 100));
    }

    setProjections(newProjections);
  };

  const handleParameterChange = (param: string, value: number) => {
    setParameters(prev => ({
      ...prev,
      [param]: value
    }));
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-obsidian border border-fog p-4 rounded-lg">
          <p className="text-fog font-bold">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-fog" style={{ color: entry.color }}>
              {entry.name}: {entry.value.toFixed(2)}M
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="glass-panel p-6 mb-8">
      <h3 className="text-xl font-bold mb-4">Financial Projection Simulator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              Initial Users (Year 2): {parameters.initialUsers.toLocaleString()}
            </label>
            <input
              type="range"
              min="5000"
              max="20000"
              step="1000"
              value={parameters.initialUsers}
              onChange={(e) => handleParameterChange('initialUsers', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              User Growth Rate: {parameters.userGrowthRate}%
            </label>
            <input
              type="range"
              min="10"
              max="100"
              step="5"
              value={parameters.userGrowthRate}
              onChange={(e) => handleParameterChange('userGrowthRate', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              ARPU (Average Revenue Per User): ${parameters.arpu}
            </label>
            <input
              type="range"
              min="100"
              max="500"
              step="50"
              value={parameters.arpu}
              onChange={(e) => handleParameterChange('arpu', parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              COGS Percentage: {parameters.cogsPercentage}%
            </label>
            <input
              type="range"
              min="10"
              max="30"
              step="1"
              value={parameters.cogsPercentage}
              onChange={(e) => handleParameterChange('cogsPercentage', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              R&D Percentage: {parameters.rndPercentage}%
            </label>
            <input
              type="range"
              min="10"
              max="30"
              step="1"
              value={parameters.rndPercentage}
              onChange={(e) => handleParameterChange('rndPercentage', parseInt(e.target.value))}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-fog mb-2">
              S&M Percentage: {parameters.smPercentage}%
            </label>
            <input
              type="range"
              min="10"
              max="30"
              step="1"
              value={parameters.smPercentage}
              onChange={(e) => handleParameterChange('smPercentage', parseInt(e.target.value))}
              className="w-full"
            />
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={projections}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" opacity={0.1} />
            <XAxis 
              dataKey="year" 
              stroke="#E2E8F0"
              tick={{ fill: '#E2E8F0' }}
            />
            <YAxis 
              stroke="#E2E8F0"
              tick={{ fill: '#E2E8F0' }}
              domain={[0, 50]} // Fixed range for Revenue (0 to 50M)
              yAxisId="revenue"
            />
            <YAxis 
              stroke="#E2E8F0"
              tick={{ fill: '#E2E8F0' }}
              domain={[-2, 35]} // Fixed range for EBITDA (-2M to 35M)
              yAxisId="ebitda"
              orientation="right"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#4BC0C0"
              name="Revenue (M$)"
              strokeWidth={2}
              yAxisId="revenue"
            />
            <Line
              type="monotone"
              dataKey="ebitda"
              stroke="#FF6384"
              name="EBITDA (M$)"
              strokeWidth={2}
              yAxisId="ebitda"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-semibold mb-4">Projection Summary</h4>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-obsidian border border-fog">
            <thead>
              <tr>
                <th className="px-4 py-2 border border-fog">Year</th>
                <th className="px-4 py-2 border border-fog">Users</th>
                <th className="px-4 py-2 border border-fog">Revenue (M$)</th>
                <th className="px-4 py-2 border border-fog">EBITDA (M$)</th>
                <th className="px-4 py-2 border border-fog">Cumulative Cash Flow (M$)</th>
              </tr>
            </thead>
            <tbody>
              {projections.map((proj, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border border-fog">{proj.year}</td>
                  <td className="px-4 py-2 border border-fog">{proj.users.toLocaleString()}</td>
                  <td className="px-4 py-2 border border-fog">{proj.revenue.toFixed(2)}</td>
                  <td className="px-4 py-2 border border-fog">{proj.ebitda.toFixed(2)}</td>
                  <td className="px-4 py-2 border border-fog">{proj.cumulativeCashFlow.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FinancialSimulator; 