// Change the text using innerHTML
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('dynamicText').innerHTML = 'The text has been changed!';
});

// Change the CSS properties like color and position
document.getElementById('changeStyleBtn').addEventListener('click', function() {
    var elements = document.getElementsByClassName('styleText');
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = 'red';
        elements[i].style.position = 'relative';
        elements[i].style.left = '20px';
    }
}); 

// Change the image source after clicking on a button
document.getElementById('changeImageBtn').addEventListener('click', function() {
    document.getElementById('dynamicImage').src = 'https://imageio.forbes.com/specials-images/imageserve/62af107cfb61140c4b0ae103/starr/960x0.jpg?format=jpg&width=960';
});

// Add a text node and attach it to a parent node
document.getElementById('addTextNodeBtn').addEventListener('click', function() {
    var newText = document.createTextNode('This is a new text node.');
    document.getElementById('parentNode').appendChild(newText);
});

// Delete a node
document.getElementById('deleteNodeBtn').addEventListener('click', function() {
    var nodeList = document.getElementById('nodeList');
    if (nodeList.hasChildNodes()) {
        nodeList.removeChild(nodeList.lastChild);
    }
});
