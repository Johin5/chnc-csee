// ─── Team groups — careers page team switcher ────────────────────────────────
// Members are referenced by the exact `name` in teamRoster.js, so photos and
// roles stay in one place. A person can appear in more than one group.
//
// `openings` is the live vacancy list for that team and the single source for
// the marquee above it — add a role here and it appears in both places.
//
// PLACEHOLDER CONTENT: the blurbs are written to the brand voice but are not
// approved copy, and the groupings below were inferred from job titles — the
// ones worth a second look are Digital Strategy (performance, SEO, ORM and
// analytics folded together) and Production (built around Aayush's "Creative
// Production" title). Correct any name into the right list and the UI follows.

export const TEAM_GROUPS = [
  {
    name: 'Creative',
    openings: [
      {
        title: 'UI/UX Designer',
        responsibilities: [
          "Own flows end to end \u2014 research, wireframes, prototypes, final UI.",
          "Work directly with engineering so what ships matches what was designed.",
          "Keep the design system honest as products and campaigns pile up.",
        ],
        requirements: [
          "2+ years designing digital products, with a portfolio that shows the thinking.",
          "Fluent in Figma, comfortable with prototyping and handoff.",
          "Able to defend a decision without falling in love with it.",
        ],
      },
      {
        title: 'Copywriter',
        responsibilities: [
          "Write across campaigns, scripts, decks and long-form \u2014 in the client's voice, not yours.",
          "Sit in on strategy early so the words are not bolted on at the end.",
          "Turn a rough brief into three sharp options, fast.",
        ],
        requirements: [
          "A portfolio of published work across at least two formats.",
          "Ruthless with your own drafts and calm about edits.",
          "Reads widely enough to steal well.",
        ],
      },
      {
        title: 'Motion Graphics Designer',
        // Role visual — a wide (16:9) shot used as the page's hero, the way
        // case studies open on campaign art. Give any opening an `image`
        // (+ optional `imageAlt`) and its page opens on it. An .mp4 plays as
        // a muted loop; `imagePoster` shows while it streams in.
        image: '/careers/motion-graphics-designer.mp4',
        imagePoster: '/careers/motion-graphics-designer-poster.jpg',
        imageAlt: 'Racing an office chair past the polaroid wall at ConvergenSEE',
        responsibilities: [
          "Take static concepts into motion for social, film and product work.",
          "Build reusable templates the team can run with at volume.",
          "Handle the full chain \u2014 storyboard, animate, sound, export.",
        ],
        requirements: [
          "Strong After Effects; Cinema 4D or Blender is a plus.",
          "A reel that shows timing and craft, not just plugins.",
          "Delivers to spec across every platform's format list.",
        ],
      },
    ],
    blurb: 'Ideas get born, torn apart, and rebuilt here — usually before lunch. Design, 3D, motion and copy sit in one room so nothing leaves the floor half-thought.',
    members: [
      'Ashwin Kurup', 'Rakshita Srivastava', 'Charvak Heramb', 'Aastha Goyal',
      'Alen Sam', 'Bhoomi Jain', 'Ganesh Yedala', 'Mahek Kankaria',
      'Shreya Chavan', 'Tanushri Vaidya', 'Wilson Thomas', 'Riddhi Modi',
    ],
  },
  {
    name: 'Business Operations',
    openings: [
      {
        title: 'Business Operations Associate',
        responsibilities: [
          "Keep projects, budgets and timelines moving across every account.",
          "Run the vendor and procurement chase so no delivery slips.",
          "Turn recurring chaos into a process the team actually follows.",
        ],
        requirements: [
          "1+ year in operations, project coordination or account support.",
          "Spreadsheet-fluent and stubborn about follow-ups.",
          "Stays organised when five things land at once.",
        ],
      },
    ],
    blurb: 'The reason everything ships on time and nothing falls through a crack. Timelines, budgets, vendors, escalations — they hold the whole machine together.',
    members: [
      'Hemant Tambewagh', 'Palak Kothari', 'Rakshit Bangera',
      'Rohan Kharwar', 'Tanvi Jadhav', 'Vikrant Shedge',
    ],
  },
  {
    name: 'People Experience',
    openings: [],
    blurb: 'Hiring, onboarding, birthdays, blow-ups and everything in between. If working here feels like it does, this is who to blame.',
    members: ['Minakshi Chaugule', 'Shailesh Nair'],
  },
  {
    name: 'Digital Strategy',
    openings: [
      {
        title: 'Senior Performance Marketer',
        responsibilities: [
          "Plan, run and scale paid media across Meta, Google and emerging platforms.",
          "Own the number \u2014 spend, CAC, ROAS \u2014 and the story behind it.",
          "Test relentlessly and kill what does not work early.",
        ],
        requirements: [
          "3+ years running paid budgets at meaningful scale.",
          "Comfortable in the data, not just the dashboards.",
          "Can explain a bad week to a client without hiding behind jargon.",
        ],
      },
      {
        title: 'SEO Specialist',
        responsibilities: [
          "Run technical audits, on-page work and content plans that actually rank.",
          "Track SERP and AI-answer visibility, and act on what moves.",
          "Work with writers and developers to get fixes shipped, not filed.",
        ],
        requirements: [
          "2+ years of hands-on SEO with results you can point to.",
          "Fluent in GSC, GA4 and at least one crawler.",
          "Understands why a page ranks, not just that it does.",
        ],
      },
    ],
    blurb: 'Performance, SEO, ORM and the numbers behind all of it. They decide where the money goes and then prove it was the right call.',
    members: [
      'Johin Jose', 'Vidhyondra Bansode', 'Bhawani Singh Bhati',
      'Ransley Moraes', 'Akansha Gwari',
    ],
  },
  {
    name: 'Sales',
    openings: [
      {
        title: 'Business Development Manager',
        responsibilities: [
          "Identify, qualify and pursue new opportunities through inbound and outbound.",
          "Build and manage a pipeline that consistently meets or beats target.",
          "Run discovery calls that surface the real problem, not the stated one.",
        ],
        requirements: [
          "Proven experience in sales, business development or account management.",
          "Strong communication, presentation and negotiation skills.",
          "Bachelor's degree in Business, Marketing or a related field (preferred).",
        ],
      },
    ],
    blurb: 'First conversation, hardest questions. They bring the briefs in and set the expectation everyone else has to beat.',
    members: [
      'Anand Radhakrishnan', 'Karan Khanna', 'Angel Chaturvedi',
      'Avinab Saha', 'Reetu Sonar', 'Archana Vaghela', 'Ria Mitra',
    ],
  },
  {
    name: 'Account Management',
    openings: [
      {
        title: 'Account Manager',
        responsibilities: [
          "Own day-to-day client relationships and the quality of what reaches them.",
          "Translate business problems into briefs the team can execute.",
          "Protect scope, timelines and margins without souring the room.",
        ],
        requirements: [
          "2+ years in account management, ideally agency-side.",
          "Calm under escalation and clear in writing.",
          "Knows enough craft to push back on a weak idea.",
        ],
      },
    ],
    blurb: 'The people clients call first and trust most. Half translator, half air-traffic control, permanently three steps ahead.',
    members: ['Sakina Jaliwala', 'Deeksha Dinesh', 'Krish Daiya', 'Raj Patil'],
  },
  {
    name: 'Executive Office',
    openings: [],
    blurb: 'Where the long bets get made. Less about approving decks, more about deciding what the next five years look like.',
    members: [
      'Balaji Jagannathan', 'Viswanathan Kalyanasundaram',
      'Neha Malhotra', 'Vikas Shinde',
    ],
  },
  {
    name: 'Marketing and Branding',
    openings: [
      {
        title: 'Social Media Manager',
        responsibilities: [
          "Own content calendars, publishing and community across client handles.",
          "Spot what is moving culturally and turn it around the same day.",
          "Report on what worked with more than screenshots of likes.",
        ],
        requirements: [
          "2+ years managing brand handles with measurable growth.",
          "Sharp instinct for platform-native format and tone.",
          "Fast, and unbothered by a Friday evening trend.",
        ],
      },
    ],
    blurb: 'They build the brands other people end up copying — positioning, identity, and the stubborn insistence on saying something true.',
    members: ['Kiran Mulchandani', 'Adheet Shetty', 'Eshaan Sharma'],
  },
  {
    name: 'Influencer Marketing',
    openings: [
      {
        title: 'Influencer Marketing Associate',
        responsibilities: [
          "Scout, shortlist and negotiate with creators across categories.",
          "Run campaigns end to end \u2014 briefs, deliverables, timelines, payouts.",
          "Track performance and rebuild the roster around what performs.",
        ],
        requirements: [
          "1+ year working with creators or in talent management.",
          "Comfortable negotiating rates and chasing deliverables.",
          "Knows the difference between reach and influence.",
        ],
      },
    ],
    blurb: 'Creators, campaigns and the messy real work of making a partnership feel like it was never bought.',
    members: ['Aayush Soni', 'Saanjali Agarwal'],
  },
  {
    name: 'Production',
    openings: [
      {
        title: 'Video Editor',
        responsibilities: [
          "Cut social, brand and long-form video from raw footage to final master.",
          "Handle grade, sound and versioning for every platform ratio.",
          "Work with the shoot team so problems get solved on set, not in post.",
        ],
        requirements: [
          "Strong Premiere Pro or DaVinci Resolve; After Effects a plus.",
          "A reel showing range across formats and lengths.",
          "Fast turnarounds without letting quality slide.",
        ],
      },
    ],
    blurb: 'Shoots, edits, renders, reshoots. The team that turns a line on a deck into something you actually want to watch.',
    members: ['Aayush Soni', 'Alen Sam', 'Bhoomi Jain'],
  },
]
