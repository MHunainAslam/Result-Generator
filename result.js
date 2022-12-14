function getresult() {
    let schoolname = (document.getElementById("sn").value);
    let tagline = (document.getElementById("tl").value);
    let sname = (document.getElementById("stname").value);
    let fname = (document.getElementById("stfather").value);
    let roll = (document.getElementById("rn").value);
    let clas = (document.getElementById("cn").value);
    let cc = (document.getElementById("colorid").value);
    let cb = (document.getElementById("colorback").value);
    let ct = (document.getElementById("colortext").value);
    let ctag = (document.getElementById("colortag").value);
    let remarks = (document.getElementById("remarks").value)
    let signtext = (document.getElementById("signtext").value)
    let signtext2 = (document.getElementById("signtext2").value)

    {
        document.getElementById("psn").innerHTML = schoolname;
        document.getElementById("psn").style.color = cc;
        document.getElementById("underlineclr").style.color = cc;
        document.getElementById("returnid").style.backgroundColor = cb;
        document.getElementById("returnid").style.color = ctag;
        document.getElementById("ptl").innerHTML = tagline;
        document.getElementById("pstn").innerHTML = sname;
        document.getElementById("pstn").style.color = ct;
        document.getElementById("psft").innerHTML = fname;
        document.getElementById("psft").style.color = ct;
        document.getElementById("prn").innerHTML = roll;
        document.getElementById("prn").style.color = ct;
        document.getElementById("pcn").innerHTML = clas;
        document.getElementById("pcn").style.color = ct;
        document.getElementById("line1").style.backgroundColor = ctag;
        document.getElementById("line2").style.backgroundColor = ctag;
        document.getElementById("line3").style.backgroundColor = ctag;
        document.getElementById("line4").style.backgroundColor = ctag;
        document.getElementsByClassName("table-group-divider")[0].style.color = ctag;
        document.getElementById("tablehead").style.color = ctag;
        document.getElementById("totaltablehead").style.color = ct;
        document.getElementById("marksoutput").style.color = ct;
        document.getElementById("remarksoutputid").style.color = document.getElementById("remaksclr").value;
        document.getElementById("remarksoutputid").innerHTML = remarks;
        document.getElementById("signoutput").innerHTML = signtext;
        document.getElementById("signoutput").style.color = document.getElementById("signatureclr").value;
        document.getElementById("signoutput2").innerHTML = signtext2;
        document.getElementById("signoutput2").style.color = document.getElementById("signatureclr2").value;
        

    }
};


// function marks (){
//     let gmv = (document.getElementById("totalsub").value);
//     let gmd = (document.getElementById("pts"));
//     let pmd = (document.getElementById("pts2"));
//     {
//         pmd.innerHTML = "";
//     }
//     for (let a=1; a<=gmv; a++){
//         let pmdd = document.createElement("div");
//         pmdd.innerHTML = gmd.innerHTML
//         pmd.appendChild(pmdd)
//     }
// }

// marks section variable
let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];
let list5 = [];
let list6 = [];
let list7 = [];
let list8 = [];
let list9 = [];
let list10 = [];



// loop value
let a = 1;
let b = 0;

function marks() {
    // addition between mid fine and other
    let midmarkssum = document.getElementById("tc2").value;
    let finalmarkssum = document.getElementById("tc3").value;
    let othermarkssun = document.getElementById("tc4").value;
    let sum = Number(midmarkssum) + Number(finalmarkssum) + Number(othermarkssun);

    //getting percentage
    let totalmarkspercent = document.getElementById("tc5").value;
    let percent = (Number(sum) * 100) / Number(totalmarkspercent);
    let percentfixed = percent.toFixed(0) + "%";





    //getting grade 
    let getgrade;
    if (percentfixed == 100 + "%") {
        getgrade = ("A+")
    } else if (percentfixed > 79 + "%") {
        getgrade = ("A+")
    } else if (percentfixed > 69 + "%") {
        getgrade = ("A")
    } else if (percentfixed > 59 + "%") {
        getgrade = ("B")
    } else if (percentfixed > 49 + "%") {
        getgrade = ("C")
    } else if (percentfixed > 38 + "%") {
        getgrade = ("D")
    } else if (percentfixed < 40 + "%") {
        getgrade = ("Fail")
    }


    //getting GPA 
    let gpa = (Number(sum) * 4) / Number(totalmarkspercent);
    let gpafixed = gpa.toFixed(1)



    // get div where show and add new row
    let AddRown = document.getElementById('marksoutput');
    let NewRow = AddRown.insertRow(a);


    // get value from input
    list1[b] = document.getElementById("tc1").value;
    list2[b] = document.getElementById("tc2").value;
    list3[b] = document.getElementById("tc3").value;
    list4[b] = document.getElementById("tc4").value;
    list5[b] = document.getElementById("tc5").value;
    list6[b] = sum;
    list7[b] = percentfixed;
    list8[b] = getgrade;
    list9[b] = gpafixed;




    // insert row row
    let cel1 = NewRow.insertCell(0);
    let cel2 = NewRow.insertCell(1);
    let cel3 = NewRow.insertCell(2);
    let cel4 = NewRow.insertCell(3);
    let cel5 = NewRow.insertCell(4);
    let cel6 = NewRow.insertCell(5);
    let cel7 = NewRow.insertCell(6);
    let cel8 = NewRow.insertCell(7);
    let cel9 = NewRow.insertCell(8);





    // row = input
    cel1.innerHTML = list1[b];
    cel2.innerHTML = list2[b];
    cel3.innerHTML = list3[b];
    cel4.innerHTML = list4[b];
    cel5.innerHTML = list5[b];
    cel6.innerHTML = list6[b];
    cel7.innerHTML = list7[b];
    cel8.innerHTML = list8[b];
    cel9.innerHTML = list9[b];


    //loop
    a++;
    b++;

    // sum total number
    let sumtotalmarks = list5.reduce((h1, h2) => {
        return Number(h1) + Number(h2)
    })
    document.getElementById("totalmarksumid").innerHTML = sumtotalmarks;

    // sum obtained number
    let sumobtainedmarks = list6.reduce((h1, h2) => {
        return Number(h1) + Number(h2)
    })
    document.getElementById("obtainedmarksumid").innerHTML = sumobtainedmarks;


    //getting final percentage
    let finaltotalmarkspercent = sumtotalmarks;
    let finalpercent = (Number(sumobtainedmarks) * 100) / Number(finaltotalmarkspercent);
    let finalpercentfixed = finalpercent.toFixed(0) + "%";
    

    // sum percentage
    document.getElementById("percentagesumid").innerHTML = finalpercentfixed;

    
    //getting final grade 
    let getfinalgrade;
    if (getgrade == "Fail") {
        getfinalgrade = ("Fail")
    } else if (finalpercentfixed == 100 + "%") {
        getfinalgrade = ("A+")
    } else if (finalpercentfixed > 79 + "%") {
        getfinalgrade = ("A+")
    } else if (finalpercentfixed > 69 + "%") {
        getfinalgrade = ("A")
    } else if (finalpercentfixed > 59 + "%") {
        getfinalgrade = ("B")
    } else if (finalpercentfixed > 49 + "%") {
        getfinalgrade = ("C")
    } else if (finalpercentfixed > 39 + "%") {
        getfinalgrade = ("D")
    } else if (finalpercentfixed < 40 + "%") {
        getfinalgrade = ("Fail")
    }
console.log(getfinalgrade)
    document.getElementById("gradesumid").innerHTML = getfinalgrade;

    // final gpa
    let finalgpa = (Number(sumobtainedmarks) * 4) / Number(finaltotalmarkspercent);
    let finalgpafixed = finalgpa.toFixed(1)
    document.getElementById("gpasumid").innerHTML = finalgpafixed;
    
}
// function signpic(){
//     let pic1 = document.getElementById("signaturepic").src;
//     let pic1element = document.createElement("img");
//     pic1element.src = pic1;
//     document.getElementById("signoutimg").appendChild(pic1element);
// }
function printdiv(ruleforprint){
    var printresult = document.getElementById(ruleforprint).innerHTML;
    var printcontent = document.body.innerHTML;

    document.body.innerHTML = printresult;

    window.print(); 

    document.body.innerHTML = printcontent;
}