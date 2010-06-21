Ext.setup({
icon: 'icon.png',
onReady: function() {
  var titleBar = new Ext.Toolbar({
    dock: 'top',
    title: 'GitHub Mobile',
    updateTitle: function(newTitle) {
      if (typeof(newTitle) != "undefined") {
        this.setTitle("GitHub Mobile :: "+newTitle);
      } else {
        this.setTitle("GitHub Mobile");
      }
    }
  });
  var panel = new Ext.TabPanel({
    fullscreen: true,
    animation: 'slide',
    dockedItems: [ titleBar ],
    tabBar: {
      dock: 'bottom',
      layout: {
        pack: 'center'
      }
    }
  });
  var tabBar = panel.getTabBar();
  tabBar.addDocked({
    xtype: 'button',
    iconCls: 'settings',
    title: 'Settings'
  });
}
});
