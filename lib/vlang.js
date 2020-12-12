module.exports = {
    normalize: function(text) {
        return text.replace(/v(a|i|u|e|o)|V(A|I|U|E|O)/g, '');
    },
    to_vlang: function(text) {
        let lower = text.replace(/(a|i|u|e|o)/g, "$1v$1");
        let upper = lower.replace(/(A|I|U|E|O)/g, "$1V$1");
        return upper;
    },
};