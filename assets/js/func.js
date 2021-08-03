/*var mylib = mylib || (function(){
    var _args = {};
    return {
        init : function(Args){
            _args = Args;},
        stic : function(){
        var acc = document.getElementsByName(_args[0]);
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel 
                this.classList.toggle("active");
                /* Toggle between hiding and showing the active panel 
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    this.style.zIndex = "1";
                    this.style.position = "relative";
                    this.children[0].children[0].children[0].innerHTML = "Click here for more info";
                }
                else {
                    panel.style.display = "block";
                    this.style.position = "sticky";
                    this.style.position = "-webkit-sticky";
                    this.style.top = "0";
                    this.style.zIndex = "9999";
                    this.children[0].children[0].children[0].innerHTML = "Close";
                }
            });
        }
    }};
}());*/
/*mylib.init(['course']);
    mylib.stic();*/

/*function stik(hey){
    var panel = hey.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
        hey.style.zIndex = "1";
        hey.style.position = "relative";
        hey.children[0].children[0].children[0].innerHTML = "Click here for more info";
    }
    else {
        panel.style.display = "block";
        hey.style.position = "sticky";
        hey.style.position = "-webkit-sticky";
        hey.style.top = "0";
        hey.style.zIndex = "9999";
        hey.children[0].children[0].children[0].innerHTML = "Close";
    }
}*/

function sticman(elnam){
        var acc = document.getElementsByName(elnam);
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                var top = (this.children[0].children[0].querySelector('a')) ? this.children[0].children[0].querySelector('a'):{};
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    this.style.zIndex = "1";
                    this.style.position = "relative";
                    top.innerHTML = "Click here for more info";
                }
                else {
                    panel.style.display = "block";
                    this.style.position = "sticky";
                    this.style.position = "-webkit-sticky";
                    this.style.top = "0";
                    this.style.zIndex = "9999";
                    top.innerHTML = "Close";
                }
            });
        }
}

function nicebut(elnam){
        var acc = document.getElementsByName(elnam);
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                var arrow = (this.querySelector('i')) ? this.querySelector('i') : this.children[0].children[0].children[0].querySelector('i');
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                    arrow.style.transform = 'rotate(45deg)';
                    arrow.style.margin = '0 0 0 0';
                }
                else {
                    panel.style.display = "block";
                    arrow.style.transform = 'rotate(-135deg)';
                    arrow.style.margin = '1vw 0 0 0';
                }
            });
        }
}

function simp(elnam,targ){
            var acc = document.getElementById(elnam);
            acc.addEventListener("click", function() {
                var panel = document.getElementById(targ);
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                }
                else {
                    panel.style.display = "block";
                }
            });
}

function simplist(elnam){
        var acc = document.getElementsByName(elnam);
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                }
                else {
                    panel.style.display = "block";
                }
            });
        }
}