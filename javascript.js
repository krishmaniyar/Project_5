let input1=-1;
let input2;
let input3;

var textbox = document.getElementById('textbox');
var answer ="";
function operate()
{
    if(input2 == "+")
    {
        answer = addition(input1,input3);
    }
    if(input2 == "-")
    {
        answer = subtraction(input1,input3);
    }
    if(input2 == "/")
    {
        answer = division(input1,input3);
    }
    if(input2 == "*")
    {
        answer = multiplication(input1,input3);
    }
    textbox.value = answer;
    input1=-1;
}

const container = document.getElementById("container");

function clear1()
{
    input1=-1;
    input2="+";
    input3=0;
    textbox.value = "";
}

function makeCal(rowNum,colNum)
{
    var count = 7;
    let newCol1 = document.createElement("div");
    container.appendChild(newCol1).className = "grid-column";
    let newCell4 = document.createElement("div");
    newCell4.innerHTML = "<button onclick='operate()'>(</button>";
    newCol1.appendChild(newCell4).className = "grid-item";
    let newCell5 = document.createElement("div");
    newCell5.innerHTML = "<button onclick='operate()'>)</button>";
    newCol1.appendChild(newCell5).className = "grid-item";
    let newCell6 = document.createElement("div");
    newCell6.innerHTML = "<button onclick='operate()'>%</button>";
    newCol1.appendChild(newCell6).className = "grid-item";
    let newCell7 = document.createElement("div");
    newCell7.innerHTML = "<button onclick='clear1()'>AC</button>";
    newCol1.appendChild(newCell7).className = "grid-item";
    for(i=0;i<colNum;i++)
    {
        let newCol = document.createElement("div");
        container.appendChild(newCol).className = "grid-column";
        for(j=0;j<rowNum;j++)
        {
            let newCell = document.createElement("div");
            newCell.innerHTML = "<button onclick='values(" + Number(count+j) +")'>" + Number(count+j)+ "</button>";
            newCol.appendChild(newCell).className = "grid-item";
            if(i==0 && j==2)
            {
                let newCell2 = document.createElement("div");
                newCell2.innerHTML = "<button onclick='operators(3)'>/</button>";
                newCol.appendChild(newCell2).className = "grid-item";
            }
            if(i==1 && j==2)
            {
                let newCell2 = document.createElement("div");
                newCell2.innerHTML = "<button onclick='operators(2)'>*</button>";
                newCol.appendChild(newCell2).className = "grid-item";
            }
            if(i==2 && j==2)
            {
                let newCell2 = document.createElement("div");
                newCell2.innerHTML = "<button onclick='operators(-)'>-</button>";
                newCol.appendChild(newCell2).className = "grid-item";
            }
        }
        count-=3;
    }
    let newCol = document.createElement("div");
    container.appendChild(newCol).className = "grid-column";
    let newCell = document.createElement("div");
    newCell.innerHTML = "<button onclick='operate()'>0</button>";
    newCol.appendChild(newCell).className = "grid-item";
    let newCell1 = document.createElement("div");
    newCell1.innerHTML = "<button onclick='values(1)'>.</button>";
    newCol.appendChild(newCell1).className = "grid-item";
    let newCell2 = document.createElement("div");
    newCell2.innerHTML = "<button onclick='operate()'>=</button>";
    newCol.appendChild(newCell2).className = "grid-item";
    let newCell3 = document.createElement("div");
    newCell3.innerHTML = "<button onclick='operators(1)'>+</button>";
    newCol.appendChild(newCell3).className = "grid-item";
}

function values(num)
{
    if(input1==-1)
    {
        input1=num;
        textbox.value += input1;
    }
    else
    {
        input3=num;
        textbox.value += input3;
    }
}

function operators(opp)
{
    if(opp==1)
        opp="+";
    if(opp==2)
        opp="*";
    if(opp==3)
        opp='/';
    if(opp==4)
        opp="-";
    input2=opp;
    textbox.value += input2;
}

makeCal(3,3);

function addition(num1,num2)
{
    return Number(num1)+Number(num2);
}

function subtraction(num1,num2)
{
    return Number(num1)-Number(num2);
}

function division(num1,num2)
{
    return Number(num1)/Number(num2);
}

function multiplication(num1,num2)
{
    return Number(num1)*Number(num2);
}