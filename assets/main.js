$(document).ready(function() {
  //  ======== ANIMATE ON SCROLL ========
  AOS.init();
  //	======== SWITHER TABS ========
  switchFeaturesTab();

  function switchFeaturesTab() {
    let typesItems = document.getElementsByClassName("types__item"),
      descriptionItems = document.getElementsByClassName("description__item");

    let typesItemsActive = "types__item--active",
      descriptionItemsActive = "description__item--active";

    for (let i = 0; i < typesItems.length; i++) {
      typesItems[i].onclick = function() {
        if (!this.classList.contains("types__item--active")) {
          for (let i = 0; i < typesItems.length; i++) {
            typesItems[i].classList.remove(typesItemsActive);
            descriptionItems[i].classList.remove(descriptionItemsActive);
          }

          typesItems[i].classList.add(typesItemsActive);
          descriptionItems[i].classList.add(descriptionItemsActive);
        }
      };
    }
  }
});
