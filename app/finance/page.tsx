'use client';

import { useState } from 'react';
import FinancialCharts from '../components/finance/FinancialCharts';
import FinancialSimulator from '../components/finance/FinancialSimulator';

type Section = {
  title: string;
  content: JSX.Element;
};

type Sections = {
  [key: string]: Section;
};

const FinancialProjection = () => {
  const [activeSection, setActiveSection] = useState<string>('tam');

  const sections: Sections = {
    tam: {
      title: 'Total Addressable Market (TAM)',
      content: (
        <div className="space-y-4">
          <p className="text-lg">The entire U.S. higher education advisory market — representing every student and family involved in college planning and financial aid.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>High school graduates annually: ~3.9M</li>
            <li>College enrollment rate: ~62% → ~2.4M</li>
            <li>U.S. College Planning Spend: ~$300 average spend/user/year → $720M/year</li>
          </ul>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">International Market</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-obsidian border border-fog">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-fog">Region</th>
                    <th className="px-4 py-2 border border-fog">Annual Outbound Students</th>
                    <th className="px-4 py-2 border border-fog">% Applying to English-speaking Universities</th>
                    <th className="px-4 py-2 border border-fog">Potential Market</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-fog">India</td>
                    <td className="px-4 py-2 border border-fog">~770,000</td>
                    <td className="px-4 py-2 border border-fog">~90%</td>
                    <td className="px-4 py-2 border border-fog">~700,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-fog">China</td>
                    <td className="px-4 py-2 border border-fog">~700,000</td>
                    <td className="px-4 py-2 border border-fog">~80%</td>
                    <td className="px-4 py-2 border border-fog">~560,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-fog">Middle East & Africa</td>
                    <td className="px-4 py-2 border border-fog">~300,000</td>
                    <td className="px-4 py-2 border border-fog">~60%</td>
                    <td className="px-4 py-2 border border-fog">~180,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-fog">Southeast Asia</td>
                    <td className="px-4 py-2 border border-fog">~200,000</td>
                    <td className="px-4 py-2 border border-fog">~70%</td>
                    <td className="px-4 py-2 border border-fog">~140,000</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-fog">LATAM</td>
                    <td className="px-4 py-2 border border-fog">~150,000</td>
                    <td className="px-4 py-2 border border-fog">~60%</td>
                    <td className="px-4 py-2 border border-fog">~90,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">Total Addressable International Students (per year): ~1.67 million</p>
          </div>
        </div>
      ),
    },
    sam: {
      title: 'Serviceable Available Market (SAM)',
      content: (
        <div className="space-y-4">
          <p className="text-lg">Students and families actively looking for online tools for college admissions and financial aid help — who are also comfortable using digital platforms.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Includes ~2.4M students entering college each year</li>
            <li>Targeting those who research and apply online, especially cost-sensitive or first-gen students</li>
            <li>Assume ~50% of them are tech-enabled and actively seek help</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">SAM Estimate:</h3>
            <p>~1.2M students/year × $300 average spend = ~$360M annually</p>
          </div>
        </div>
      ),
    },
    som: {
      title: 'Serviceable Obtainable Market (SOM)',
      content: (
        <div className="space-y-4">
          <p className="text-lg">The subset of SAM we can realistically reach in 3–5 years through direct marketing, partnerships, and product-market fit.</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>If we capture just 1–2% of SAM in 5 years with premium subscriptions + institutional partnerships</li>
            <li>100,000 users × $300/year = $30M revenue opportunity</li>
          </ul>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">SOM Estimate:</h3>
            <p>~$30M–60M within 5 years</p>
            <p className="text-sm italic">(Assumes reaching 100K–200K users via schools, nonprofits, ambassadors, and digital marketing)</p>
          </div>
        </div>
      ),
    },
    year1: {
      title: 'Year 1 Breakdown',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">R&D: $600,000</h3>
            <p className="text-lg">Building a complex AI-powered platform integrating:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Personalized college + financial aid recommendation engine</li>
              <li>Scholarship and college planning workflows</li>
              <li>A scalable backend for multiple users</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sales & Marketing: $200,000</h3>
            <p>Tasks:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Social media strategy, SEO, ambassador program seeding</li>
              <li>Partnership outreach</li>
              <li>Early testing of content on TikTok/Instagram/YouTube</li>
              <li>Running paid discovery campaigns</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">G&A: $300,000</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>5 Founders taking modest stipends ($30,000–$40,000/year)</li>
              <li>Early legal + incorporation costs</li>
              <li>Admin software and infrastructure</li>
            </ul>
          </div>
        </div>
      ),
    },
    year2: {
      title: 'Year 2 Breakdown',
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Revenue: $3,000,000</h3>
            <p>10,000 paid users × $300/year</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">COGS (20%): $600,000</h3>
            <p>Includes cloud infra, APIs, support tools</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">R&D: $700,000</h3>
            <p>Product expansion and team costs</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sales & Marketing: $520,000</h3>
            <p>Including content, brand, and school activations</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">G&A: $300,000</h3>
            <p>Operational costs and team stipends</p>
          </div>
        </div>
      ),
    },
    forecast: {
      title: 'Years 3-5 Forecast',
      content: (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="min-w-full bg-obsidian border border-fog">
              <thead>
                <tr>
                  <th className="px-4 py-2 border border-fog">Year</th>
                  <th className="px-4 py-2 border border-fog">Paid Users</th>
                  <th className="px-4 py-2 border border-fog">Revenue/User</th>
                  <th className="px-4 py-2 border border-fog">Annual Revenue</th>
                  <th className="px-4 py-2 border border-fog">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border border-fog">3</td>
                  <td className="px-4 py-2 border border-fog">30,000</td>
                  <td className="px-4 py-2 border border-fog">$300</td>
                  <td className="px-4 py-2 border border-fog">$9,000,000</td>
                  <td className="px-4 py-2 border border-fog">Strong B2C + pilot school deals</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-fog">4</td>
                  <td className="px-4 py-2 border border-fog">60,000</td>
                  <td className="px-4 py-2 border border-fog">$300</td>
                  <td className="px-4 py-2 border border-fog">$18,000,000</td>
                  <td className="px-4 py-2 border border-fog">Scaled institutional adoption</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border border-fog">5</td>
                  <td className="px-4 py-2 border border-fog">150,000</td>
                  <td className="px-4 py-2 border border-fog">$300</td>
                  <td className="px-4 py-2 border border-fog">$45,000,000</td>
                  <td className="px-4 py-2 border border-fog">Hitting SOM ceiling</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ),
    },
  };

  return (
    <main className="min-h-screen bg-obsidian text-fog">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Financial Projections</h1>
        
        <FinancialCharts />
        <FinancialSimulator />
        
        <div className="flex space-x-4 mb-8 overflow-x-auto">
          {Object.keys(sections).map((key) => (
            <button
              key={key}
              onClick={() => setActiveSection(key)}
              className={`px-4 py-2 rounded ${
                activeSection === key
                  ? 'bg-fog text-obsidian'
                  : 'bg-obsidian border border-fog hover:bg-fog/10'
              }`}
            >
              {sections[key].title}
            </button>
          ))}
        </div>

        <div className="bg-obsidian border border-fog rounded-lg p-6">
          {sections[activeSection].content}
        </div>
      </div>
    </main>
  );
};

export default FinancialProjection; 