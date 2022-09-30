window.addEventListener("load", function () {
  // store tabs variable
  var theTabs = document.querySelectorAll(".menu-tabs__nav > li");
  for (i = 0; i < theTabs.length; i++) {
    theTabs[i].addEventListener("click", theTabClicks);
  }

  function theTabClicks(tabClickEvent) {
    var clickedTab = tabClickEvent.currentTarget;
    var theTabs = document.querySelectorAll("ul.menu-tabs__nav > li");
    for (var i = 0; i < theTabs.length; i++) {
      theTabs[i].classList.remove("active");
    }
    clickedTab.classList.add("active");

    //tabClickEvent.preventDefault(); //Stop Adding #ID In Addressbar
    var contentPanes = document.querySelectorAll(".menu-tabs__pane");
    for (i = 0; i < contentPanes.length; i++) {
      contentPanes[i].classList.remove("active");
    }
    var anchorReference = tabClickEvent.target;
    var activePaneId = anchorReference.getAttribute("href") + '-panel';
    var activePane = document.querySelector(activePaneId);
    activePane.classList.add("active");
  }
  // Open Address Bar Anchor Tag Tab Directly
  let hash = window.location.hash; //get the hash from url
  clickOnCurrentTab(hash);
});

window.addEventListener("hashchange", function() {
  let hash = window.location.hash;
  clickOnCurrentTab(hash);
})

function clickOnCurrentTab(hash) {
  cleanhash = hash.replace("#", ""); //remove the #
  cleanhash = cleanhash.replace("-", "") + '-tab';
  document.getElementById(cleanhash).click();
}
