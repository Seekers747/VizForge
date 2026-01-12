export async function loadAndRender(csvPath, templateName, config) {
    // Fetch the CSV file
    const response = await fetch(csvPath);
    const csvText = await response. text();
    
    // Parse CSV using PapaParse
    Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            const data = results.data;
            
            // Dynamically import the template
            import(`../templates/${templateName}/template.js`)
                .then(module => {
                    module.render(data, config);
                });
        }
    });
}

export function renderFromData(data, templateName, config) {
    // Render directly from parsed data
    import(`../templates/${templateName}/template.js`)
        .then(module => {
            module.render(data, config);
        });
}