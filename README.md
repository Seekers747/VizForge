# VizForge

A lightweight, modular data visualization system that allows you to import datasets (Excel, CSV, JSON) and render them using interchangeable templates (charts, tables, graphs). Designed to be extensible—new visualization templates can be added simply by dropping a folder into the `templates/` directory.

## Project Goal

The goal of this project is to demonstrate:

- **Logic and system design**: Main engine dynamically loads templates without changing core code
- **Data handling**: Parsing Excel, CSV, and JSON files into structured datasets
- **Visualization skills**: Render tables, charts, and diagrams from imported data
- **Extensibility**: New visualizations can be added easily using a simple template structure

Think of it as a mini Power BI or Tableau, but lightweight, modular, and fully customizable.

## Key Features

- **Dynamic template loading** – Core engine automatically detects templates in the `templates/` folder
- **Multiple visualization types** – Bar charts, pie charts, line charts, tables, etc.
- **File import support** – Excel (.xlsx), CSV, and JSON datasets
- **Extensible architecture** – Add new visualizations by creating a folder with a `config.json` and `template.js`
- **Interactive preview** – Users can select datasets and visualization templates and see results instantly

## Folder Structure

```
vizforge/
├── core/               # Core engine (file parsing, template loader, renderer)
│   └── engine.js
├── templates/          # Add new visualization templates here
│   ├── bar-chart/
│   │   ├── config.json
│   │   └── template.js
│   ├── pie-chart/
│   └── line-chart/
├── data/               # Example datasets
│   └── sample.csv
├── index.html          # Frontend UI for uploading data and selecting templates
├── style.css           # Optional styling
└── README.md
```

## How It Works

1. **Import Dataset**: User uploads an Excel, CSV, or JSON file
2. **Parse Data**: Core engine reads the file and converts it into a structured table
3. **Load Templates**: Core engine scans the `templates/` folder and registers available templates
4. **Select Template**: User chooses a visualization template (bar chart, pie chart, etc.)
5. **Render Output**: Selected template receives the dataset and renders the visualization dynamically

### Add New Templates

To add a new visualization:

1. Create a new folder in `templates/`
2. Add a `config.json` describing metadata (name, type, required fields)
3. Add `template.js` containing the rendering logic

## Example Template: Bar Chart

### config.json

```json
{
  "name": "Bar Chart",
  "description": "Renders a bar chart from numeric columns",
  "requiredFields": ["x", "y"]
}
```

### template.js

```javascript
export function render(data, config) {
    // Use Chart.js to render a bar chart
    const ctx = document.getElementById(config.target).getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.map(row => row[config.x]),
            datasets: [{
                label: config.y,
                data: data.map(row => row[config.y])
            }]
        }
    });
}
```

Adding a new template is this easy—no edits to core code needed.

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/yourusername/VizForge.git
cd VizForge
```

2. Open `index.html` in your browser

3. Upload a dataset (CSV, Excel, JSON)

4. Select a visualization template

5. See your data rendered instantly

## Why This Project Is Impressive

- **Demonstrates real-world system design**: Modular, template-driven architecture
- **Shows logic and abstraction skills**: Core engine + independent templates
- **Highlights practical technical skills**: File parsing, JS visualization libraries, dynamic loading
- **Fully extensible and scalable**: Other developers can contribute new templates without touching the main engine

## Future Enhancements

- Add support for live data streaming
- Add custom template configuration UI
- Add more visualization types (heatmaps, scatter plots, etc.)
- Export visualizations as images or PDFs

## License

MIT License - feel free to use and modify as needed.

## Contributing

Contributions are welcome! To add a new visualization template, simply create a pull request with your template folder following the structure above.