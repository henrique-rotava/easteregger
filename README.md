# 🥚 easteregger
A simple JS snippet that allows you to create key sequence based easter eggs

Usage
------

The easter object has an egg function that accepts two parameters, the key sequence and a callback.

The key sequence can be an array of key names or a string representing a word.

The callback function will be called when user types the exact sequence of keys, at this moment you can create any effect you want.

### Examples
Make the page tilt when user types "tilt" at any place of page:
```JavaScript
easter.egg('tilt', function(){
    document.getElementsByTagName('body')[0].style.transition = 'transform 1s';
    document.getElementsByTagName('body')[0].style.transform = 'rotateZ(3deg)';
});
```

Adding a flame gif on bottom of page when user types "fire":
```JavaScript
easter.egg('fire', function(){
    var div = document.createElement("div");
    div.innerHTML = '<div style="z-index: 9999999;width: 100%;height: 100px;position: fixed;bottom: 0;background: url(https://vignette.wikia.nocookie.net/fantendo/images/4/49/Realistic-fire-animated-transparent-gif.gif/revision/latest?cb=20150324012556);"></div>';
    document.body.appendChild(div);
});
```

Erase body content when user press Ctrl + a:
```JavaScript
easter.egg(['Control', 'a'], function(){
    document.write('');
});
```