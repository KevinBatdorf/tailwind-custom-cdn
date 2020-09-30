import resolveConfig from 'tailwindcss/resolveConfig.js'

try {
    const file = process.argv[0]
    if (!file) {
        console.error('No config file passed in.')
        process.exit(1)
    }
    resolveConfig(file)
} catch {
    console.error('Not a valid Tailwind config file.')
    process.exit(1)
}
