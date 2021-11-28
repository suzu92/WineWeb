let state;
window.onload=function() {
    let obj = document.getElementById('age_verify');
    state=(state==null)?'show':state;
    // No CSS, no reason to use className
    obj.className=state;

    // The use of `onclick` works, but using a more modern approach
    // is best.
    // This reference will explain things far better than I can:
    // http://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick

    document.getElementById('over21').onclick=function() {
        // No point in setting class name if you arent' using CSS
        obj.className=(obj.className==='show')?'hide':'show';
        state=obj.className;
        obj.style.display = 'none';
        setcookie();
        return false;
    }
}