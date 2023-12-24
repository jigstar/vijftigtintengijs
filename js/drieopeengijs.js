var VakWaardes = [0,
0,0,0,
0,0,0,
0,0,0]

GofT = 0;

// audioTheo = new Audio('audio/Theo.m4a');
// audioGijs = new Audio('audio/Gijs.m4a');
// audioTheowint = new Audio('audio/Theowint.m4a');
// audioGijswint = new Audio('audio/Gijswint.m4a');
// audioGelijk = new Audio('audio/Gelijk.m4a');

initialTheoscore = 0;
theoscore = document.getElementById('theoscore');
theoscore.innerHTML = initialTheoscore;

initialGijsscore = 0;
gijsscore = document.getElementById('gijsscore');
gijsscore.innerHTML = initialGijsscore;

BoterTheoGijs()
function BoterTheoGijs(){
    $("#vak1").click(function(){ i=1
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak2").click(function(){ i=2
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak3").click(function(){ i=3
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak4").click(function(){ i=4
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak5").click(function(){ i=5
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak6").click(function(){ i=6
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
            }
            Check();
    })

    $("#vak7").click(function(){ i=7
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
        }
            Check();
    })

    $("#vak8").click(function(){ i=8
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
        }
            Check();
    })

    $("#vak9").click(function(){ i=9
        if (VakWaardes[i]==0){
            if (GofT == 0){
            $(this).css("background-image", "url(img/Theo.png)");
                VakWaardes[i]=1;
            }
            if (GofT == 1){
                $(this).css("background-image", "url(img/Gijs.png)");
                    VakWaardes[i]=10;
            }
            GofT=GofT + 1;
            GofT = GofT % 2;
        }
        Check();
    })
}

function Reset(){
    $("#vak1").css("background-image","")
    $("#vak2").css("background-image","")
    $("#vak3").css("background-image","")
    $("#vak4").css("background-image","")
    $("#vak5").css("background-image","")
    $("#vak6").css("background-image","")
    $("#vak7").css("background-image","")
    $("#vak8").css("background-image","")
    $("#vak9").css("background-image","")
    VakWaardes = [0,
        0,0,0,
        0,0,0,
        0,0,0]
        
    GofT = 0;
}

function TheoPlus() {
    initialTheoscore += 1;
    theoscore.innerHTML = initialTheoscore;
}

function GijsPlus() {
    initialGijsscore += 1;
    gijsscore.innerHTML = initialGijsscore;
}

function Check(){
    //winst
    if (VakWaardes[1]+VakWaardes[2]+VakWaardes[3] == 3 || //H
        VakWaardes[4]+VakWaardes[5]+VakWaardes[6] == 3 || //H
        VakWaardes[7]+VakWaardes[8]+VakWaardes[9] == 3 || //H
        VakWaardes[1]+VakWaardes[4]+VakWaardes[7] == 3 || //V
        VakWaardes[2]+VakWaardes[5]+VakWaardes[8] == 3 || //V
        VakWaardes[3]+VakWaardes[6]+VakWaardes[9] == 3 || //V
        VakWaardes[1]+VakWaardes[5]+VakWaardes[9] == 3 || //D
        VakWaardes[3]+VakWaardes[5]+VakWaardes[7] == 3 ){ //D
            // audioTheowint.play();
        $(".Mededeling")[0].innerHTML = "Theo wint!";
        TheoPlus()
        Reset()
    } else if (VakWaardes[1]+VakWaardes[2]+VakWaardes[3] == 30 || //H
        VakWaardes[4]+VakWaardes[5]+VakWaardes[6] == 30 || //H
        VakWaardes[7]+VakWaardes[8]+VakWaardes[9] == 30 || //H
        VakWaardes[1]+VakWaardes[4]+VakWaardes[7] == 30 || //V
        VakWaardes[2]+VakWaardes[5]+VakWaardes[8] == 30 || //V
        VakWaardes[3]+VakWaardes[6]+VakWaardes[9] == 30 || //V
        VakWaardes[1]+VakWaardes[5]+VakWaardes[9] == 30 || //D
        VakWaardes[3]+VakWaardes[5]+VakWaardes[7] == 30){  //D
            // audioGijswint.play();
            $(".Mededeling")[0].innerHTML = "Gijs wint!";
        GijsPlus()
        Reset()
        
        // Gelijkspel
    } else if (VakWaardes[1]+VakWaardes[2]+VakWaardes[3]+
            VakWaardes[4]+VakWaardes[5]+VakWaardes[6]+
            VakWaardes[7]+VakWaardes[8]+VakWaardes[9] == 45){
                // audioGelijk.play();
                $(".Mededeling")[0].innerHTML = "Gelijkspel!";
        Reset()
    }
    // else{
    //     if (GofT == 1){
    //         audioTheo.play();
    //     } else{
    //         audioGijs.play();
    //     }
    // }
}