module.exports = {
    'assets/js/**/*.js': ['eslint'],
    'assets/css/**/*.css': ['stylelint'],
    '**/*.+(js|jsx|json|css)': ['prettier --write', 'git add'],
}
