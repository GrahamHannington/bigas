var BigAs = (function() {

// Get parameters from URL and set default values
const params = new URLSearchParams(window.location.search);
params.text = params.get('text') || 'Big As/Possible';
params.backgroundColor = params.get('backgroundColor') || '#000000';
params.fontWeight = params.get('fontWeight') || 'normal';
params.fontStyle = params.get('fontStyle') || 'normal';
params.fontWeight = params.get('fontWeight') || '400';
params.googleFont = params.get('googleFont');
params.textAlign = params.get('textAlign') || 'center'; // left
params.lineHeight = parseInt(params.get('lineHeight') || '16');
params.margin = params.get('margin') || '2vh';
params.width = params.get('width') || '100%';
params.height = params.get('height') || '100%';

// If a Google Font is specified, synchronously load the Web Font Loader script
if (params.googleFont) {
  loadExternalScript('https://ajax.googleapis.com/ajax/libs/webfont/1.6.16/webfont.js');
}

window.addEventListener('load', onLoad);

function loadExternalScript(src) {
  var scriptElement = document.createElement('script');
  scriptElement.defer = true;
  scriptElement.src = src;
  document.getElementsByTagName('head')[0].appendChild(scriptElement);
}

function styleText() {
  const svg = document.getElementById('svg');
  svg.style.fontFamily = params.googleFont;
  svg.style.fontWeight = params.fontWeight;
  svg.style.fontStyle = params.fontStyle;
  svg.style.margin = params.margin;
  svg.style.width = params.width;
  svg.style.height = params.height;
  if (params.textAlign == 'center') {
    var maxTextWidth = 0;
    var thisTextWidth = 0;
    // Get width of widest line
    for (const text of svg.children) {
      thisTextWidth = text.getBBox().width;
      if (thisTextWidth > maxTextWidth) {
        maxTextWidth = thisTextWidth;
      }
    }
    // Shift narrower lines right, centering them relative to the widest line
    for (const text of svg.children) {
      thisTextWidth = text.getBBox().width;
      if (thisTextWidth < maxTextWidth) {
        text.setAttribute('dx', (maxTextWidth - thisTextWidth) / 2);
      }
    }
  }
  // Shrinkwrap the SVG viewBox to the bounding box of its contents
  const bbox = svg.getBBox();
  // Set height to 1 unit larger than bounding box, to avoid cropping
  const height = bbox.height + 1;
  svg.setAttribute('viewBox', `${bbox.x} ${bbox.y} ${bbox.width} ${height}`);
  // Make SVG element visible
  svg.style.visibility = 'visible';
}

function onLoad() {
  const svgNS = 'http://www.w3.org/2000/svg';
  const svg = document.getElementById('svg');
  // Split text into lines
  var dy = 0;
  params.text.split('/').forEach(function (line) {
    // Put each line of text into its own SVG <text> element
    let svgText = document.createElementNS(svgNS, 'text');
    if (dy > 0) {
      svgText.setAttribute('dy', dy);
    }
    svg.appendChild(svgText).textContent = line;
    dy += params.lineHeight;
  })
  document.body.style.backgroundColor = params.backgroundColor;
  if (params.googleFont) {
    // Wait until Google Font is active before styling text
    WebFont.load({
      google: {
        families: [params.googleFont + ':' + params.fontWeight]
      },
      fontactive: styleText
    });
  } else {
    styleText();
  }
}

})();