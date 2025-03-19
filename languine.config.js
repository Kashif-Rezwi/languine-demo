module.exports = {
    sourceLanguage: 'en',
    targetLanguages: ['fr', 'ja', 'bn'],
    inputFilesPattern: './src/messages/en.json',
    outputDir: './src/messages',
    forceTranslation: true,
    apiKey: process.env.LANGUINE_API_KEY,
    shouldReplaceTranslations: true,
    hooks: {
        afterTranslation: 'npx prettier --write "./src/messages/**/*.json"'
    }
};
