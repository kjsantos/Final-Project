const projects = [
  {
    slug: "mta-capital-dashboard",
    title: "MTA Capital Plan Dashboard",
    description: "An interactive public dashboard for tracking MTA capital projects, budgets, and geographic investment data across all transit divisions.",
    link: "https://capitaldashboard.mta.info",
    thumbnail: "/images/placeholder-capital-dashboard.svg",
    tags: ["Data Visualization", "Web Development"],
    tech: ["javascript-logo.png", "html-logo.png"],
    content: `<p class="blog">At the MTA, I contribute to tools that make capital planning data accessible to the public. The Capital Plan Dashboard is an interactive web application enabling transit riders, planners, and government stakeholders to explore the MTA's capital investment portfolio — the organization's largest in history.

<br /><br />The dashboard surfaces data from the New York Open Data Portal, visualizing project funding, geographic distribution, and execution timelines across all MTA divisions: NYC Transit, Long Island Rail Road, Metro-North Railroad, Bridges &amp; Tunnels, and MTA Police. A core feature is the ACEP (Annual Capital Expenditure Plan) integration, which provides a granular view of how capital dollars are being spent against planned allocations at the program and project level.

<br /><br />On the technical side, the application is built with <strong>Next.js</strong> and <strong>TypeScript</strong>, using <strong>Mantine</strong> as the component library and <strong>OpenLayers</strong> for interactive mapping with live ArcGIS layer integration. Budget charts are rendered via <strong>Plotly.js</strong> and <strong>Recharts</strong>, while <strong>Arquero</strong> handles in-browser tabular data processing for fast filtering and aggregation without a backend query. State is managed with <strong>Jotai</strong>, and the site is deployed on <strong>Netlify</strong>.

<br /><br />The dashboard is publicly available at <a class="link" href="https://capitaldashboard.mta.info" target="_blank" rel="noopener noreferrer">capitaldashboard.mta.info</a>.</p>`
  },
  {
    slug: "mta-20yn-site",
    title: "MTA 20-Year Needs Assessment",
    description: "Public-facing website for the MTA's 20-Year Needs Assessment, providing New Yorkers structured access to transit infrastructure planning documents.",
    link: "https://future.mta.info",
    thumbnail: "/images/placeholder-20yn.svg",
    tags: ["Web Development"],
    tech: ["javascript-logo.png", "html-logo.png"],
    content: `<p class="blog">The MTA's 20-Year Needs Assessment is a comprehensive planning document identifying the capital investment required to maintain and improve New York's transit infrastructure over the next two decades. I worked on the public-facing website that gives New Yorkers and policymakers direct access to the full assessment and its supporting materials.

<br /><br />The site provides structured navigation to the full assessment report and division-specific appendices covering NYC Transit, Long Island Rail Road, Metro-North Railroad, Bridges &amp; Tunnels, and MTA Police. Each section provides context on the scale of investment needed — representing hundreds of billions of dollars in deferred maintenance, system improvement, and expansion.

<br /><br />Built with <strong>React</strong> and <strong>React Router</strong>, the site is deployed on <strong>Netlify</strong> with a custom Netlify plugin enforcing strict Content Security Policy headers. The CSP configuration whitelists only trusted scripts (Google Analytics, GTM, *.mta.info) with nonce-based script validation — a meaningful step toward XSS protection on a high-traffic government-adjacent website.

<br /><br />The site is live at <a class="link" href="https://future.mta.info" target="_blank" rel="noopener noreferrer">future.mta.info</a>.</p>`
  },
  {
    slug: "ocpf-story",
    title: "U.S. Elections Campaign Finance Story",
    description: "A scroll-through interactive visualization breaking down PAC funding and donation patterns in the 2022 U.S. Midterm Elections.",
    link: "https://final-wine.vercel.app/",
    thumbnail: "/images/campaign-viz.png",
    tags: ["Data Visualization", "Web Development"],
    tech: ["svelte-logo.png", "d3-logo.png", "r-logo.png", "python-logo.png"],
    content: `<p class="blog">I had come across a website prior to working on this project called <a class="link" href="https://www.opensecrets.org/" target="_blank" rel="noopener noreferrer">OpenSecrets.org</a>, which inspired me to look into campaign funding in U.S. elections. The website is home to a research group that tracks money in politics, including campaign finance contributions. The work that OpenSecrets does inspired me to look into the data myself, to see if any correlation lay beneath the committees and funding groups that propel election candidates into a position to win. I conducted research on several Political Action Committees, as well as notable election candidates in the 2022 Midterm Elections.

<br /><br />This project proved challenging largely due to the difficulty of requesting data from the Office of Campaign Finance, as well as finding exactly what kind of data I needed from the downloadable datasets on OpenSecrets' website. In order to create a dataset I was comfortable using for analysis, I first had to perform transformations on the data — removing duplicates, combining nearly-matched rows, and merging additional sources into a master candidate dataset. After conducting statistical analysis in Python and R, I gathered my visualizations and provided research context to present my findings.

<br /><br />To present the results, I built a scroll-through interactive visualization using <strong>Svelte.js</strong> and <strong>TailwindCSS</strong>. The final version can be viewed <a class="link" href="https://final-wine.vercel.app/" target="_blank" rel="noopener noreferrer">here</a>.</p>`
  },
  {
    slug: "nypd-story",
    title: "NYPD Civilian Complaints Story",
    description: "A data-driven narrative examining patterns in NYPD internal discipline through CCRB complaint data, built with D3.js.",
    link: "https://telling-holy-word.glitch.me/Final_Project/",
    thumbnail: "/images/ccrb-viz.png",
    tags: ["Data Visualization", "Data Analysis"],
    tech: ["jupyter-logo.png", "d3-logo.png", "r-logo.png"],
    content: `<p class="blog">This project was an exercise in hard-coding visualizations using D3.js, a tool that was completely new to me. While challenging, focusing on learning one tool throughout the duration of my research helped me apply critical perspectives to my work.

<br /><br />I wanted to approach my research with the goal of illuminating gaps in the system that helps keep law enforcement officers accountable. I obtained data from the Legal Aid Society's <a class="link" href="https://legalaidnyc.org/law-enforcement-look-up/" target="_blank" rel="noopener noreferrer">Law Enforcement Lookup Tool</a> to gain insight into the process of internal discipline within the NYPD. The Civilian Complaint Review Board accepts submissions from New Yorkers who feel that an officer has acted out of their line of duty to wrongfully cause harm. Through my research, I discovered that a large majority of complaints to the CCRB go unaddressed, due to current laws on statutes of limitation and a lack of government funding for the bureau — even after the repeal of a law that previously concealed this information.

<br /><br />This project required a significant amount of data cleaning, which I handled using <strong>Jupyter Notebooks</strong> and <strong>OpenRefine</strong>. To create the final deliverable, I coded visualizations using <strong>D3.js</strong> and built the front-end interface using <strong>Reveal.js</strong>. See the final version <a class="link" href="https://telling-holy-word.glitch.me/Final_Project/" target="_blank" rel="noopener noreferrer">here</a>.</p>`
  },
  {
    slug: "twitter-analysis",
    title: "Twitter Sentiment Analysis Dashboard",
    description: "VADER-scored sentiment analysis of tweets about politically charged social movements, visualized in a Tableau dashboard.",
    link: "https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/",
    thumbnail: "/images/twitter-hate-analysis.png",
    tags: ["Data Visualization", "Data Analysis"],
    tech: ["tableau-logo.png", "jupyter-logo.png", "python-logo.png"],
    content: `<p class="blog">When I first enrolled at the Pratt Institute in 2021, one of my priorities was to use my knowledge of data analysis to examine social issues that impact the state of the world. One of the first courses I took, Information Visualization, helped put the technical research we were conducting to the forefront by teaching ways to better communicate through visualization.

<br /><br />The final project was fairly open-ended; I chose to collect Twitter data using the <strong>Tweepy</strong> Python API client and built queries to search for tweets about politically charged social groups: the Proud Boys, Black Lives Matter, Oath Keepers, and the Democratic Socialists of America. I chose these groups to get a better sense of where Twitter users may fall on the political spectrum.

<br /><br />After cleaning the data using <strong>Pandas</strong> and OpenRefine, I added a sentiment score to each entry using the <strong>VADER</strong> sentiment analysis package, assigning each tweet a score determined by the positive or negative language used in reference to each group. Once I had prepared the data, I created visualizations using <strong>Tableau</strong>. To view the full report and final dashboard, click <a class="link" href="https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/" target="_blank" rel="noopener noreferrer">here</a>.</p>`
  },
  {
    slug: "nba-analysis",
    title: "NBA 3-Pointer Analysis",
    description: "Statistical analysis of the correlation between the rise of 3-point shooting and declining playing time for traditional NBA centers.",
    link: "https://rpubs.com/kjsantos/nba-3pt-analysis/",
    thumbnail: "/images/nba-plot.png",
    tags: ["Data Analysis"],
    tech: ["python-logo.png", "r-logo.png", "javascript-logo.png"],
    content: `<p class="blog">For this project, I chose to conduct research on a topic I have had plenty of experience following but had never examined as a data analyst. In the Spring of 2022, I took the Data Analysis course at the Pratt Institute, which gave me a broad overview of the different tools used in data analysis and the methods that can be applied to use them. The course heavily focused on statistical research methods in R, a tool I was excited to add to my technical background.

<br /><br />I chose to examine the correlation between the rise of 3-point shooting in the NBA and the decline of the center position — specifically, whether a center's ability to make 3-point shots had a significant effect on playing time. To approach this question, I collected NBA player statistic data with the help of Python and the <a class="link" href="https://www.balldontlie.io/home.html#introduction" target="_blank" rel="noopener noreferrer">BallDontLie API</a>. After collecting the data, I used <strong>Pandas</strong> to clean and export it to a workable CSV format. Once ready, I conducted statistical analysis in <strong>R</strong>, plotting linear regressions and correlation matrices across different stat categories.

<br /><br />The findings were significant — my research showed a sharp decline in playing time for NBA centers who don't convert 3-point attempts efficiently. I presented my findings using <strong>Reveal.js</strong> in R, which allowed me to make the presentation interactive. To view the full project, click <a class="link" href="https://rpubs.com/kjsantos/nba-3pt-analysis/" target="_blank" rel="noopener noreferrer">here</a>.</p>`
  },
  {
    slug: "nyc-safety-ml",
    title: "NYC Street Safety Score Prediction",
    description: "A TensorFlow neural network predicting street-level safety scores (1–10) for NYC locations by merging DOT service request and NYPD collision data.",
    link: "https://github.com/kjsantos/Info-656-Final-Project",
    thumbnail: "/images/placeholder-ml.svg",
    tags: ["Data Analysis", "Machine Learning"],
    tech: ["python-logo.png", "jupyter-logo.png"],
    content: `<p class="blog">This project combines two large NYC Open Data datasets to predict street-level safety scores for any location in New York City. The model ingests 1.7 million <strong>DOT Street Lights and Traffic Signals</strong> service requests and 2 million <strong>NYPD Motor Vehicle Collision</strong> records to identify which intersections carry the highest risk during periods of known infrastructure failures.

<br /><br />A custom heuristic safety score (1–10 scale) was engineered by aggregating collision severity within the open timeframe of each service request at the same geographic location. Because many locations had zero incidents during any given request period, the distribution was heavily right-skewed. A <strong>BoxCox transformation</strong> was applied before binning into percentile-based deciles, producing a training target with more balanced class representation.

<br /><br />The resulting dataset of 26,000+ rows — with 13 numeric and 3 categorical features — was processed through a <strong>ColumnTransformer</strong> pipeline (StandardScaler + OneHotEncoder), expanding to 123 features total. A baseline <strong>Keras</strong> neural network achieved 94% validation accuracy and an F1-macro score of 0.79. Systematic hyperparameter tuning via <strong>Keras Tuner's Hyperband</strong> algorithm across 30 trials yielded an optimized architecture with <strong>BatchNormalization</strong> and <strong>Dropout(0.3)</strong> layers that reached <strong>96.7% validation accuracy</strong> and an F1-macro of <strong>0.82</strong>, with early stopping at epoch 44.

<br /><br />The model is intended to help city planners and first responders prioritize infrastructure repairs based on predicted collision risk at locations with open service requests. The full code and trained model are available on <a class="link" href="https://github.com/kjsantos/Info-656-Final-Project" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>`
  },
  {
    slug: "braata-heuristic-evaluation",
    title: "Braata Productions Heuristic Evaluation",
    description: "A usability study for Braata Productions, a Caribbean arts nonprofit in NYC, combining card sorting, moderated user testing, and persona development.",
    link: "https://ixd.prattsi.org/2021/12/evaluation-story-braata-productions-3/",
    thumbnail: "/images/card-sort.png",
    tags: ["UX Research"],
    tech: ["figma-logo.png", "photoshop-logo.png"],
    content: `<p class="blog">My time at the Pratt Institute also allowed me to learn new skills outside of my comfort zone — one of which was developing a user-centered design approach. During my first semester, I was able to put fundamental concepts in usability research into practice by conducting a heuristic evaluation for a real client, producing recommendations to improve their website content and marketing strategy.

<br /><br />For our evaluation study, we worked with <strong>Braata Productions</strong>, a New York City-based Caribbean Arts and Culture nonprofit. In order to understand what feedback would be useful for Braata, we met with the organization's founder to gain insight into who they were attempting to reach, their current marketing strategies, and what they wanted to highlight on their website and social media presence. Our research group then conducted <strong>card sorting</strong> to suggest a more fluid layout for their site architecture.

<br /><br />We then recruited user testers within the Braata target demographic to perform a <strong>moderated user test</strong>, seeking feedback on specific areas of the website that needed improvement. Once our data from user testing sessions was analyzed, we came up with three concrete suggestions to improve the usability of Braata's website and presented our findings to the founder. To read the outcomes of the study, click <a class="link" href="https://ixd.prattsi.org/2021/12/evaluation-story-braata-productions-3/" target="_blank" rel="noopener noreferrer">here</a>.</p>`
  }
];
export {
  projects as p
};
