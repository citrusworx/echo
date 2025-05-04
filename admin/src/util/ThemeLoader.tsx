import { useEffect, useState } from 'react';
import { load as parseYAML } from 'js-yaml';
import axios from 'axios';

interface ThemeConfig {
    theme: string;
    description: string;
    author: string;
    version: number;
    license: string;
    pluginUrl: string;
    colors?:
        {
            config: string;
        }
    fonts:
        {
            config: string;
        }
    components:
        {
            config: string;
        }
    widgets:
        {
            config: string;
        }
}

interface ComponentEntry {
    entry: string;
    style?: string;
    name?: string;
}

export default function ThemeLoader(themeName: string) {
    const [themeConfig, setThemeConfig] = useState <ThemeConfig | null>(null);
    
    useEffect(() => {
        async function loadTheme (themeName: string) {
            try {
                const response = await axios.get(`/themes/${themeName}/theme.yaml`);
                const themeConfig: ThemeConfig = parseYAML(response.data) as ThemeConfig;

                console.log("Theme loaded:", themeConfig.theme)
                setThemeConfig(themeConfig);

                // Go through and load CSS, components, and widgets if any
                if (themeConfig.colors?.config){
                    injectCSS(themeConfig.colors.config);
                }
                if (themeConfig.fonts?.config){
                    injectCSS(themeConfig.fonts.config);
                }
                if (themeConfig.components?.config){
                    console.log("Loading components from:", themeConfig.components.config);
                }
                if(themeConfig.widgets?.config){
                    console.log("Loading widgets from:", themeConfig.widgets.config);
                }
            } 
            catch (error) {
                console.error('Error loading theme:', error);
            }
        }
        loadTheme(themeName);
    }, [])

    function injectCSS(path: string) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href =path;
        document.head.appendChild(link);
    }
    
    if(!themeConfig){
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{themeConfig.theme}</h2>
            <p>{themeConfig.description}</p>
        </div>
    )
}

