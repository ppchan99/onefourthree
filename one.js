/*function flip() {
    $('.card').toggleClass('flipped');
    $('.ccard').toggleClass('flipped');
}*/
 function flip() {
        $('.card').toggleClass('flipped');
        $('.ccard').toggleClass('flipped');
    }
window.onload = function(){

   
    
const arr = ['I Love You', 'Sincerity', 'Love for rooster','Dsicipline','Caring',
 'Sweet Anger', 'Sweet voice', 'Passionate', 'Career focused', 'A lot of Show off',
'Family girl', 'Eager Beaver','Daily improvement','Consistency in everything',
'LOve for you parents', 'Not giving me money', 'Always saying no', 'Keen to learn JS', 'Getting your concealer',
'Your money management', 'Living in present', 'Plan for future',
'Denying my request','Good singer', 'Giving me quality time', 'forgiving me for my mistakes',
 'Piano player', 'Making me feel special', 'Gratification', 'Not calling me',
'Not ordering food for me', 'Your curse words', '*Not giving me surprise',
'*Waking up late', 'Love the way you care me', 'Being punctual',
'Not dramatic', 'Being real and genuine', 'Being lazy sometimes',
'Most responsible', 'Loving me most','*Not buying new pone'];
let frnt = document.querySelectorAll('.front')
for(let i=0; i<=41; i++){
 frnt[i].onmouseover = function(){
frnt[i].textContent = arr[i];
frnt[i].style.color = "white";
frnt[i].style.fontSize = "28px";
frnt[i].style.marginTop = "0px";
frnt[i].style.textAlign = "center";
frnt[i].style.paddingTop = "25px";
frnt[i].style.textShadow = "1px 5px 5px black";
frnt[i].style.fontWeight = "bold";
frnt[i].style.font = "Times New Roman\", Times, serif";
}
}
for(let i=0; i<=41; i++){
    frnt[i].onmouseout = function(){
        frnt[i].textContent = " ";
        
    }
    
}
};