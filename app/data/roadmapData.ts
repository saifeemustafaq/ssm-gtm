import { RoadmapData } from '../types/roadmap';

export const roadmapData: RoadmapData = {
  quarters: [
    {
      id: 'q1',
      name: 'Q1: MVP Refinement & Market Preparation',
      objectives: [
        'Finalize product-market fit through beta testing feedback',
        'Set GTM infrastructure for B2C and B2B launch',
        'Build buzz and early user pipeline'
      ],
      kpis: [
        'Beta NPS > 45',
        'Landing page CTR > 3%',
        'At least 500 waitlist signups'
      ],
      months: [
        {
          id: 'm1',
          name: 'Month 1',
          activities: [
            {
              id: 'm1-p1',
              title: 'Final MVP Polish',
              type: 'product',
              status: 'completed',
              description: 'Usability enhancements, AI tuning, mobile optimization'
            },
            {
              id: 'm1-m1',
              title: 'Website Revamp',
              type: 'marketing',
              status: 'completed',
              description: 'Update website with new design and content'
            },
            {
              id: 'm1-c1',
              title: 'Waitlist Setup',
              type: 'b2c',
              status: 'completed',
              description: 'Create and launch waitlist signup for early access users'
            },
            {
              id: 'm1-p2',
              title: 'AI Recommendation Engine',
              type: 'product',
              status: 'completed',
              description: 'Refine ML models for academic profile matching'
            }
          ]
        },
        {
          id: 'm2',
          name: 'Month 2',
          activities: [
            {
              id: 'm2-b1',
              title: 'Beta Feedback Synthesis',
              type: 'b2b',
              status: 'in-progress',
              description: 'Analyze user insights from pilot schools/nonprofits'
            },
            {
              id: 'm2-m1',
              title: 'Recruit Ambassadors',
              type: 'marketing',
              status: 'planned',
              description: 'Recruit 10-20 micro-creators as student ambassadors'
            },
            {
              id: 'm2-c1',
              title: 'Early User Journey Mapping',
              type: 'b2c',
              status: 'in-progress',
              description: 'Define onboarding flow and key user touchpoints'
            },
            {
              id: 'm2-p1',
              title: 'NLP Chatbot Training',
              type: 'product',
              status: 'in-progress',
              description: 'Train automated guidance chatbot on college admissions FAQs'
            }
          ]
        },
        {
          id: 'm3',
          name: 'Month 3',
          activities: [
            {
              id: 'm3-b1',
              title: 'GTM Toolkit Finalization',
              type: 'b2b',
              status: 'planned',
              description: 'Complete school onboarding kits and partnership pitch decks'
            },
            {
              id: 'm3-m1',
              title: 'Marketing Assets Creation',
              type: 'marketing',
              status: 'planned',
              description: 'Create explainer video and social templates'
            },
            {
              id: 'm3-c1',
              title: 'Freemium Features Definition',
              type: 'b2c',
              status: 'planned',
              description: 'Finalize free vs. premium feature segmentation'
            },
            {
              id: 'm3-p1',
              title: 'Beta Student Dashboard',
              type: 'product',
              status: 'planned',
              description: 'Develop tracking dashboard for applications & deadlines'
            }
          ]
        }
      ]
    },
    {
      id: 'q2',
      name: 'Q2: Official Launch & Early Growth',
      objectives: [
        'Launch B2C offering in key geos',
        'Begin monetization via freemium-to-premium conversion',
        'Initiate B2B pilot outreach at scale'
      ],
      kpis: [
        '5,000 B2C users',
        'Premium conversion rate ≥ 10%',
        '5 active school/nonprofit partnerships'
      ],
      months: [
        {
          id: 'm4',
          name: 'Month 4',
          activities: [
            {
              id: 'm4-c1',
              title: 'Product Launch',
              type: 'b2c',
              status: 'planned',
              description: 'Official product launch targeting May-June'
            },
            {
              id: 'm4-m1',
              title: 'Content Marketing Push',
              type: 'marketing',
              status: 'planned',
              description: 'Launch blog, student success stories, FAFSA tips'
            },
            {
              id: 'm4-p1',
              title: 'Financial Aid Calculators',
              type: 'product',
              status: 'planned',
              description: 'Launch basic financial aid estimation tools'
            }
          ]
        },
        {
          id: 'm5',
          name: 'Month 5',
          activities: [
            {
              id: 'm5-c1',
              title: 'Premium Tier Launch',
              type: 'b2c',
              status: 'planned',
              description: 'Launch Premium Tier with mentorship and expert reviews'
            },
            {
              id: 'm5-b1',
              title: 'Institutional Outreach',
              type: 'b2b',
              status: 'planned',
              description: 'Begin outbound to 100+ schools/nonprofits'
            },
            {
              id: 'm5-p1',
              title: 'Automated Reminders',
              type: 'product',
              status: 'planned',
              description: 'Implement deadline notification system for applications'
            }
          ]
        },
        {
          id: 'm6',
          name: 'Month 6',
          activities: [
            {
              id: 'm6-m1',
              title: 'Paid Ad Campaigns',
              type: 'marketing',
              status: 'planned',
              description: 'Launch Google, IG, TikTok campaigns (CAC target: <$25)'
            },
            {
              id: 'm6-b1',
              title: 'Webinars & Demos',
              type: 'b2b',
              status: 'planned',
              description: 'Conduct webinars and demos for guidance counselors'
            },
            {
              id: 'm6-p1',
              title: 'Mobile Optimization',
              type: 'product',
              status: 'planned',
              description: 'Ensure full feature parity across all devices'
            }
          ]
        }
      ]
    },
    {
      id: 'q3',
      name: 'Q3: Scale Acquisition & Engagement',
      objectives: [
        'Drive scale via referral loops, organic traction',
        'Strengthen retention with feature depth & community engagement',
        'Accelerate B2B revenue pipeline'
      ],
      kpis: [
        '25,000 B2C users',
        '>30% DAU/MAU ratio',
        'Close 10 institutional contracts'
      ],
      months: [
        {
          id: 'm7',
          name: 'Month 7',
          activities: [
            {
              id: 'm7-c1',
              title: 'Ambassador Referral Challenge',
              type: 'b2c',
              status: 'planned',
              description: 'Launch incentivized peer growth program'
            },
            {
              id: 'm7-p1',
              title: 'Community Forums',
              type: 'product',
              status: 'planned',
              description: 'Launch community forums & peer Q&A features'
            },
            {
              id: 'm7-m1',
              title: 'Social Media Campaigns',
              type: 'marketing',
              status: 'planned',
              description: 'Student-focused campaigns on Instagram and TikTok'
            }
          ]
        },
        {
          id: 'm8',
          name: 'Month 8',
          activities: [
            {
              id: 'm8-p1',
              title: 'Financial Aid Tools',
              type: 'product',
              status: 'planned',
              description: 'Launch scholarship deadlines tracker and FAFSA updates'
            },
            {
              id: 'm8-b1',
              title: 'Case Studies',
              type: 'b2b',
              status: 'planned',
              description: 'Publish institutional impact reports'
            },
            {
              id: 'm8-c2',
              title: 'Peer Q&A Platform',
              type: 'b2c',
              status: 'planned',
              description: 'Enable student-to-student knowledge sharing'
            },
            {
              id: 'm8-m1',
              title: 'Educational Webinars',
              type: 'marketing',
              status: 'planned',
              description: 'Host financial literacy workshops for students'
            }
          ]
        },
        {
          id: 'm9',
          name: 'Month 9',
          activities: [
            {
              id: 'm9-p1',
              title: 'Gamification Features',
              type: 'product',
              status: 'planned',
              description: 'Implement in-app milestone badges'
            },
            {
              id: 'm9-b1',
              title: 'Sales Enablement',
              type: 'b2b',
              status: 'planned',
              description: 'Launch B2B pricing calculator and ROI tool'
            },
            {
              id: 'm9-c1',
              title: 'User Milestone Rewards',
              type: 'b2c',
              status: 'planned',
              description: 'Implement rewards for application completions'
            },
            {
              id: 'm9-m1',
              title: 'Success Story Campaigns',
              type: 'marketing',
              status: 'planned',
              description: 'Feature early student success outcomes'
            }
          ]
        }
      ]
    },
    {
      id: 'q4',
      name: 'Q4: Optimize for Retention, Revenue & Funding',
      objectives: [
        'Lock in year-end conversions during peak aid season',
        'Package success metrics for investor outreach',
        'Set 2026 roadmap priorities'
      ],
      kpis: [
        '50,000 B2C users',
        '$1.5M ARR milestone',
        'Investor-ready metrics: LTV/CAC > 3, churn < 5%'
      ],
      months: [
        {
          id: 'm10',
          name: 'Month 10',
          activities: [
            {
              id: 'm10-c1',
              title: 'Holiday Promotion Bundles',
              type: 'b2c',
              status: 'planned',
              description: 'Launch family plans and multi-month discounts'
            },
            {
              id: 'm10-p1',
              title: 'Data Dashboards',
              type: 'product',
              status: 'planned',
              description: 'Personal ROI and projected savings calculators'
            },
            {
              id: 'm10-m1',
              title: 'Holiday Promotions',
              type: 'marketing',
              status: 'planned',
              description: 'Special seasonal pricing and bundles for families'
            }
          ]
        },
        {
          id: 'm11',
          name: 'Month 11',
          activities: [
            {
              id: 'm11-b1',
              title: 'Series A Preparation',
              type: 'b2b',
              status: 'planned',
              description: 'Prepare traction deck and unit economics'
            },
            {
              id: 'm11-m1',
              title: 'Impact Report',
              type: 'marketing',
              status: 'planned',
              description: 'Publish Year 1 impact report'
            },
            {
              id: 'm11-c1',
              title: 'Premium Conversion Push',
              type: 'b2c',
              status: 'planned',
              description: 'Target free users during peak aid season'
            }
          ]
        },
        {
          id: 'm12',
          name: 'Month 12',
          activities: [
            {
              id: 'm12-p1',
              title: 'Year 2 Planning',
              type: 'product',
              status: 'planned',
              description: 'Plan career planning module and university partnerships'
            },
            {
              id: 'm12-b1',
              title: 'University Partnerships',
              type: 'b2b',
              status: 'planned',
              description: 'Initiate relationships with target universities'
            },
            {
              id: 'm12-c1',
              title: 'Renewals Campaign',
              type: 'b2c',
              status: 'planned',
              description: 'Launch annual subscription renewal incentives'
            },
            {
              id: 'm12-m1',
              title: 'Metrics Dashboard',
              type: 'marketing',
              status: 'planned',
              description: 'Create investor-ready acquisition metrics'
            }
          ]
        }
      ]
    }
  ]
}; 