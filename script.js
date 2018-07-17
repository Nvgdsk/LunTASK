var cub = document.body.getElementsByClassName("cubs");
var arr = new Array();
var digit = 1;
var temp;

for (var i = 0; i<4; i++)
    {
        arr[i]=new Array();

        for(var j=0;j<4;j++)
        {
            arr[i][j]=digit;
            digit++;
        }
    }
function getRandomInt (min, max ) 
{
    return Math.floor(Math.random() * (max - min)) + min;
}

function mixarr()
{
    var ars = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
    var count = 16;
    for(var i = 0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
            arr[i][j]=0;
           var s = getRandomInt(0,count);
            arr[i][j]=ars[s];

            for(var k=s;k<count-1;k++)
            {
                ars[k] = ars[k+1];
            }
            
            count--;
        }

    }
}
                       


             


function fillgame()//заполнить блоки цифрами
{

    mixarr();
    fillblock();

}
function fillblock(){
 var numb=0;
 for(var i = 0;i<4;i++)
 {

    for(var j=0;j<4;j++)
        {   
           cub[numb].innerHTML=arr[i][j];
            cub[numb].style.backgroundColor="white";
            if (arr[i][j]==16)
            {
                cub[numb].style.backgroundColor="orange";
                cub[numb].innerHTML='';
            }
            numb++;

        }
    }

}
fillblock();
function getcordinate()
    {
    var x = 0;
    var y = 0;
    var bo_l=true;
        
    for(x; x<4; x++ )
    {

        for(var j=0;j<4; j++)
            {
                if(arr[x][j]==16 )
                    {
                        y = j;
                        bo_l = false;

                        break;
                    }

            }
          if(!bo_l)//bool =false
            {
                break;
            }

    }
        var z=[x,y];
        return z;
    }
function move(direct)
    {
       var cord=getcordinate();
       var i=cord[0];
       var j= cord[1];
       if (direct=="left"){
        if (j!=3)
            {
            temp = arr[i][j+1];
            arr[i][j+1]=16;
            arr[i][j]=temp;
            fillblock();
            }
       }
       else if (direct=="right")
       {
            if(j!=0)
            {
            temp = arr[i][j-1];
            arr[i][j-1]=16;
            arr[i][j]=temp;
            fillblock();
            }     
       }
       else if (direct=="up")
           {
               if(i!=3)
                {
                temp = arr[i+1][j];
                arr[i+1][j]=16;
                arr[i][j]=temp;
                fillblock();
                }
           }
        else if (direct=="down")
            {
               if(i!=0)
                {
                 temp = arr[i-1][j];
                arr[i-1][j]=16;
                arr[i][j]=temp;
                fillblock();
                } 
            }

    }
    
function checkwin()
    {
        if(arr[0][0]==1&& arr[3][3]==16)
            {

                var bol_=true;
                var prevv=0;

                for(var i = 0;i<4;i++)
                {

                for(var j=0;j<4;j++)
                    {

                       if(arr[i][j]==prevv+1){
                           prevv=arr[i][j];
                           continue;
                       }
                        else{
                            bol_=false;

                            break;
                        }

                    }
                }
                if(bol_==true)
                    {
                        alert("Well done!" );
                        return true;

                    }
                return false;
            }
    }

   
function moveRect(e){

    switch(e.keyCode){

    case 37:

        move("left");

        break;
    case 38:  
        move("up")

        break;
    case 39: 
        move("right");

        break;
    case 40:   
        move("down");

        break;

        }
          checkwin();
        }
document.addEventListener("keydown", moveRect);           
           
            
