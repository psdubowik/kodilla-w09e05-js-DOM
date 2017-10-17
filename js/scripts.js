var votingButtons = document.getElementsByClassName("button");
var votingButtonLen = votingButtons.length;

for (var buttonNum = 0; buttonNum < votingButtonLen; buttonNum++){
    var vote = votingButtons[buttonNum].innerHTML;
    console.log(vote);
    alert(vote);
}
