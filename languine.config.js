module.exports = {
    sourceLanguage: 'en',
    targetLanguages: ['fr', 'ja', 'bn'],
    inputFilesPattern: './src/messages/en.json',
    outputDir: './src/messages',
    forceTranslation: true,
    // projectId: 'R_kgDOOKxnyA',
    shouldReplaceTranslations: true,
    hooks: {
        afterTranslation: 'npx prettier --write "./src/messages/**/*.json"'
    },
    ai: {
        provider: 'openai',
        model: 'gpt-4',
        apiKey: process.env.OPENAI_API_KEY || 'your-openai-api-key'
    }
};
