# Wallace Agent Marketing

A small, goal-first website for Wallace agents. Three entrances lead to a few goals, then no more than four relevant options. Each tool has one main job, a realistic business connection and three concrete agent responsibilities. Costs, setup and evidence sit behind expandable details.

| Entrance | Goals |
| --- | --- |
| Market yourself | Stand out; make contact easy; stay in touch after closing; earn trust and referrals |
| Market a property | Win the listing; make a great first impression; get more exposure; share on social media |
| Have a luxury property? | Prepare the listing appointment; showcase the home; explore luxury exposure |

There are 28 tools/services across 11 goals, but no giant catalog is shown. Shared services appear in more than one relevant context. The migration report supports the listing appointment. Pricing sits beside it as part of winning seller confidence. From Your Friends and LoLo support after-closing relationships. QuantumDigital and Xpressdocs appear under distribution. DIY is an option within a goal.

Contextual Marketing Team panels offer paid help and explain the agent's part after the handoff. Links lead to the supplied Marketing hub, with the relevant form location in an expandable note; individual request-form URLs were not supplied. The consultation link opens the supplied booking page.

## Run

Open `index.html` in a browser. No installation or build is required. All assets are local; there are no trackers, external fonts, or third-party JavaScript.

For a local web server, run `python -m http.server 8080` in this directory, then open `http://localhost:8080`.

## Publish with GitHub Pages

In the repository's **Settings → Pages**, select **Deploy from a branch**, then **main** and **/ (root)**. Save. Once GitHub finishes publishing, the page is available at `https://howard1081.github.io/wallace-agent-marketing/`.

## Maintain

- Edit `categories`, `tools`, `evidence` and `teamHelp` in `app.js`. Keep each goal to four or fewer options and each tool's main pitch to one job.
- Edit the six palette tokens in `styles.css` to change colors. The supplied palette was sampled as `#0b1a2d`, `#2c3e56`, `#566880`, `#93a2b5`, `#cfd8e1`, `#dce3eb`.
- Links are shareable: `#property/win-listing`, `#property/win-listing/migration`, `#yourself/stay-connected/lolo`, `#luxury/reach/lpi`. The earlier follow-up, stay-in-touch, reviews, website, photos, price and ads bookmarks still open the corresponding tool. `#property/social` now opens its choice of tools.
- Rhonda Thompson is the luxury/LPI contact, per the user's direction. Contact links use the supplied general luxury inbox, `luxury@wallacetn.com`, with a subject addressed to Rhonda; a personal email address was not supplied.
- The luxury presentation package is **in development**. No contents, price, release date or availability have been invented. Update its status only when confirmed.
- All corners remain square. The layout works without a build system, external fonts or remote scripts.
- The header uses the user-supplied original horizontal Midnight Sky Wallace Real Estate PNG in `assets/wallace-logo-midnight-sky.png`. The artwork is unchanged and scales proportionally for desktop and mobile. Keep the `assets` folder when uploading the site.
- No MoxiWorks RISE recommendations are included because the supplied inventory says it has not rolled out at Wallace.

## Evidence and scope

NAR national survey findings support the underlying practices; they are not tool-specific returns, causal findings, Wallace results, or East Tennessee forecasts. Each recommendation explains its evidence limits. The website business connections and suggested actions are editorial recommendations.

Public references:

- [2025 NAR Home Buyers and Sellers Generational Trends](https://cms.nar.realtor/sites/default/files/2025-03/2025-home-buyers-and-sellers-generational-trends-report-04-01-2025.pdf): Exhibit 7-1 (p. 119), Exhibit 7-7 (p. 125), Exhibit 3-6 (p. 56). This report draws on the 2024 buyer/seller survey; its publication year is not its transaction year.
- [2024 NAR Profile of Home Buyers and Sellers Highlights](https://www.nar.realtor/sites/default/files/2024-11/2024-profile-of-home-buyers-and-sellers-highlights-11-04-2024_2.pdf): agent selection and seller priorities.
- [East Tennessee REALTORS® State of Housing reports](https://www.etnrealtors.com/category/state-of-housing/): linked as local context; no local numerical claim is made.
- [NAR 2025 Profile of Home Staging release](https://www.nar.realtor/press-releases/nar-report-reveals-home-staging-boosts-sale-prices-and-reduces-time-on-market): the importance of listing videos to buyers, as reported by their agents. Physical-staging price findings are not attributed to virtual staging.
- Vendor documentation is linked within the recommendations.

The user-supplied migration report example informed the report's positioning as listing-appointment support. It was reviewed for scope, not treated as independent evidence of buyer demand or predicted results. Its property details and PDF are not included in the site. The page asks agents to check report sources and assumptions before quoting figures.

Wallace-specific access links, support routing, and fees come from the user-supplied **Wallace_Agent_Platform_Offerings (1).xlsx**, compiled September 22, 2026. Its in-house fees reference an October 10, 2025 pricing sheet. They were not independently verified in Wallace's authenticated systems. The page tells agents to confirm current charges before ordering. Website inclusion was not established by the inventory, so the page directs agents to Technology for that information.

No source workbook, private credentials, client records, or login instructions involving passwords are published in this repository.

## Delivery status

These are static files prepared for the requested GitHub repository. Local preview and file updates do not themselves publish to GitHub Pages. The prior connected GitHub write attempt was denied by the integration; successful publication has not been verified. Upload `index.html`, `styles.css`, `app.js`, `README.md`, `.nojekyll` and the `assets` folder to the repository root, then enable Pages as above.
