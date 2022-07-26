angular
  .module('app')
  .component('aboutPage', {
    templateUrl: 'pages/about/about.html',
    controller: AboutPageController,
    controllerAs: 'vm',
    bindings: {}
  });

  function AboutPageController() {
    var vm = this;

}