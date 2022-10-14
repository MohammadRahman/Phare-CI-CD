module.exports = {
    branches: "master",
    repositoryUrl: 'https://github.com/MohammadRahman/Phare-CI-CD',
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        '@semantic-release/npm',
        '@semantic-release/github'
    ]
}