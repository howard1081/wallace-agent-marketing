'use strict';

const MARKETING = 'https://home.wallaceconnect.com/home/wre-marketing';
const POSTIT = MARKETING + '/wallace-post-it';
const MEDIA = 'https://dan-media1.odoo.com/booknow';
const CONSULT = 'https://wallacemarketing.zohobookings.com/#/4775394000000076128';
const LUXURY = 'mailto:luxury@wallacetn.com?subject=For%20Rhonda%20Thompson%20%E2%80%94%20luxury%20marketing';
const NAR = 'https://cms.nar.realtor/sites/default/files/2025-03/2025-home-buyers-and-sellers-generational-trends-report-04-01-2025.pdf';
const HIGHLIGHTS = 'https://www.nar.realtor/sites/default/files/2024-11/2024-profile-of-home-buyers-and-sellers-highlights-11-04-2024_2.pdf';
const STAGING = 'https://www.nar.realtor/press-releases/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market';

// National findings support the practice, not the performance of a particular tool.
const evidence = {
  relationships: {fact:'38% of sellers found their agent through a friend, neighbor or relative; 28% used an agent they had worked with before.',url:NAR,label:'NAR 2025 Generational Trends · Exhibit 7-1, p. 119',limit:'This supports staying connected. It does not show that any particular mailing, gift or CRM causes a sale.'},
  reputation: {fact:'35% of sellers named agent reputation as the most important factor when choosing an agent.',url:NAR,label:'NAR 2025 Generational Trends · Exhibit 7-7, p. 125',limit:'Reputation includes service and experience. A logo, headshot or review alone does not establish it.'},
  contact: {fact:'47% of buyers who used the internet in their home search rated real estate agent contact information “very useful.”',url:NAR,label:'NAR 2025 Generational Trends · Exhibit 3-6, p. 56',limit:'This supports making contact easy. It does not show that a website, QR code or digital card creates traffic by itself.'},
  photos: {fact:'83% of buyers who used the internet in their home search rated photos “very useful.”',url:NAR,label:'NAR 2025 Generational Trends · Exhibit 3-6, p. 56',limit:'This measures usefulness, not a guaranteed increase in sale price or speed.'},
  video: {fact:'In NAR’s 2025 staging survey, 48% of buyers’ agents said listing videos were highly important to their clients.',url:STAGING,label:'NAR · 2025 Profile of Home Staging release',limit:'This is agents’ reported experience, not a measured return from a video or drone package.'},
  marketing: {fact:'22% of sellers said marketing the home to potential buyers was the help they most wanted from their agent.',url:HIGHLIGHTS,label:'NAR 2024 Profile Highlights · Agent-Assisted Home Sales',limit:'This describes what sellers value. It does not establish results for a report, advertisement or mailing.'},
  price: {fact:'20% of sellers said competitive pricing was the help they most wanted from their agent.',url:HIGHLIGHTS,label:'NAR 2024 Profile Highlights · Agent-Assisted Home Sales',limit:'The value is in your pricing judgment and explanation. The presentation software does not supply that judgment.'}
};

const categories = {
  yourself: {
    title:'Market yourself',intro:'Be remembered. Be easy to reach. Keep the relationship going.',
    goals:[
      {id:'stand-out',label:'Stand out from other agents',title:'Give people a reason to remember you.',intro:'Start with a recognizable identity, then put it where your audience will see it.',tools:['branding','headshot','personal-social'],team:'brand'},
      {id:'easy-to-reach',label:'Make it easy to reach me',title:'Make the next conversation easy.',intro:'Give someone you meet a simple way to find you again.',tools:['digital-card','website','signature'],team:'contact'},
      {id:'stay-connected',label:'Stay in touch after the close',title:'The closing is a beginning.',intro:'Choose a useful reason to stay in touch. Add your own conversation.',tools:['friends','lolo','email'],team:'relationships'},
      {id:'earn-trust',label:'Earn trust & referrals',title:'Turn good service into your next introduction.',intro:'Let people see your work, remember your help and know whom to call.',tools:['reviews','follow-up','referrals'],team:'trust'}
    ]
  },
  property: {
    title:'Market a property',intro:'Start with the seller’s confidence. Then help the right buyer take a closer look.',
    goals:[
      {id:'win-listing',label:'Win the listing',title:'Show the seller you have a plan.',intro:'Explain how you would market this home—and support the asking price.',tools:['migration','price'],team:'listing'},
      {id:'first-impression',label:'Make a great first impression',title:'Help buyers see what makes the home worth a visit.',intro:'Choose what this property needs. You do not need to order everything.',tools:['photos','video','staging','brochure'],team:'presentation'},
      {id:'get-seen',label:'Put the listing in front of more people',title:'Give the listing another way to be found.',intro:'Choose a channel, set a budget and decide how you’ll handle the response.',tools:['ads','quantum','xpressdocs','adwerx'],team:'ads'},
      {id:'social',label:'Share my listing on social media',title:'Give your network something worth opening.',intro:'A graphic helps you start. Your caption, posting and replies make it marketing.',tools:['social','canva','custom-social'],team:'social'}
    ]
  },
  luxury: {
    title:'Have a luxury property?',intro:'Prepare the pitch. Present the details. Bring in Wallace’s luxury support.',
    goals:[
      {id:'appointment',label:'Prepare for the listing appointment',title:'Walk in ready to explain your approach.',intro:'Build the conversation around this property, its competition and your marketing plan.',tools:['migration','price','luxury-package'],team:'luxury'},
      {id:'presentation',label:'Show what makes this home special',title:'Make the distinctive details clear.',intro:'Choose the media and materials that explain this home best.',tools:['photos','video','brochure','luxury-social'],team:'luxury'},
      {id:'reach',label:'Explore luxury exposure',title:'Bring the luxury network into the plan.',intro:'Start with Rhonda Thompson to confirm the property’s fit and available opportunities.',tools:['lpi'],team:'luxury'}
    ]
  }
};

const tools = {
  branding: {
    name:'Personal branding',job:'Make your name recognizable.',pitch:'A personal brand gives your marketing a consistent look.',
    benefit:'When someone encounters you again, consistent materials help them connect the dots. Pair that recognition with a clear reason to choose you: your area, your expertise and the service you deliver.',
    work:['Tell Marketing whom you serve and what makes your service different.','Approve your identity and use it across your materials.','Put those materials in front of people consistently.'],
    reality:'A new logo needs an audience and good service behind it.',cost:'Paid design',fees:'Logo design: $150 for one option or $350 for three options, per the supplied fee sheet.',
    action:'Request branding help',url:MARKETING,setup:'Market Yourself → Design Services → Logo Design. Bring examples of your current materials.',evidence:'reputation',measure:'Ask new contacts how they heard of you and what they remembered.',support:'Marketing'
  },
  headshot: {
    name:'Professional headshot',job:'Put a face to your name.',pitch:'A current portrait helps people recognize the agent they’re meeting.',
    benefit:'Your photo helps connect a referral, online profile and real conversation to the same person. Use it consistently so prospective clients know whom they are contacting.',
    work:['Book the session and arrive prepared.','Update your website, profiles and marketing with the new photo.','Introduce yourself and follow up with the people you meet.'],
    cost:'Paid session',fees:'$75 per the supplied sheet; one complimentary headshot for new Wallace agents. Confirm eligibility.',action:'Book a headshot',url:'https://wallacemarketing.zohobookings.com/#/4775394000000076088',setup:'Choose a headshot appointment and confirm the session details.',evidence:'reputation',measure:'Keep the same current photo at the places prospects check before contacting you.',support:'Marketing'
  },
  'personal-social': {
    name:'Wallace Post-It · personal promotion',job:'Show up with a recognizable look.',pitch:'Turn your photo into a Wallace-branded social graphic.',
    benefit:'A ready-to-use graphic makes it easier to stay visible to people who already know you. Add something useful about your work so they have a reason to remember and contact you.',
    work:['Choose a photo and an appropriate personal-promotion design.','Add your own useful caption and publish the graphic.','Reply to comments and messages, then continue the conversation.'],
    reality:'Creating the graphic does not publish it for you.',cost:'Included',fees:'Free to Wallace agents.',action:'Open Wallace Post-It',url:POSTIT,setup:'Use the personal promotional category. The supplied inventory lists (865) 419-9975; check the Post-It page for current instructions.',evidence:'relationships',vendor:'https://agenticon.com/',measure:'Look for conversations and inquiries, beyond likes.',support:'Marketing'
  },
  'digital-card': {
    name:'Spark digital business card',job:'Make your contact details easy to save.',pitch:'One link or QR code takes someone to your digital business card.',
    benefit:'After an introduction, give the person a simple way to find you again. Saving your details removes a small obstacle between “we met” and a future conversation.',
    work:['Supply accurate contact details, photo and links.','Share your card when you meet someone and invite them to save it.','With their permission, save their details and follow up yourself.'],
    reality:'A QR code needs to be shared. It does not find clients for you.',cost:'Paid setup + annual fee',fees:'$15 design plus $50 per year, per the supplied fee sheet.',action:'Request a digital card',url:MARKETING,setup:'Market Yourself → Design Services → Business Cards (Digital).',evidence:'contact',measure:'Use it in real introductions and check that every link works.',support:'Marketing'
  },
  website: {
    name:'Your agent website',job:'Give people one place to get to know you.',pitch:'Your website brings your story and contact information together.',
    benefit:'Someone who hears your name can learn why you may be a good fit and take the next step. The site supports the introduction you make through referrals, email, social media and conversation.',
    work:['Keep your bio, service areas, photo and contact form current.','Share useful pages in your emails, posts and conversations.','Respond to inquiries and agree on a next step.'],
    reality:'Publishing a website is the start. You still have to bring people to it.',cost:'Confirm setup & fees',fees:'Ask Technology about your website setup, inclusion and any charges; these were not established by the inventory.',action:'Open My Website',url:'https://svc.moxiworks.com/service/v1/auth/intranet_sessions/agent_site',setup:'Wallace Connect → My Website. Ask Marketing for content help and Technology for setup help.',evidence:'contact',vendor:'https://moxiworks.com/solutions/real-estate-website-builder/',measure:'Check visits, then inquiries. No visitors means revisiting promotion; visits without inquiries means reviewing the page.',support:'Technology / Help Desk'
  },
  signature: {
    name:'Branded email signature',job:'Put your next step in every email.',pitch:'A consistent signature keeps your contact details close at hand.',
    benefit:'When someone forwards your email or wants to reconnect, your details travel with the message. A useful link can point them to your website or digital card.',
    work:['Supply current contact details and the link you want people to use.','Install your signature and test it on desktop and phone.','Use it in helpful, personal emails and reply when people respond.'],
    cost:'Template or paid design',fees:'Free template available; Marketing design is $15 per the supplied fee sheet.',action:'Find signature options',url:MARKETING,setup:'Market Yourself → Design Services → Email Signature.',evidence:'contact',measure:'Test the links and make the contact route obvious.',support:'Marketing'
  },
  friends: {
    name:'From Your Friends',job:'Stay in their mailbox after closing.',pitch:'Send a recurring postcard with a local offer and your name.',
    benefit:'A useful touchpoint gives a past client a reason to remember you between moves. Follow it with personal contact so you know when they—or someone they know—need real estate help.',
    work:['Choose your contacts and keep mailing addresses current.','Review your personalization and confirm the recurring cost.','Keep making personal check-ins and respond to introductions.'],
    reality:'The mailing maintains a touchpoint. You maintain the relationship.',cost:'Paid per contact',fees:'Agent-paid recurring service. Confirm the current per-contact price and delivery schedule.',action:'Open From Your Friends',url:'https://my.fromyourfriends.com/sso/wallace',setup:'Wallace Connect → From Your Friends. Review the local offers available for your recipients.',evidence:'relationships',vendor:'https://www.fromyourfriends.com/',measure:'Track replies, personal conversations and introductions from past clients.',support:'Marketing'
  },
  lolo: {
    name:'LoLo',job:'Give past clients a local reason to smile.',pitch:'Send a local gift through a recurring client-touch program.',
    benefit:'A small local gift gives you a friendly reason to reconnect. The business opportunity comes from staying a helpful person they remember and recommend.',
    work:['Select contacts and check local gift availability.','Keep recipient information and your message current.','Follow up personally and keep helping between transactions.'],
    reality:'A delivered gift is a touchpoint, not a referral request completed.',cost:'Paid per contact',fees:'Agent-paid recurring service. Confirm pricing and supported locations before enrolling.',action:'Open LoLo',url:'https://www.lolo.gifts/integrations/moxiworks/oauth/sso',setup:'Wallace Connect → LoLo. Confirm which East Tennessee locations are served.',evidence:'relationships',vendor:'https://www.joinlolo.com/',measure:'Notice which touchpoints lead to real conversations and keep your contact list relevant.',support:'Marketing'
  },
  email: {
    name:'ActivePipe',job:'Keep useful emails going out.',pitch:'Schedule email campaigns for your contacts.',
    benefit:'Useful emails give people a regular reminder of your help. Replies can open a conversation about changing needs, a future move or someone they could introduce to you.',
    work:['Choose relevant content and a contact list that expects your emails.','Check the message before scheduling it.','Answer replies and make personal contact regularly.'],
    reality:'An email open does not tell you someone is ready to move. Ask.',cost:'Included',fees:'Included for Wallace agents.',action:'Open ActivePipe',url:'http://auth.activepipe.com/sso/oauth2/wallace_tn',setup:'Wallace Connect → ActivePipe. Start with one campaign suited to your audience.',evidence:'relationships',vendor:'https://activepipe.com/real-estate-email-marketing/',measure:'Count useful replies and agreed follow-ups, not just opens.',support:'Marketing'
  },
  reviews: {
    name:'Testimonial Tree',job:'Let past clients explain why they chose you.',pitch:'Collect honest client reviews in one place.',
    benefit:'A prospective client can see evidence of how you treat people. Put genuine reviews where prospects already look, then connect that experience to the help they need.',
    work:['Deliver good service and ask for an honest review after closing.','Read the feedback, respond and address service problems.','Share reviews in relevant marketing and answer new inquiries.'],
    reality:'A review hidden in your account cannot help a prospect decide.',cost:'Included',fees:'Included for Wallace agents.',action:'Open Testimonial Tree',url:'https://testimonialtree.com/oauth/RedirectToAuth.aspx?provider=30c6e50734274fa88569ae2c2d087b82&providerName=moxi',setup:'Use the Testimonial Tree link in Wallace Connect if the direct sign-in link changes.',evidence:'reputation',vendor:'https://www.testimonialtree.com/',measure:'Ask prospects which information helped them decide to contact you.',support:'Marketing'
  },
  'follow-up': {
    name:'MoxiEngage',job:'Remember who needs your next call.',pitch:'Keep contacts and follow-up tasks in one place.',
    benefit:'A planned follow-up keeps a promising conversation from disappearing into a busy week. Listening, helping and agreeing on the next step is how that conversation can become business.',
    work:['Add the people you know and useful notes about their needs.','Set a next contact date and make the call or send the message.','Record what changed and agree on when to reconnect.'],
    reality:'The reminder helps you remember. You still have the conversation.',cost:'Included',fees:'Included for Wallace agents.',action:'Open MoxiEngage',url:'https://engage.wallaceconnect.com/',setup:'Wallace Connect → Engage. Gather your contacts and set a regular follow-up time.',evidence:'relationships',vendor:'https://support.moxiworks.com/hc/en-us/articles/205467585-MoxiEngage-Overview-and-Initial-Setup',measure:'Track two-way conversations, introductions and agreed appointments.',support:'Technology / Help Desk'
  },
  referrals: {
    name:'Leading Real Estate Companies of the World®',job:'Help a client moving outside your area.',pitch:'Use Wallace’s network to arrange an agent introduction in another market.',
    benefit:'You can keep serving a relationship even when the move is beyond your service area. An agreed referral arrangement may create a business opportunity while connecting the client with local help.',
    work:['Understand the move, destination and help the client needs.','Ask your broker or relocation contact to arrange the referral and terms.','Make the introduction and stay involved in the handoff.'],
    cost:'Network access included',fees:'Referral arrangements and any fees must be confirmed through the appropriate Wallace broker or relocation contact.',action:'Open LeadingRE resources',url:'https://sso.moxiworks.com/saml/0469dfc6-6b26-42ab-9d3d-266a7748852d/initiate/',setup:'Wallace Connect → LeadingRE. Ask your broker who coordinates outbound referrals.',fact:'LeadingRE is a network of independent real estate companies. Wallace’s supplied inventory includes access to its referral resources.',source:'https://www.leadingre.com/',sourceLabel:'LeadingRE · network overview',limit:'Network membership does not guarantee acceptance, a closed transaction or a referral payment.',measure:'Confirm the receiving agent connects with your client and provides updates.',support:'Your broker / relocation contact'
  },
  migration: {
    name:'Buyer Migration Report',job:'Walk in with a plan for this home.',pitch:'A property-specific report gives you a marketing story to explain at the listing appointment.',
    benefit:'Show the seller how the home’s features connect to potential demand and your proposed marketing. That gives them something concrete to evaluate when deciding whom to hire.',
    work:['Supply accurate property details and your appointment date.','Read the report, check the sources and practice explaining your recommendations.','Present the plan, answer the seller’s questions and carry out the agreed marketing.'],
    reality:'The report supports your pitch. Your explanation and follow-through earn confidence.',cost:'Paid report',fees:'$50 design per the supplied fee sheet. Ask Marketing to confirm suitability, scope and turnaround for this property.',action:'Request a migration report',url:MARKETING,setup:'Market a Property → Consultation → Buyer Migration Study. Ask Marketing what information they need.',evidence:'marketing',extra:'The supplied Wallace example connects property features, competing homes and potential markets to a proposed plan. Its market scores are not verified predictions of who will buy. Check dates, sources and assumptions before quoting figures.',measure:'Can the seller explain why your proposed plan fits their home? Agree on next steps and a time to review results.',support:'Marketing'
  },
  price: {
    name:'MoxiPresent',job:'Make the asking price make sense.',pitch:'Organize comparable homes into a clear seller presentation.',
    benefit:'Help the seller understand your recommendation and the trade-offs behind it. A well-explained local comparison can support confidence in your advice before and during the listing.',
    work:['Choose genuinely comparable homes and check the data.','Explain the differences and your recommended price.','Agree on a review date and revisit the price as market response changes.'],
    reality:'The presentation organizes your evidence. You supply the judgment.',cost:'Included',fees:'Included for Wallace agents.',action:'Open MoxiPresent',url:'https://present.wallaceconnect.com/service/cma/wcma',setup:'Wallace Connect → Present. Use the Wallace template and neighborhood-level comparables; a regional average is not a property valuation.',evidence:'price',vendor:'https://support.moxiworks.com/hc/en-us/articles/205183385-Introducing-Moxi-Present',measure:'Look for an informed pricing decision and an agreed review plan.',support:'Marketing · Technology for data or login issues'
  },
  photos: {
    name:'Professional listing photography',job:'Give buyers a reason to take a closer look.',pitch:'Show the home in clear, carefully prepared listing photos.',
    benefit:'Photos help a buyer decide whether a property deserves a visit. Strong presentation supports that decision alongside price, condition, location and access.',
    work:['Prepare the home with the seller before the shoot.','Arrange access and review the images for accuracy.','Publish the photos, arrange showings and discuss feedback with the seller.'],
    cost:'Paid media service',fees:'See the media booking page for current packages and prices.',action:'Book listing photos',url:MEDIA,setup:'Market a Property → Photo/Video/Drone. Confirm what is included and how the home should be prepared.',evidence:'photos',measure:'Look for showing requests and useful buyer feedback, then adjust the plan.',support:'Marketing / media provider'
  },
  video: {
    name:'Property video & drone media',job:'Show how the property fits together.',pitch:'Use motion or an aerial view to explain space, setting and features.',
    benefit:'When layout, land or setting is a major selling point, the right media can help a buyer understand it before a visit. Choose the format for the property, then distribute it where interested people will see it.',
    work:['Choose the features and format that need explaining.','Prepare the property, arrange the shoot and review the result.','Publish and share the media, then answer questions and arrange visits.'],
    reality:'A video needs distribution. A finished file is only the starting point.',cost:'Paid media service',fees:'Ask the media provider for current video and drone options, scope and prices.',action:'Explore media services',url:MEDIA,setup:'Market a Property → Photo/Video/Drone. Ask which format best explains the home and setting.',evidence:'video',measure:'Look for specific questions and showing requests from people who viewed the property.',support:'Marketing / media provider'
  },
  staging: {
    name:'Virtual staging',job:'Help an empty room make sense.',pitch:'Add digital furnishings to illustrate a possible use of the space.',
    benefit:'A buyer may better understand how a vacant room could work. Use the illustration to start a conversation about the actual space and invite them to see it.',
    work:['Supply suitable, accurate photos of the empty room.','Review the staged version and clearly identify it as virtually staged.','Use it alongside an accurate view of the property and answer questions.'],
    cost:'Paid image service',fees:'From $25 for one image on the supplied fee sheet; confirm current packages and any extra work.',action:'Ask about virtual staging',url:MARKETING,setup:'Ask Marketing for the current virtual-staging request process and required image quality.',fact:'Wallace’s supplied inventory offers virtual staging as an image service. It illustrates a furnished version of a room.',source:MARKETING,sourceLabel:'Wallace Marketing · service access',limit:'Physical-staging survey results do not establish a return for this virtual-staging service. No verified sale-price lift is claimed.',measure:'Listen for whether buyers understand the room’s use; do not measure success by the image alone.',support:'Marketing'
  },
  brochure: {
    name:'Property brochures & flyers',job:'Give buyers the details to take with them.',pitch:'Put the home’s key photos and features into a clear handout.',
    benefit:'A useful takeaway helps someone revisit the property and discuss it with others after a showing. Include an easy contact route so that interest can become another conversation.',
    work:['Supply accurate copy, photos and your contact details.','Approve the proof and order the quantity you will use.','Distribute at showings or outreach and follow up with interested people.'],
    reality:'A stack in the office is not distribution. Decide where it will go.',cost:'Paid design + printing',fees:'Flyer design: $15. Brochures: $10/page templated or $25/page custom. Printing is extra. Figures are from the supplied fee sheet.',action:'Request print design',url:MARKETING,setup:'Market a Property → Design Services → Brochures or Flyers. For luxury, request the appropriate Wallace luxury treatment.',evidence:'photos',measure:'Use the materials in actual showing and follow-up conversations.',support:'Marketing'
  },
  ads: {
    name:'MoxiPromote',job:'Give your listing paid online exposure.',pitch:'Run an online ad that points people to the property.',
    benefit:'An ad buys another opportunity for the listing to be seen. Useful interest becomes a showing only when the property fits and you respond, answer questions and arrange access.',
    work:['Choose the listing, budget and dates; check the destination page.','Approve or build the ad and respond to inquiries promptly.','Review spend and useful inquiries; adjust or stop when needed.'],
    reality:'Views and clicks are activity. Conversations and showings are closer to the goal.',cost:'Paid advertising',fees:'Marketing-built MoxiPromote ads: $25 design plus $50 minimum ad spend, per the supplied sheet. Confirm current options.',action:'Open MoxiPromote',url:'https://promote.moxiworks.com/',setup:'Do it yourself in Promote, or use Market a Property → Social | Digital → Moxi Promote Ad for Marketing’s build service.',evidence:'marketing',vendor:'https://support.moxiworks.com/hc/en-us/categories/5261915963796-MoxiPromote',measure:'Compare spending with genuine inquiries and showing requests.',support:'Marketing'
  },
  quantum: {
    name:'QuantumDigital',job:'Put the listing in neighborhood mailboxes.',pitch:'Order listing postcards for a chosen mailing area.',
    benefit:'Mail gives nearby owners another way to learn about the listing and your work. A clear invitation can prompt a property inquiry or a conversation about their own plans.',
    work:['Choose a relevant mailing area, message and budget.','Check property details and approve the mailing.','Provide a clear response route and follow up on inquiries.'],
    reality:'Choose where and why to mail before you pay for a batch.',cost:'Paid per mailing',fees:'Confirm quantity, printing, mailing costs and any recurring campaign settings at checkout.',action:'Open QuantumDigital',url:'https://app.quantumdigital.com/assets/php/moxiworks/qdoauth2.php',setup:'Wallace Connect → QuantumDigital. Select the listing-mailing option that fits your plan.',evidence:'marketing',vendor:'https://quantumdigital.com/',measure:'Ask respondents how they heard of the property; compare useful conversations with the mailing cost.',support:'Marketing'
  },
  xpressdocs: {
    name:'Xpressdocs',job:'Order branded listing pieces yourself.',pitch:'Customize a template and order printed materials or mailings.',
    benefit:'Ready-made templates help you get consistent materials into your plan. Their business value depends on reaching a relevant audience and giving that audience a clear next step.',
    work:['Choose a format and the audience or distribution plan.','Customize the template, proof every detail and confirm the order.','Distribute the pieces or monitor the mailing and handle responses.'],
    cost:'Paid per order',fees:'Printing, mailing and other charges depend on the order. Review the total and delivery timing before purchase.',action:'Open Xpressdocs',url:'http://svc.wallaceconnect.com/service/v1/auth/intranet_sessions/xpressdocs',setup:'Wallace Connect → profile picture → External Links → Xpressdocs. Use Marketing’s design forms if you need someone to build a custom piece.',evidence:'marketing',vendor:'https://www.xpressdocs.com/s/',measure:'Track what you distribute and the conversations it starts.',support:'Marketing'
  },
  adwerx: {
    name:'Adwerx',job:'Explore more paid advertising formats.',pitch:'Choose an available advertising campaign in Wallace’s Ad Store.',
    benefit:'An additional format may help you reach an audience beyond your current promotion. Start with a clear reason to add it and a budget you can evaluate.',
    work:['Review available formats, audience options and the full cost.','Confirm your creative, destination and campaign dates.','Monitor response and spending; keep following up personally.'],
    reality:'Extra exposure needs a purpose. More impressions alone do not mean more business.',cost:'Paid advertising',fees:'Pricing varies by campaign. The inventory mentions video and streaming TV options; confirm what is currently offered in the Wallace Ad Store.',action:'Open Wallace Ad Store',url:'https://wallacere.adwerx.com/moxiworks/authenticate',setup:'Wallace Connect → Adwerx. Ask Marketing whether an additional campaign fits the property and your existing plan.',evidence:'marketing',measure:'Decide what response would justify the spend before launching.',support:'Marketing'
  },
  social: {
    name:'Wallace Post-It · listing graphics',job:'Turn a listing photo into a ready-to-post graphic.',pitch:'Get a branded design for your property’s current status.',
    benefit:'A clear graphic makes it easier to put a listing in front of your network. Add why the home is worth a look, a property link and an invitation to contact you.',
    work:['Send a photo and choose the correct listing status.','Check the graphic, add your caption and publish it.','Answer comments and messages and arrange showings when the home fits.'],
    reality:'Downloading the design is preparation. Posting and responding are your next steps.',cost:'Included',fees:'Free to Wallace agents.',action:'Open Wallace Post-It',url:POSTIT,setup:'Residential listing graphics: text a property photo to (865) 401-8655. Check the Post-It page for current category instructions.',fact:'The Wallace inventory describes photo-by-text delivery of branded graphics through Agent Icon.',source:'https://agenticon.com/',sourceLabel:'Agent Icon · platform overview',limit:'This verifies the type of tool, not a conversion rate or income result.',measure:'Look for meaningful questions and showing requests, beyond likes.',support:'Marketing'
  },
  canva: {
    name:'Wallace Canva templates',job:'Make the graphic yourself.',pitch:'Start with a Wallace template and add your listing details.',
    benefit:'Templates let you create a relevant post when you need it. Use the time saved to write a useful caption, share the property and respond to people.',
    work:['Choose the right Wallace template and replace the sample content.','Proof the facts, images and contact details.','Export, publish and answer the responses.'],
    cost:'Templates available',fees:'Wallace templates are provided. Check Canva’s terms for any paid elements or account features you choose.',action:'Find Wallace templates',url:MARKETING+'/canva-templates',setup:'Wallace Connect → Marketing → Canva Templates. Keep the approved brand elements intact.',fact:'Wallace’s supplied inventory lists Canva templates for agent-created marketing.',source:MARKETING+'/canva-templates',sourceLabel:'Wallace · Canva template library',limit:'A template supplies a starting design. There is no verified income claim for using it.',measure:'Use the post to start relevant property conversations.',support:'Marketing'
  },
  'custom-social': {
    name:'Marketing Team · custom social design',job:'Have someone build the graphic for you.',pitch:'Give Marketing your content and request a custom social graphic.',
    benefit:'Design help gets a usable piece into your hands when you need a different treatment. You can then focus on the property story, distribution and conversations.',
    work:['Supply accurate copy, photos, the intended use and deadline.','Confirm the fee and approve the proof.','Publish the graphic, promote it and respond to interest.'],
    cost:'Confirm design fee',fees:'Ask Marketing for the current fee, scope and turnaround before ordering.',action:'Request a social graphic',url:MARKETING,setup:'Social | Digital → Social Graphic. Describe the channel and format you need.',fact:'Wallace’s supplied inventory includes custom social graphic requests through Marketing.',source:MARKETING,sourceLabel:'Wallace Marketing · request forms',limit:'The service creates the material. Posting, audience-building and follow-up remain agent work.',measure:'Track the responses to the published post, not just completion of the design.',support:'Marketing'
  },
  'luxury-package': {
    name:'Luxury listing presentation package',job:'Build a more complete luxury presentation.',pitch:'A paid presentation package is being developed by Wallace.',status:'In development',
    benefit:'The intended role is to help you prepare a polished listing presentation. Ask about its current scope and availability before planning an appointment around it.',
    work:['Share the property details and your appointment date.','Confirm availability, contents, price and turnaround with the team.','Check the finished materials, practice your presentation and deliver the plan.'],
    reality:'Availability, contents and price are not yet confirmed.',cost:'Details to be confirmed',fees:'In development. No confirmed release date, package contents or price are published here.',action:'Ask about the package',url:LUXURY,setup:'Email the Wallace luxury inbox for Rhonda Thompson and ask about the presentation package.',evidence:'marketing',extra:'This is a planned Wallace offering, not an available package or a researched performance claim.',measure:'Before your appointment, be able to explain the property, price and marketing choices in your own words.',support:'Rhonda Thompson / luxury team'
  },
  'luxury-social': {
    name:'Wallace Post-It · luxury graphics',job:'Give a luxury listing the right visual treatment.',pitch:'Use the luxury graphic category for your property posts.',
    benefit:'Consistent luxury materials help your social presentation match the property. Add the feature that matters, give people the full listing link and be available to answer questions.',
    work:['Confirm the appropriate luxury treatment and select a strong photo.','Check the design and publish with a specific property story.','Respond to interest and guide qualified inquiries toward a conversation.'],
    cost:'Included',fees:'Free Wallace Post-It access. Confirm the appropriate luxury category for the property.',action:'Open luxury Post-It options',url:POSTIT,setup:'The supplied inventory lists (865) 830-3840 for luxury graphics. Check the Post-It page for current instructions.',fact:'The Wallace inventory lists a separate luxury category for Post-It graphics.',source:POSTIT,sourceLabel:'Wallace · Post-It categories',limit:'A luxury design treatment is not an audience or a promise of buyer interest.',measure:'Track useful property questions and showing conversations.',support:'Marketing / luxury team'
  },
  lpi: {
    name:'Luxury Portfolio International®',job:'Add a luxury network to your marketing plan.',pitch:'Explore LPI exposure for a qualifying Wallace luxury listing.',
    benefit:'LPI can add a luxury-specific channel to the plan you present to a seller. Rhonda Thompson can help you understand which opportunities fit the property and how to explain them accurately.',
    work:['Send Rhonda the property details and ask about qualification.','Confirm available exposure, any paid options and required materials.','Supply approved content, handle inquiries and update your seller.'],
    reality:'Network exposure is part of the plan. It does not replace local marketing or your follow-up.',cost:'Eligibility & fees vary',fees:'Program eligibility and optional placement costs must be confirmed with Rhonda Thompson. No reach or sales guarantee is implied.',action:'Contact Rhonda about LPI',url:LUXURY,setup:'This opens the Wallace luxury inbox with a subject addressed to Rhonda Thompson, who manages LPI.',fact:'Wallace’s supplied inventory includes LPI as a luxury program. Its overview describes the offering; specific property eligibility and placements need confirmation.',source:'https://www.dropbox.com/scl/fi/89qviypwmjfs4ekmxucby/LPI-Overview.pdf?rlkey=x40arp317eegkknwh2fd081n8&dl=0',sourceLabel:'Wallace-provided LPI overview',limit:'No network-size figure, buyer count or tool-specific return is claimed here.',measure:'Review actual exposure and inquiries with Rhonda and report useful progress to your seller.',support:'Rhonda Thompson / luxury team'
  }
};

const teamHelp = {
  website:{offer:'Ask Marketing for help with your website content.',handoff:'Supply your information and approve the content. You still bring people to the site and answer inquiries.',url:CONSULT,action:'Book a consultation'},
  mail:{offer:'Have Marketing design a listing postcard.',handoff:'Supply photos and facts and approve the proof. You still choose the audience, arrange distribution and respond.',form:'Market a Property → Design Services → Postcards'},
  campaign:{offer:'Book a consultation to plan your next campaign.',handoff:'Bring the property, goals and budget. You still approve the plan, monitor spending and handle responses.',url:CONSULT,action:'Book a consultation'},
  brand:{offer:'Have Marketing develop your personal branding.',handoff:'Supply your story and approve the design. You still put it to use and build recognition.',form:'Market Yourself → Design Services → Logo Design'},
  contact:{offer:'Have Marketing create your digital business card.',handoff:'Supply accurate details and approve the card. You still share it and follow up.',form:'Market Yourself → Design Services → Business Cards (Digital)'},
  relationships:{offer:'Book a consultation to choose a practical contact plan.',handoff:'Bring your audience and goals. You still maintain your contacts and have the conversations.',url:CONSULT,action:'Book a consultation'},
  trust:{offer:'Have Marketing turn a client review into a branded graphic.',handoff:'Supply the genuine review and approve the proof. You still share it and respond.',form:'Social | Digital → Social Graphic'},
  listing:{offer:'Ask Marketing for a property-specific migration report.',handoff:'Supply the details and learn the report. You still explain the plan and carry it out.',form:'Market a Property → Consultation → Buyer Migration Study'},
  presentation:{offer:'Have Marketing turn your property photos into a brochure or flyer.',handoff:'Supply the content and approve the proof. You still distribute it and follow up.',form:'Market a Property → Design Services → Brochures or Flyers'},
  ads:{offer:'Have Marketing build your MoxiPromote ad.',handoff:'Supply the listing, budget and dates. Approve it, then handle inquiries and follow-up.',form:'Market a Property → Social | Digital → Moxi Promote Ad'},
  social:{offer:'Have Marketing create a custom listing graphic.',handoff:'Supply the photos and facts and approve the proof. You still publish, promote and respond.',form:'Social | Digital → Social Graphic'},
  luxury:{offer:'Start with Rhonda Thompson for LPI and the right luxury support.',handoff:'Bring the property details and your goals. You still prepare, present, promote and follow up.',url:LUXURY,action:'Contact Rhonda',luxury:true}
};

// Preserve earlier bookmarks; a goal now reveals choices before a tool.
const legacy = {
  yourself:{'follow-up':['earn-trust','follow-up'],'stay-in-touch':['stay-connected','email'],reviews:['earn-trust','reviews'],website:['easy-to-reach','website']},
  property:{photos:['first-impression','photos'],price:['win-listing','price'],ads:['get-seen','ads']}
};
const home = document.getElementById('home');
const workspace = document.getElementById('workspace');
const panel = document.getElementById('recommendation');
function safe(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function link(url,label,cls=''){
  const external = !url.startsWith('mailto:');
  return `<a class="${cls}" href="${safe(url)}"${external?' target="_blank" rel="noopener noreferrer"':''}>${safe(label)} <span aria-hidden="true">↗</span>${external?'<span class="sr-only"> (opens in a new tab)</span>':''}</a>`;
}
function teamBlock(key){
  const team=teamHelp[key];
  return `<section class="team-help" aria-labelledby="team-heading"><p class="eyebrow">${team.luxury?'WALLACE LUXURY SUPPORT':'WALLACE MARKETING TEAM'}</p><h3 id="team-heading">${team.luxury?'Bring in the luxury team.':'Want a jump start?'}</h3><p>${safe(team.offer)}</p><p class="handoff"><strong>Your part:</strong> ${safe(team.handoff)}</p><div class="team-action">${link(team.url||MARKETING,team.action||'Find the request form')}<span>${team.luxury?'Confirm eligibility and any fees.':'Paid services · confirm the fee.'}</span></div>${team.form?`<details><summary>Where to find the form</summary><p>On the Marketing page, choose:<br>${safe(team.form)}.</p></details>`:''}</section>`;
}
function showChoices(category,goal){
  panel.innerHTML=`<div class="panel-top"><p class="eyebrow">THE GOAL</p><h2 id="panel-heading" tabindex="-1">${safe(goal.title)}</h2><p class="panel-intro">${safe(goal.intro)}</p></div><div class="choice-label"><strong>${goal.tools.length===1?'Start here':`${goal.tools.length} ways to help`}</strong><span>Choose one to see your next steps</span></div><div class="options">${goal.tools.map(id=>{const t=tools[id];return `<a class="option" href="#${category}/${goal.id}/${id}">${t.status?`<span class="status">${safe(t.status)}</span>`:''}<span class="option-name">${safe(t.name)}</span><h3>${safe(t.job)}</h3><p>${safe(t.pitch)}</p><span class="option-foot"><span>${safe(t.cost)}</span><span class="arrow" aria-hidden="true">→</span></span></a>`;}).join('')}</div>${teamBlock(goal.team)}`;
}
function showTool(category,goal,id){
  const t=tools[id],e=t.evidence?evidence[t.evidence]:{fact:t.fact,url:t.source,label:t.sourceLabel,limit:t.limit};
  const managed=['branding','digital-card','signature','migration','brochure','staging','custom-social','luxury-package','lpi','referrals'].includes(id);
  const helpKey=id==='website'?'website':id==='follow-up'?'relationships':['quantum','xpressdocs'].includes(id)?'mail':id==='adwerx'?'campaign':goal.team;
  panel.innerHTML=`<a class="back-link" href="#${category}/${goal.id}">← Back to ${safe(goal.label.toLowerCase())}</a><div class="detail"><div class="panel-top"><p class="eyebrow">${safe(t.name)}</p>${t.status?`<span class="status">${safe(t.status)}</span>`:''}<h2 id="panel-heading" tabindex="-1">${safe(t.job)}</h2><p class="panel-intro">${safe(t.pitch)}</p></div><div class="detail-body"><p class="section-label">HOW THIS CAN HELP YOUR BUSINESS</p><p class="benefit">${safe(t.benefit)}</p><div class="work"><h3>Your part</h3><ol>${t.work.map(x=>`<li>${safe(x)}</li>`).join('')}</ol>${t.reality?`<p class="reality">${safe(t.reality)}</p>`:''}</div><div class="action-row">${link(t.url,t.action,'primary')}<span class="cost-label">${safe(t.cost)}</span></div><p class="login-note">${t.url.startsWith('mailto:')?'Opens your email app.':'Wallace access links may require your Wallace Connect login.'}</p><details><summary>Why this matters · evidence</summary><p class="evidence-fact">${safe(e.fact)}</p><p>${link(e.url,e.label)}</p><p>${safe(e.limit)}</p>${t.evidence?'<p>National survey context; not a Wallace result or an East Tennessee forecast. The business connection above is a practical recommendation, not a promised return.</p>':''}${t.extra?`<p>${safe(t.extra)}</p>`:''}${t.vendor?`<p>${link(t.vendor,'Tool capability · vendor reference')}</p>`:''}</details><details><summary>Getting started, costs &amp; what to watch</summary><p><strong>Start here:</strong> ${safe(t.setup)}</p><p><strong>Costs:</strong> ${safe(t.fees)}</p><p><strong>Watch for:</strong> ${safe(t.measure)}</p><p>Wallace access and fees are based on the September 22, 2026 inventory; its in-house fee sheet is dated October 10, 2025. Confirm current scope and charges before ordering. Printing, postage and ad spend are extra unless stated.</p>${['migration','price'].includes(id)?`<p>${link('https://www.etnrealtors.com/category/state-of-housing/','East Tennessee REALTORS® · local housing context')}</p>`:''}</details><div class="support"><span>Help: ${safe(t.support)}</span>${link(category==='luxury'?LUXURY:'mailto:marketing@wallacetn.com','Ask a question')}</div></div></div>${managed?'':teamBlock(helpKey)}`;
}
function render(){
  const [category,routeGoal,routeTool]=location.hash.slice(1).split('/');
  const config=Object.hasOwn(categories,category)?categories[category]:null;
  document.querySelectorAll('[data-route]').forEach(a=>{if(a.dataset.route===category)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');});
  if(!config){home.hidden=false;workspace.hidden=true;document.title='Your next move | Wallace Agent Marketing';return;}
  home.hidden=true;workspace.hidden=false;
  const old=legacy[category]?.[routeGoal];
  const goal=config.goals.find(g=>g.id===(old?old[0]:routeGoal))||config.goals[0];
  const requestedTool=old?old[1]:routeTool;
  const toolId=goal.tools.includes(requestedTool)?requestedTool:null;
  document.getElementById('category-title').textContent=config.title;
  document.getElementById('category-intro').textContent=config.intro;
  document.getElementById('breadcrumb-category').textContent=config.title;
  document.getElementById('goal-links').innerHTML=config.goals.map(g=>`<a class="goal" href="#${category}/${g.id}"${g.id===goal.id?' aria-current="true"':''}><span>${safe(g.label)}</span><span class="arrow" aria-hidden="true">→</span></a>`).join('');
  document.getElementById('sidebar-note').innerHTML=category==='luxury'?`<p><strong>Your luxury contact</strong><br>Rhonda Thompson<br>LPI &amp; luxury support</p>${link(LUXURY,'Contact Rhonda')}`:'<p><strong>Keep it practical.</strong><br>Pick the help you need now. Come back for the next step.</p>';
  if(toolId)showTool(category,goal,toolId);else showChoices(category,goal);
  document.title=(toolId?tools[toolId].name:goal.label)+' | '+config.title+' | Wallace';
}
document.querySelector('.skip').addEventListener('click',event=>{event.preventDefault();document.getElementById('main').focus();});
window.addEventListener('hashchange',()=>{
  render();
  const heading=document.getElementById(workspace.hidden?'home-title':location.hash.includes('/')?'panel-heading':'category-title');
  heading.focus({preventScroll:true});
  if(workspace.hidden||!location.hash.includes('/'))window.scrollTo({top:0,behavior:'instant'});
  else panel.scrollIntoView({block:'start',behavior:'instant'});
});
render();
