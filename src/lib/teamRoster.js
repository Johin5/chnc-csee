// ─── Team roster ──────────────────────────────────────────────────────────────
// Single source of truth for the people shown on the home page strip and the
// full Team page. `photo` is the studio portrait; `pose` is that person's own
// quirky shot, revealed on hover. Both are 640×880 crops in /public/team.
// Refreshed Aug 2026 from the HR photo drive (team-wise folders) + roster sheet.
//
// Cards without a `pose` fall back to a gentle zoom; drop a `-pose.jpg` in
// /public/team and add the key here to switch them over. The drive's Sony .ARW
// raws held the missing poses for Balaji, Anand, Angel, Kiran and Bhawani.
//
// ── Still missing (no photo received yet): Jasman Kaur Boparai,
//    Bhagyashree Tejani, Shubhra Shinde. One unidentified man remains in the
//    drive's Creative/ folder (the dark-kurta pair at 16.31.16-2/17).

export const TEAM = [
  { name: 'Balaji Jagannathan', role: 'Founder & CEO', photo: '/team/balaji-jagannathan.jpg', pose: '/team/balaji-jagannathan-pose.jpg' },
  { name: 'Viswanathan Kalyanasundaram', role: 'Director', photo: '/team/viswanathan-kalyanasundaram.jpg', pose: '/team/viswanathan-kalyanasundaram-pose.jpg' },
  { name: 'Neha Malhotra', role: 'Director - New Business, Digital & Content Strategy', photo: '/team/neha-malhotra.jpg', pose: '/team/neha-malhotra-pose.jpg' },
  { name: 'Shankar Iyer', role: 'Director - Technology', photo: '/team/shankar-iyer.jpg', pose: '/team/shankar-iyer-pose.jpg' },
  { name: 'Anand Radhakrishnan', role: 'Director - Sales', photo: '/team/anand-radhakrishnan.jpg', pose: '/team/anand-radhakrishnan-pose.jpg' },
  { name: 'Aayush Soni', role: 'Manager - Influencer Marketing & Creative Production', photo: '/team/aayush-soni.jpg', pose: '/team/aayush-soni-pose.jpg' },
  { name: 'Adheet Shetty', role: 'Senior Marketing & Branding Executive', photo: '/team/adheet-shetty.jpg', pose: '/team/adheet-shetty-pose.jpg' },
  { name: 'Advait Dawal', role: 'Creative Visualiser & Designer', photo: '/team/advait-dawal.jpg', pose: '/team/advait-dawal-pose.jpg' },
  { name: 'Akansha Gwari', role: 'Senior Manager - Client Strategy', photo: '/team/akansha-gwari.jpg', pose: '/team/akansha-gwari-pose.jpg' },
  { name: 'Akash Khandare', role: 'Production', photo: '/team/akash-khandare.jpg', pose: '/team/akash-khandare-pose.jpg' },
  { name: 'Aman Rawat', role: 'Digital Strategy Manager', photo: '/team/aman-rawat.jpg', pose: '/team/aman-rawat-pose.jpg' },
  { name: 'Amin Khan', role: 'People Experience Associate', photo: '/team/amin-khan.jpg', pose: '/team/amin-khan-pose.jpg' },
  { name: 'Angel Chaturvedi', role: 'Senior Manager - Business Development', photo: '/team/angel-chaturvedi.jpg', pose: '/team/angel-chaturvedi-pose.jpg' },
  { name: 'Ankita Jain', role: 'AI Artist', photo: '/team/ankita-jain.jpg', pose: '/team/ankita-jain-pose.jpg' },
  {
    name: 'Archana Vaghela', role: 'Inside Sales & Marketing Associate',
    photo: '/team/archana-vaghela.jpg', pose: '/team/archana-vaghela-pose.jpg',
    // `bio` is a list of [label, value] rows revealed over the lower half of
    // the card. (Her hover video from the old shoot retired to .retired-team;
    // a `video` key here beats `pose` if it ever comes back.)
    bio: [
      ['Blood group', 'Chai, coffee, khana, peena, shayari, empathy, beer, doom scrolling'],
      ['Weapons', 'Eyes, kyunki ankhiyon se goli maare. Also, chasma laga hua hai…so 4 goli maare.'],
    ],
  },
  { name: 'Bhawani Singh Bhati', role: 'Manager - LPM & ORM', photo: '/team/bhawani-singh-bhati.jpg', pose: '/team/bhawani-singh-bhati-pose.jpg' },
  { name: 'Charvak Heramb', role: 'Executive - Design Strategy', photo: '/team/charvak-heramb.jpg', pose: '/team/charvak-heramb-pose.jpg' },
  { name: 'Divya Mittal', role: 'Senior Copy & Content Writer', photo: '/team/divya-mittal.jpg', pose: '/team/divya-mittal-pose.jpg' },
  { name: 'Fawwaz Bhati', role: 'Graphic Designer', photo: '/team/fawwaz-bhati.jpg', pose: '/team/fawwaz-bhati-pose.jpg' },
  { name: 'Ganesh Yedala', role: 'UI/UX Designer', photo: '/team/ganesh-yedala.jpg', pose: '/team/ganesh-yedala-pose.jpg' },
  { name: 'Gunnika Bhatia', role: 'Influencer Marketing Associate', photo: '/team/gunnika-bhatia.jpg', pose: '/team/gunnika-bhatia-pose.jpg' },
  { name: 'Harshali Sonawane', role: 'Graphic Designer', photo: '/team/harshali-sonawane.jpg', pose: '/team/harshali-sonawane-pose.jpg' },
  { name: 'Janhavi Thorat', role: 'Business Operations Associate', photo: '/team/janhavi-thorat.jpg', pose: '/team/janhavi-thorat-pose.jpg' },
  { name: 'Jayesh Jain', role: 'Group Account Manager', photo: '/team/jayesh-jain.jpg', pose: '/team/jayesh-jain-pose.jpg' },
  { name: 'Johanna Bohra', role: 'Intern - Strategy', photo: '/team/johanna-bohra.jpg', pose: '/team/johanna-bohra-pose.jpg' },
  { name: 'Johin Jose', role: 'Performance Marketing Manager', photo: '/team/johin-jose.jpg', pose: '/team/johin-jose-pose.jpg' },
  { name: 'Keerti Varma', role: 'Intern - Graphic Design', photo: '/team/keerti-varma.jpg', pose: '/team/keerti-varma-pose.jpg' },
  { name: 'Kiran Mulchandani', role: 'Senior Manager - Marketing & Branding', photo: '/team/kiran-mulchandani.jpg', pose: '/team/kiran-mulchandani-pose.jpg' },
  { name: 'Kishor Gaikwad', role: 'People Experience Associate', photo: '/team/kishor-gaikwad.jpg', pose: '/team/kishor-gaikwad-pose.jpg' },
  { name: 'Krish Daiya', role: 'Senior Account Manager', photo: '/team/krish-daiya.jpg', pose: '/team/krish-daiya-pose.jpg' },
  { name: 'Krish Dsilva', role: 'Manager - Brand Strategy', photo: '/team/krish-dsilva.jpg', pose: '/team/krish-dsilva-pose.jpg' },
  { name: 'Manas', role: 'AI Artist', photo: '/team/manas.jpg', pose: '/team/manas-pose.jpg' },
  { name: 'Meghna Das Gupta', role: 'Junior Account Manager', photo: '/team/meghna-das-gupta.jpg', pose: '/team/meghna-das-gupta-pose.jpg' },
  { name: 'Minakshi Chaugule', role: 'People Experience & Admin Associate', photo: '/team/minakshi-chaugule.jpg', pose: '/team/minakshi-chaugule-pose.jpg' },
  { name: 'Moazzam Ali', role: 'Creative Visualiser & Designer', photo: '/team/moazzam-ali.jpg', pose: '/team/moazzam-ali-pose.jpg' },
  { name: 'Muskan Aahi', role: 'Management Trainee', photo: '/team/muskan-aahi.jpg', pose: '/team/muskan-aahi-pose.jpg' },
  { name: 'Mustafa Ansari', role: 'Graphic Designer & Visualizer', photo: '/team/mustafa-ansari.jpg', pose: '/team/mustafa-ansari-pose.jpg' },
  { name: 'Nikita Salve', role: 'Business Operations Associate', photo: '/team/nikita-salve.jpg', pose: '/team/nikita-salve-pose.jpg' },
  { name: 'Obed Sam', role: 'Intern - Creator & Brand Partnerships', photo: '/team/obed-sam.jpg', pose: '/team/obed-sam-pose.jpg' },
  { name: 'Palak Kothari', role: 'Business Operations Associate', photo: '/team/palak-kothari.jpg', pose: '/team/palak-kothari-pose.jpg' },
  { name: 'Pranay Valecha', role: 'Executive - People Experience', photo: '/team/pranay-valecha.jpg', pose: '/team/pranay-valecha-pose.jpg' },
  { name: 'Prashant Birjudar', role: 'People Experience Associate', photo: '/team/prashant-birjudar.jpg', pose: '/team/prashant-birjudar-pose.jpg' },
  { name: 'Priya Thakur', role: 'Business Operations Intern', photo: '/team/priya-thakur.jpg', pose: '/team/priya-thakur-pose.jpg' },
  { name: 'Raj Sawant', role: 'Senior Designer & Visualizer', photo: '/team/raj-sawant.jpg', pose: '/team/raj-sawant-pose.jpg' },
  { name: 'Rakshit Bangera', role: 'Business Operations Associate', photo: '/team/rakshit-bangera.jpg', pose: '/team/rakshit-bangera-pose.jpg' },
  { name: 'Rakshita Srivastava', role: 'Team Lead - UI/UX', photo: '/team/rakshita-srivastava.jpg', pose: '/team/rakshita-srivastava-pose.jpg' },
  { name: 'Ransley Moraes', role: 'Data Analyst & Coordinator', photo: '/team/ransley-moraes.jpg', pose: '/team/ransley-moraes-pose.jpg' },
  { name: 'Ria Mitra', role: 'Sales & Marketing Associate', photo: '/team/ria-mitra.jpg', pose: '/team/ria-mitra-pose.jpg' },
  { name: 'Rohan Kharwar', role: 'Business Operations Associate', photo: '/team/rohan-kharwar.jpg', pose: '/team/rohan-kharwar-pose.jpg' },
  { name: 'Rohit Kanojiya', role: 'Business Operations Associate', photo: '/team/rohit-kanojiya.jpg', pose: '/team/rohit-kanojiya-pose.jpg' },
  { name: 'Rushika Kathrani', role: 'Sales Operations Associate', photo: '/team/rushika-kathrani.jpg', pose: '/team/rushika-kathrani-pose.jpg' },
  { name: 'Sailesh Nair', role: 'People Experience Associate', photo: '/team/sailesh-nair.jpg', pose: '/team/sailesh-nair-pose.jpg' },
  { name: 'Sakshi Bhushan Mandekar', role: 'Intern - People Experience', photo: '/team/sakshi-bhushan-mandekar.jpg', pose: '/team/sakshi-bhushan-mandekar-pose.jpg' },
  { name: 'Sandesh Singh', role: 'Senior Graphic Designer & Visualizer', photo: '/team/sandesh-singh.jpg', pose: '/team/sandesh-singh-pose.jpg' },
  { name: 'Sanika Nagulkar', role: 'Graphic Designer', photo: '/team/sanika-nagulkar.jpg', pose: '/team/sanika-nagulkar-pose.jpg' },
  { name: 'Saundarya Kumar', role: 'Client Servicing Executive', photo: '/team/saundarya-kumar.jpg', pose: '/team/saundarya-kumar-pose.jpg' },
  { name: 'Sheetal Chakral', role: 'Client Servicing Executive', photo: '/team/sheetal-chakral.jpg', pose: '/team/sheetal-chakral-pose.jpg' },
  { name: 'Shreya Chavan', role: 'Video Editor', photo: '/team/shreya-chavan.jpg', pose: '/team/shreya-chavan-pose.jpg' },
  { name: 'Sonali Belwalkar', role: 'Graphic Designer', photo: '/team/sonali-belwalkar.jpg', pose: '/team/sonali-belwalkar-pose.jpg' },
  { name: 'Susan Fernando', role: 'Creative Director', photo: '/team/susan-fernando.jpg', pose: '/team/susan-fernando-pose.jpg' },
  { name: 'Tanvi Jadhav', role: 'Business Operations Associate', photo: '/team/tanvi-jadhav.jpg', pose: '/team/tanvi-jadhav-pose.jpg' },
  { name: 'Tiana Balaji', role: 'Associate - Executive Office', photo: '/team/tiana-balaji.jpg', pose: '/team/tiana-balaji-pose.jpg' },
  { name: 'Vikrant Shedge', role: 'Business Operations Associate', photo: '/team/vikrant-shedge.jpg', pose: '/team/vikrant-shedge-pose.jpg' },
  { name: 'Vrajesh Daru', role: 'Associate Creative Director (Design)', photo: '/team/vrajesh-daru.jpg', pose: '/team/vrajesh-daru-pose.jpg' },
  { name: 'Wilson Thomas', role: 'UI/UX Designer', photo: '/team/wilson-thomas.jpg', pose: '/team/wilson-thomas-pose.jpg' },
  { name: 'Yash Sontate', role: 'AI Artist', photo: '/team/yash-sontate.jpg', pose: '/team/yash-sontate-pose.jpg' },
]

export const withPose = TEAM.filter(m => m.pose)
