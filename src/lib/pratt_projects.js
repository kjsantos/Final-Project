export const posts = [
	{
		slug: 'nypd-story',
		title: 'NYPD Civilian Complaints Story',
		link: 'https://final-wine.vercel.app/',
		thumbnail: '',
		content:
			"<p class='blog'>During the Fall 2022 semester at Pratt, I enrolled in Programming Interactive Web Visualizations. In this class, I gained experience hard-coding visualizations using D3.js, a tool that was completely new to me. While this class was challenging, focusing on learning one tool throughout the semester helped me to focus on how I could apply critical perspectives to my work. <br><br>For my final project, I obtained data from the Legal Aid Society's <a class='link' href='https://legalaidnyc.org/law-enforcement-look-up/' target='_blank'>Law Enforcement Lookup Tool</a> to conduct research on the process of internal discipline within the NYPD. The Civilian Complaint Review Board accepts submissions from New Yorkers who feel that an officer has acted out of their line of duty to wrongfully cause harm. Through my research, I was able to discover that a large majority of complaints through the CCRB go unaddressed, due to the current laws for statutes of limitation. <br><br> This project requried a significant amount of combing through and cleaning out the data, which I was able to do using Jupyter Notebooks and OpenRefine. To create the final deliverable, I coded my visualizations using D3.js and built a simple front-end user interface using Reveal.js and R Markdown. See the final version by following the link <a class='link' href='https://telling-holy-word.glitch.me/Final_Project/'here</a>.</p>",
	},

	{
		slug: 'nba-analysis',
		title: 'NBA 3-Pointer Analysis',
		link: 'https://opendatascience.com/user/kailen-santos/',
		thumbnail: '/images/nba-plot.png',
		subtitle:
			"<p class='blog'>A data analysis project using statistical methods to determine the correlation between trends in center shotting 3-pointers. Data analysis and cleaning were done in Python and R, while the final deliverable uses Reveal.js and R Markdown for visuals. To view the full project, click <a id='project' href={link}>here</a>.</p>",
		content:
			"<p class='blog'>For this project, I chose to conduct research on a topic that I have had plenty of experience following, but have never examined in my career as a data analyst. In the Spring of 2022, I took the Data Analysis course at the Pratt Institute, which gave me a broad overview of the different tools used in data analysis and the methods that can be applied to use them. The course heavily focused on statistical research methods in R, a tool which I was excited to add to my technical background. <br><br> To complete my deliverables for the course, I was tasked with devising a research question, which I would then attempt to answer using methods learned throughout the semester. I chose to examine the correlation between the rise of 3-point shooting in the NBA and the decline of the center position, and whether a center's ability to make three-point shots had a significant effect on playing time. To approach this qeustion, I collected NBA player statistic data with the help of Python and the <a class='link' href='https://www.balldontlie.io/home.html#introduction'>BallDontLie API</a>. After collecting the data, I used Pandas in Python to clean and export the data into a workable csv format. Once ready, I conducted my statistical analysis in R, plotting linear regressions and correlation matrices for different stat categories. <br><br>The findings were significant — my research showed a sharp decline in playing time for NBA centers who don't convert three-point attempts efficiently. I presented my findings using an R package called Reveal.js, which allowed me to make my presentation interactive. <br><br> To view the full project, click <a id='project' href='https://rpubs.com/kjsantos/nba-3pt-analysis/'  target='_blank'>here</a>.</p>",
	},

	{
		slug: 'twitter-analysis',
		title: 'Twitter Sentiment Analysis Dashboard',
		link: 'https://ixd.prattsi.org/2021/12/evaluation-story-braata-productions-3/',
		thumbnail: '/images/twitter-hate-analysis.png',
		subtitle:
			"<p class='blog'>A heuristic Evaluation of Braata Productions' website for redesign recommendations. Braata Productions is a Caribbean arts and culture organization that hosts events and fundraisers to help promote everything the Caribbean has to offer in NYC. Our team conductded moderated and unmoderated user testing, card sorting, and created user personas to evaluate the website and increase engagement. To read the outcomes of the study, click <a id='project' href='https://ixd.prattsi.org/2021/12/evaluation-story-braata-productions-3/' target='_blank'>here</a>.</p>",
		content:
			"<p class='blog'>When I first enrolled at the Pratt Institute in 2021, one of my priorities was to use my knowledge of data analysis to examine social issues that impact the state of the world. One of the first courses I took, Information Visualization, helped to put the technical research we were conducting to the forefront by learning ways to better communicate through visualization. Throughout the semester, I picked up a variety of tools that would later pay dividends in the way I approach my visualizations and tell stories with data. <br><br> The final project for the course was fairly open-ended; I was able to choose from a list of tools we used during the course to put together a research report on a topic of our choice. Because I wanted to combine my interest in societal issues and storytelling, I chose to collect Twitter data using the Tweepy Python API client, and built my queries to search for tweets about politically charged social groups. The groups I chose to highlight were the Proud Boys, Black Lives Matter, Oath Keepers, and the Democratic Socialists of America. I chose these groups to get a better sense of where Twitter users may typically fall on the political spectrum. <br><br> After cleaning the data using Pandas in Python and OpenRefine, I added a new category to each entry called “sentiment.” Using the VADER sentiment analysis package in Python, I assigned each tweet a score determined by the positive or negative language used in reference to each group. Once I had prepared my data, I started to create visualizations using Tableau. After a few user testing sessions, I finalized my dashboard and put together a report on my findings. To view the entire report, including findings and the final version of the dashboard, click <a class='link' href='https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/' target='_blank'>here</a>.</p>",
	},
	{
		slug: 'ocpf-story',
		title: 'U.S. Elections Campaign Finance Story',
		link: 'https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/',
		thumbnail: '/images/campaign-viz.png',
		subtitle:
			"<p class='blog'>For this project, I collected Twitter data that mention politically-divisive movements via API queries. Once collected, I scored each tweet with a positivity score using VADER, an open-source sentiment analysis package in Python. Once data collection, cleaning, and analysis were complete, I organized my findings into a Tableau Dashboard. To read my full report on this project, click <a id='project' href='https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/' target='_blank'>here</a>.</p>",
		content:
			"<p class='blog'>By my fourth semester in the Pratt Institute DAV program, I had plenty of practice with the industry tools that would culminate in the final project for the Advanced Projects in Visualization course. Because everyone who enrolled in Advanced Projects had different career goals and perspectives, the final deliverable was open-ended once again.The most important requirement for the final project was to be able to present and clearly communicate our research effectively, demonstrating technical knowledge in doing so. <br><br>I had come across a website prior to taking this course called <a class='link' href='https://www.opensecrets.org/' target='_blank'>OpenSecrets.org</a>. The website is home to a research group that tracks money in politics, which includes campaign finance contributions. The work that OpenSecrets does inspired me to also look into the data, to see if there is any sort of correlation lying beneath the committees and funding groups that propel election candidates into a position to win. I conducted research on several Political Action Committees, as well as notable election candidates in the 2022 Midterm Elections. Once I highlighted a subset of worthy candidates to analyze, I began to collect my data. <br><br> This project proved challenging largely due to the difficulty of requesting data from the Office of Campaign Finance, as well as finding exactly what kind of data I needed from the downloadable datasets on OpenSecrets' website. In order to create a dataset that I was comfortable using for analysis, I first had to perform transformations on the data, removing duplicates, combining nearly-matched rows, and adding other sources of data to a master candidate dataset. After conducting my statistical analysis in Python and R, I gathered my visualizations and provided context from my research to present my findings. To do so, I built a scroll-through interactive visualization using Svelte.js and TailwindCSS. The final version can be viewed <a class='link' href='https://final-wine.vercel.app/'>here</a>.</p>",
	},
	{
		slug: 'braata-heuristic-evaluation',
		title: 'Braata Productions Heuristic Evaluation',
		link: 'https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/',
		thumbnail: '/images/card-sort.png',
		subtitle:
			"<p class='blog'>For this project, I collected Twitter data that mention politically-divisive movements via API queries. Once collected, I scored each tweet with a positivity score using VADER, an open-source sentiment analysis package in Python. Once data collection, cleaning, and analysis were complete, I organized my findings into a Tableau Dashboard. To read my full report on this project, click <a id='project' href='https://studentwork.prattsi.org/infovis/visualization/comparing-twitter-activity-for-politically-driven-groups-in-the-u-s/' target='_blank'>here</a>.</p>",
		content:
			"<p class='blog'>My time at the Pratt Institute has also allowed me to learn new skills outside of my comfort zone, one of which was to develop a user-centered design approach with my projects. During my first semester, I was able to put fundamental concepts in usability research into practice, conducting a heuristic evaluation on a team of five for a real client, producing recommendations to improve their website content and marketing strategy. <br><br> For our evaluation study, we worked with Braata Productions, a New York City based Caribbean Arts and Culture nonprofit. In order to understand what feedback would be useful for Braata, we met with the organization's founder to gain insight on who they were attempting to reach, their current marketing strategies, and what they might want to highlight on their website and social media presence. Our research group then conducted card sorting to suggest a more fluid layout for their webtree. We then recruited user testers within the Braata target demographic to perform a moderated user test, seeking feedback on specific areas of the website that needed improvement. <br><br> Once our feedback and data from our user testing sessions were completed, we analyzed our findings and came up with 3 suggestions to improve the usability of Braata's website, presenting our findings to the founder. To read the outcomes of the study, click <a id='project' href='https://ixd.prattsi.org/2021/12/evaluation-story-braata-productions-3/' target='_blank'>here</a>.</p>",
	},
]
