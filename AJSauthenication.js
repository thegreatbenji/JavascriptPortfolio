<section ng-app="myapp">
<div ui-view="viewA"></div>
    <div ui-view="viewB"></div>
    <!-- Also a way to navigate -->
    <a ui-sref="welcome">Welcome</a>
    <a ui-sref="app.dashboard">Application</a>  
  </section> 


<script type="text/ng-template" id="modallogindialogId">
<div>
                  <form ng-submit="LoginModalCtrl.submit(_email, _password)">
                    <input type="email" ng-model="_email" />
                    <input type="password" ng-model="_password" />
                    <button>Submit</button>
                  </form>
                  <button ng-click="LoginModalCtrl.cancel()">Cancel</button>
                </div>
  
</script>
