var votingButtons = document.getElementsByClassName("button");

for (var buttonNum = 0; buttonNum < votingButtons.length; buttonNum ++){
    var vote = votingButtons[buttonNum].innerHTML;
    console.log(vote);
    alert(vote);
}
