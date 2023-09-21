export const copyToClipboard = (text) => {
    // Check if the Clipboard API is supported
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const result = document.execCommand('copy');
    document.body.removeChild(textarea);
    return Promise.resolve(result);
};
