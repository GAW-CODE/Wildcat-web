var SVG = Snap('#svg');
var container = $('.container');
var toggle = $('#toggle a');
var stage = Snap('#stage');

var colors = ['#f80c12', '#ff9933', '#d0c310', '#69d025', '#12bdb9', '#4444dd', '#442299'];
var sizes = {};
sizes.container = {width: 0, height: 0};
var availableLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var letters = {};
var sentence = [];
var autoTypeSpeed = 250;
var blinkLine;
var blinkLineHeight = 70;
var multiColors = true;

toggle.bind('click', function()
{
	multiColors = !multiColors;
	updateColorsToggle();
})

function updateColorsToggle()
{
	toggle.html('Multi-color is ' + (multiColors ? 'ON' : 'OFF'));
}

updateColorsToggle();


for(var i = 0; i < availableLetters.length; i++)
{
	var letter = availableLetters[i];
	letters[letter] = Snap('#letter-' + letter);
}

blinkLine = SVG.path('M0,0 0,' + blinkLineHeight)
		.attr({
			stroke: 'white',
			'stroke-width': 3,
			fill: 'none',
			class: 'blinky-mcblinkface',
			'stroke-linecap': "round"
		})

//console.log(letters)

$(window).resize(onResize);
onResize();

// newLetter(letters.a);
// newLetter(letters.b);
// newLetter(letters.c);

var welcomeMessage = 'hello';

setTimeout(addWelcomeLetter, autoTypeSpeed)

function addWelcomeLetter()
{
	if(welcomeMessage.length > 0)
	{
		onInput(welcomeMessage.substring(0, 1));
		welcomeMessage = welcomeMessage.substring(1);
		setTimeout(addWelcomeLetter, autoTypeSpeed)
	}
	else
	{
		setupInput();
	}
}

function setupInput()
{
	$(window).keydown(function(e) 
	{
		e.preventDefault();
		//console.log(e.key.toLowerCase())
		onInput(e.key.toLowerCase());
	})
	
	$(window).focus();
	
}

function onInput(input)
{
	if(letters[input]) 
	{
		sentence.push(newLetter(letters[input].clone()));
		positionSentence();
	}
	else if(input == ' ')
	{
		sentence.push(null);
		positionSentence();
	}
	else if(input == 'backspace')
	{
		removeLast();
	}
}

function positionSentence()
{
	var letterWidth = 40;
	var letterGap = 10;
	var leftLimit = (sizes.container.width / 100) * 80;
	var widthLimit = (sizes.container.width / 100) * 60;
	
	
	var canFitOnScreen = Math.floor(sizes.container.width / (letterWidth + letterGap));
	if(canFitOnScreen < sentence.length)
	{
		var removed = sentence.splice(0, sentence.length - canFitOnScreen);
		for(var i = 0; i < removed.length; i++)
		{
			if(removed[i]) removed[i].remove();
		}
	}
	
	var sentenceWidth = ((letterWidth + letterGap) * sentence.length) - letterGap;
	
	if(sentenceWidth > widthLimit)
	{
		var startLeft = leftLimit - sentenceWidth;
	}
	else
	{
		startLeft = (sizes.container.width - sentenceWidth) / 2;
	}
	
	var startTop = (sizes.container.height - (letterWidth/2)) / 2;
	
	for(var i = 0; i < sentence.length; i++)
	{
		if(sentence[i]) TweenMax.to(sentence[i].node, 0.3, {transformOrign:'50% 50%', x: startLeft + ((letterGap + letterWidth) * i), y: startTop});
	}
	
	if(blinkLine) TweenMax.to(blinkLine.node, 0.3, {x: startLeft + sentenceWidth, y: (sizes.container.height - (blinkLineHeight)) / 2 - 5});
}

function onResize()
{
	sizes.container.width = container.width();
	sizes.container.height = container.height();
	
	SVG.attr({
		width: sizes.container.width,
		height: sizes.container.height
	})	
}

function newLetter(letter)
{
	var letterHolder = stage.group();
	
	var paths = letter.selectAll('path');
	var parts = [];
	
	// the colorfull bits
	
	for(var i = 0; i < paths.length; i++)
	{
		var path = paths[i];
		parts = parts.concat(breakUp(path));	
	}	
	
	// full bits on top
	
	for(var i = 0; i < paths.length; i++)
	{
		var path = paths[i];
		parts = parts.concat(path);	
	}	
	
	// add all the parts together
	
	var toAnimate = [];
	
	for(var i = 0; i < parts.length; i++)
	{
		if(typeof parts[i] == 'string')
		{
			var newPath = letterHolder.path(parts[i])
			
			newPath.attr({
					class: 'letter',
					'stroke-linecap': "round"
				})
			
			toAnimate.push(newPath);
			
			newPath.node.style.fill = 'none';
			newPath.node.style.opacity = 0.7;
			newPath.node.style.strokeWidth = 10;// + (Math.random() * 10);
			newPath.node.style.stroke = multiColors ? colors[Math.floor(Math.random()*colors.length)] : '#111';
		}
		else
		{
			parts[i].attr({
					'stroke-linecap': "round"
				})
			parts[i].dontMove = true;
			parts[i].node.style.strokeWidth = 5;
			toAnimate.push(parts[i]);
			letterHolder.append(parts[i]);
		}	
	}	
	
	// 
	
	for(var i = 0; i < toAnimate.length; i++)
	{
		var path = toAnimate[i];
		
		var length = path.getTotalLength();
		var startOffset = Math.random() > 0.5 ? -length : length;
		var strokeWidth = path.node.style.strokeWidth;
		path.node.style.strokeDasharray = length + ' ' + length;
		var xyOffset = 200;
		
		if(path.dontMove)
		{
			TweenMax.fromTo(path.node, 1, {strokeWidth: 0, strokeDashoffset: startOffset}, {strokeWidth: strokeWidth, strokeDashoffset: 0, delay: 0.8, ease: Power4.easeInOut})
		}
		else
		{
			TweenMax.fromTo(
				path.node, 
				1, 
				{
					strokeWidth: 1, 
					x: '+' + ((Math.random() * xyOffset) - (xyOffset / 2)), 
					y: '+' + ((Math.random() * xyOffset )- (xyOffset / 2)), 
					scale: 1, 
					strokeDashoffset: startOffset
				}, 
				{
					bezier: [
						{
							x: (Math.random() * xyOffset) - (xyOffset / 2),
							y: (Math.random() * xyOffset) - (xyOffset / 2)
						},
						{
							x: (Math.random() * xyOffset) - (xyOffset / 2),
							y: (Math.random() * xyOffset) - (xyOffset / 2)
						},
						{
							x: 0,
							y: 0
						}
					],
					strokeWidth: strokeWidth, 
					rotation: 0, 
					scale: 1, 
					//x: 0, 
					//y: 0, 
					strokeDashoffset: 0, 
					ease: Power3.easeOut, 
					delay: (i/ 100) + Math.random() /2
				}
			)
		}
	}
	
	TweenMax.set(letterHolder.node, {transformOrign:'50% 50%'})
	
	return letterHolder;
}

function breakUp(path)
{
	var lengthChunks = 3;
	var length = path.getTotalLength();
	var count = length / lengthChunks;
	
	var toReturn = [];
	
	// get points along the path
	
	var points = [];
	for(var i = 0; i < count; i++)
	{
		var p = path.getPointAtLength( lengthChunks * i );
		points.push([p.x, p.y]);
	}
	
	// group points into chunks
	
	var chunks = [[]];
	
	while(points.length)
	{
		if(chunks[0].length > 2 && points.length > 2 && Math.random() < 0.2)
		{
			chunks.unshift([chunks[0][chunks[0].length - 1]]);
		}
		
		chunks[0].push(points.shift());
	}
	
	// make path strings from chunks
	
	for(var i = 0; i < chunks.length; i++)
	{
		var pathString = 'M'
		for(var j = 0; j < chunks[i].length; j++)
		{
			pathString += chunks[i][j].join(',') + ' ';
		}
		toReturn.push(pathString);
	}
	
	return toReturn;
}


function removeLast()
{
	if(sentence.length > 0)
	{
		var removed = sentence.splice(sentence.length - 1, 1);
		for(var i = 0; i < removed.length; i++)
		{
			if(removed[i]) explodeLetter(removed[i])
		}
		positionSentence();
	}
}
	
function explodeLetter(letter)
{
	var bits = letter.selectAll('path').items;
	for(var i = 0; i < bits.length; i++)
	{
		var func = i == 0 ? removeLetter : null;
		var funcParams = i == 0 ? [bits[i]] : [];

		TweenMax.to(bits[i].node, 0.4, {
			x: Math.random() * (sizes.container.width / 2), 
			y: Math.random() * (sizes.container.height / 2), 
			scale: 0, 
			rotation: Math.random() * 360
		});
	}
	
}

function removeLetter(letter)
{
	if(letter) letter.remove();
}