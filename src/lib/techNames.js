/**
 * Human-readable display names for tech logo icons.
 * Used to generate alt text for tech stack images across work/writing pages.
 */
export const TECH_NAMES = {
nextjs: 'Next.js',
react: 'React',
typescript: 'TypeScript',
javascript: 'JavaScript',
html: 'HTML',
svelte: 'Svelte',
d3: 'D3.js',
python: 'Python',
r: 'R',
jupyter: 'Jupyter',
tableau: 'Tableau',
figma: 'Figma',
photoshop: 'Photoshop',
plotly: 'Plotly',
bootstrap: 'Bootstrap',
mantine: 'Mantine',
openlayers: 'OpenLayers',
tensorflow: 'TensorFlow'
}

/** Returns "Next.js logo" from "nextjs-logo.svg" */
export function techAlt(filename) {
const key = filename.replace(/-logo\.(png|svg)$/, '')
return (TECH_NAMES[key] ?? key) + ' logo'
}
