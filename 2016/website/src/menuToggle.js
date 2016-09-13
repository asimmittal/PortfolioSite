var MenuToggler = function(){
    
    this.enable = function(){
        var isMenuVisible = false;
        var tileGrid = document.getElementById('tiles');
        var menuToggle = document.getElementById('menuToggle');

        menuToggle.addEventListener('click',function(e){
            if(isMenuVisible == false) {
                showMenu(); 
                isMenuVisible = true;
            }
            else {
                hideMenu();
                isMenuVisible = false;
            }
        });

        var showMenu = function(){
            tileGrid.className = tileGrid.className.replace(' slideUpMenu','');
            tileGrid.className += ' slideDownMenu';
        }

        var hideMenu = function(){
            tileGrid.className = tileGrid.className.replace(' slideDownMenu','');
            tileGrid.className += ' slideUpMenu';
        }
    }
};

module.exports = MenuToggler;