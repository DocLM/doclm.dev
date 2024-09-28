function init_email() {
    function timestampToBase36() {
        const now = new Date();
        const timestamp = now.getTime();

        // Convert to base-36 string
        const base36 = timestamp.toString(36);

        // Pad with zeros to ensure consistent length
        const paddedBase36 = base36.padStart(9, '0');

        // Split into groups of 3 for readability
        return paddedBase36.match(/.{1,3}/g)[1];
    }
    
    const code = timestampToBase36();
    document.querySelectorAll('#mailPlaceholder').forEach(item => {
        item.innerHTML = `w${code} AT doclm DOT dev`;
    });
}
init_email();
