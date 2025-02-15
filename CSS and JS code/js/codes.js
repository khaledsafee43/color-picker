document.getElementById('colorInput').addEventListener('input', function(){
    const color = this.value;
    document.getElementById('hexValue').textContent = color;
    document.getElementById('rgbValue').textContent = hexToRgb(color);
});

function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b})`;
}