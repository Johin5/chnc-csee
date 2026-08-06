// ─── Team roster ──────────────────────────────────────────────────────────────
// Single source of truth for the people shown on the home page strip and the
// full Team page. `photo` is the studio portrait; `pose` is that person's own
// quirky shot from the same session, revealed on hover. Both are 640×880 crops
// generated from the ConvergenSEE shoot and live in /public/team.
//
// Two people have no pose on file yet — Kiran Mulchandani and Riddhi Modi.
// Their cards fall back to a gentle zoom; drop a `-pose.jpg` in /public/team
// and add a `pose` key here to switch them over.

export const TEAM = [
  { name: 'Balaji Jagannathan', role: 'MD & CEO', photo: '/team/balaji-jagannathan.jpg', pose: '/team/balaji-jagannathan-pose.jpg' },
  { name: 'Viswanathan Kalyanasundaram', role: 'Co-founder & Vice-President', photo: '/team/viswanathan-kalyanasundaram.jpg', pose: '/team/viswanathan-kalyanasundaram-pose.jpg' },
  { name: 'Neha Malhotra', role: 'Co-founder & Director', photo: '/team/neha-malhotra.jpg', pose: '/team/neha-malhotra-pose.jpg' },
  { name: 'Vikas Shinde', role: 'Executive Office', photo: '/team/vikas-shinde.jpg', pose: '/team/vikas-shinde-pose.jpg' },
  { name: 'Anand Radhakrishnan', role: 'Director of Sales', photo: '/team/anand-radhakrishnan.jpg', pose: '/team/anand-radhakrishnan-pose.jpg' },
  { name: 'Karan Khanna', role: 'Associate Director - Business Development', photo: '/team/karan-khanna.jpg', pose: '/team/karan-khanna-pose.jpg' },
  { name: 'Aastha Goyal', role: 'Graphic Designer', photo: '/team/aastha-goyal.jpg', pose: '/team/aastha-goyal-pose.jpg' },
  { name: 'Aayush Soni', role: 'Manager - Influencer Marketing & Creative Production', photo: '/team/aayush-soni.jpg', pose: '/team/aayush-soni-pose.jpg' },
  { name: 'Adheet Shetty', role: 'Branding & Marketing Associate', photo: '/team/adheet-shetty.jpg', pose: '/team/adheet-shetty-pose.jpg' },
  { name: 'Akansha Gwari', role: 'Senior Manager - Client Strategy', photo: '/team/akansha-gwari.jpg', pose: '/team/akansha-gwari-pose.jpg' },
  { name: 'Alen Sam', role: '3D Graphic Designer', photo: '/team/alen-sam.jpg', pose: '/team/alen-sam-pose.jpg' },
  { name: 'Angel Chaturvedi', role: 'Senior Manager - Business Development', photo: '/team/angel-chaturvedi.jpg', pose: '/team/angel-chaturvedi-pose.jpg' },
  {
    name: 'Archana Vaghela', role: 'Inside Sales & Marketing Associate',
    photo: '/team/archana-vaghela.jpg', pose: '/team/archana-vaghela-pose.jpg',
    // A `video` beats `pose` on hover — it loops silently like a GIF. `bio` is a
    // list of [label, value] rows revealed over the lower half of the card.
    video: '/team/archana-vaghela.mp4',
    bio: [
      ['Blood group', 'Chai, coffee, khana, peena, shayari, empathy, beer, doom scrolling'],
      ['Weapons', 'Eyes, kyunki ankhiyon se goli maare. Also, chasma laga hua hai…so 4 goli maare.'],
    ],
  },
  { name: 'Ashwin Kurup', role: 'Design Manager', photo: '/team/ashwin-kurup.jpg', pose: '/team/ashwin-kurup-pose.jpg' },
  { name: 'Avinab Saha', role: 'Business Development Manager', photo: '/team/avinab-saha.jpg', pose: '/team/avinab-saha-pose.jpg' },
  { name: 'Bhawani Singh Bhati', role: 'Manager - LPM & ORM', photo: '/team/bhawani-singh-bhati.jpg', pose: '/team/bhawani-singh-bhati-pose.jpg' },
  { name: 'Bhoomi Jain', role: 'Creative', photo: '/team/bhoomi-jain.jpg', pose: '/team/bhoomi-jain-pose.jpg' },
  { name: 'Charvak Heramb', role: 'Executive - Design Strategy', photo: '/team/charvak-heramb.jpg', pose: '/team/charvak-heramb-pose.jpg' },
  { name: 'Deeksha Dinesh', role: 'Account Manager', photo: '/team/deeksha-dinesh.jpg', pose: '/team/deeksha-dinesh-pose.jpg' },
  { name: 'Eshaan Sharma', role: 'Marketing & Branding', photo: '/team/eshaan-sharma.jpg', pose: '/team/eshaan-sharma-pose.jpg' },
  { name: 'Ganesh Yedala', role: 'UI/UX Designer', photo: '/team/ganesh-yedala.jpg', pose: '/team/ganesh-yedala-pose.jpg' },
  { name: 'Hemant Tambewagh', role: 'Business Operations Associate', photo: '/team/hemant-tambewagh.jpg', pose: '/team/hemant-tambewagh-pose.jpg' },
  { name: 'Johin Jose', role: 'Manager - Performance Marketing', photo: '/team/johin-jose.jpg', pose: '/team/johin-jose-pose.jpg' },
  { name: 'Kiran Mulchandani', role: 'Senior Manager - Branding & Marketing', photo: '/team/kiran-mulchandani.jpg' },
  { name: 'Krish Daiya', role: 'Account Manager', photo: '/team/krish-daiya.jpg', pose: '/team/krish-daiya-pose.jpg' },
  { name: 'Mahek Kankaria', role: 'Graphic Designer', photo: '/team/mahek-kankaria.jpg', pose: '/team/mahek-kankaria-pose.jpg' },
  { name: 'Minakshi Chaugule', role: 'People Experience & Admin Associate', photo: '/team/minakshi-chaugule.jpg', pose: '/team/minakshi-chaugule-pose.jpg' },
  { name: 'Palak Kothari', role: 'Business Operations Associate', photo: '/team/palak-kothari.jpg', pose: '/team/palak-kothari-pose.jpg' },
  { name: 'Raj Patil', role: 'Client Servicing Executive', photo: '/team/raj-patil.jpg', pose: '/team/raj-patil-pose.jpg' },
  { name: 'Rakshit Bangera', role: 'Business Operations Associate', photo: '/team/rakshit-bangera.jpg', pose: '/team/rakshit-bangera-pose.jpg' },
  { name: 'Rakshita Srivastava', role: 'Team Lead - UI/UX Design', photo: '/team/rakshita-srivastava.jpg', pose: '/team/rakshita-srivastava-pose.jpg' },
  { name: 'Ransley Moraes', role: 'Data Analyst & Coordinator', photo: '/team/ransley-moraes.jpg', pose: '/team/ransley-moraes-pose.jpg' },
  { name: 'Reetu Sonar', role: 'Business Development Manager', photo: '/team/reetu-sonar.jpg', pose: '/team/reetu-sonar-pose.jpg' },
  { name: 'Ria Mitra', role: 'Sales & Marketing Associate', photo: '/team/ria-mitra.jpg', pose: '/team/ria-mitra-pose.jpg' },
  { name: 'Riddhi Modi', role: 'Copywriter', photo: '/team/riddhi-modi.jpg' },
  { name: 'Rohan Kharwar', role: 'Business Operations Associate', photo: '/team/rohan-kharwar.jpg', pose: '/team/rohan-kharwar-pose.jpg' },
  { name: 'Saanjali Agarwal', role: 'Influencer Marketing Associate', photo: '/team/saanjali-agarwal.jpg', pose: '/team/saanjali-agarwal-pose.jpg' },
  { name: 'Sakina Jaliwala', role: 'Senior Account Manager', photo: '/team/sakina-jaliwala.jpg', pose: '/team/sakina-jaliwala-pose.jpg' },
  { name: 'Shailesh Nair', role: 'People Experience Associate', photo: '/team/shailesh-nair.jpg', pose: '/team/shailesh-nair-pose.jpg' },
  { name: 'Shreya Chavan', role: 'Graphic Designer', photo: '/team/shreya-chavan.jpg', pose: '/team/shreya-chavan-pose.jpg' },
  { name: 'Tanushri Vaidya', role: 'Graphic Designer', photo: '/team/tanushri-vaidya.jpg', pose: '/team/tanushri-vaidya-pose.jpg' },
  { name: 'Tanvi Jadhav', role: 'Business Operations Associate', photo: '/team/tanvi-jadhav.jpg', pose: '/team/tanvi-jadhav-pose.jpg' },
  { name: 'Vidhyondra Bansode', role: 'Senior SEO Manager', photo: '/team/vidhyondra-bansode.jpg', pose: '/team/vidhyondra-bansode-pose.jpg' },
  { name: 'Vikrant Shedge', role: 'Business Operations Associate', photo: '/team/vikrant-shedge.jpg', pose: '/team/vikrant-shedge-pose.jpg' },
  { name: 'Wilson Thomas', role: 'UI/UX Designer', photo: '/team/wilson-thomas.jpg', pose: '/team/wilson-thomas-pose.jpg' },
]

export const withPose = TEAM.filter(m => m.pose)
