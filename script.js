//your JS code here. If required.

document.addEventListener('DOMContentLoaded', function() {
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.getElementById('removeButton');

  removeButton.addEventListener('click', function() {
    const selectedIndex = colorSelect.selectedIndex;
    
    if (selectedIndex !== -1) { // Check if an option is selected
      colorSelect.remove(selectedIndex);
    }
  });
});
