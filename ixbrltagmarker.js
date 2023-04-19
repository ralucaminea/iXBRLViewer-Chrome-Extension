const highlightAllTags = () =>
{
  var nonNumerics = document.getElementsByTagName("ix:nonnumeric");
  console.info("found ix:nonNumeric: " + nonNumerics.length);

  var continuations = document.getElementsByTagName("ix:continuation");
  console.info("found ix:continuation: " + continuations.length);

  for (var tb of nonNumerics)
  {
    tb.parentElement.setAttribute("style", "margin-left:2px;outline:1px solid blue;outline-offset:2px;"); 
  }

  for (var tb of continuations)
  {
    tb.parentElement.setAttribute("style", "margin-left:2px;outline:1px solid blue;outline-offset:2px;");
    if (tb.innerHTML === undefined || tb.innerHTML == '')
    {
      console.warn('You have an empty continuation, ID = ' + tb.id);
    }
  }

  var numerics = document.getElementsByTagName("ix:nonfraction");
  console.info("found ix:nonFraction: " + numerics.length);
  for (var tb of numerics)
  {
    tb.parentElement.setAttribute("style", "outline:1px solid green;outline-offset:2px;");
  }
  
}

highlightAllTags();
