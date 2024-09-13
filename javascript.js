var input1 = "";
var input2 = "";
var input3 = "";

var textbox = document.getElementById('textbox');
var answer ="";

function operate()
{
    if(input2 == "+")
    {
        answer = addition(input1,input3);
    }
    else if(input2 == "-")
    {
        answer = subtraction(input1,input3);
    }
    else if(input2 == "/")
    {
        answer = division(input1,input3);
    }
    else if(input2 == "*")
    {
        answer = multiplication(input1,input3);
    }
    else if(input2 == "%")
    {
        answer = percentage(input1,input3);
    }
    else
    {
        answer = "NaN";
    }
    textbox.value = answer;
    input1="";
    input2="";
    input3="";
}

function clear1()
{
    input1="";
    input2="";
    input3="";
    textbox.value = "";
}

function delete1()
{
    textbox.value = textbox.value.slice(0,-1);
    if(input3!="")
    {
        input3 = input3.slice(0,-1);
    }
    else if(input2!="")
    {
        input2 = input2.slice(0,-1);
    }
    else
    {
        input1 = input1.slice(0,-1);
    }
}

function values(num)
{
    if(input2 == "")
    {
        if(input3!="")
        {
            clear1();
        }
        input1 += num;
        console.log("input1: "+input1);
        textbox.value += num;
    }
    else
    {
        input3 += num;
        console.log("input3: "+input3);
        textbox.value += num;
    }
}

function operators(opp)
{
    input2=opp;
    console.log("operator: "+ opp)
    textbox.value += opp;
}

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

function percentage(num1,num2)
{
    return Number(num1)*100/Number(num2);
}