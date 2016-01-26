/*
* Copyright (c) <2012> <AHN JAE-HA>
*
* version 0.0.1
* angularJS를 사용해서 Tree Menu 구현
*
*/

//지시어 선언
//지시어는 카멜 케이스로 네이밍한다.
angular.module('euTree.directive', [])
.directive('treeElement', function($compile){
  return {
    restrict: 'E', //Element(태그)
    link: function (scope, element, attrs){
      console.log(">>>>> Directive : treeElement");

      //작업 노드를 현재 노드로 갱신
      scope.tree = scope.node;

      //console.log(scope.tree);

      //하부 요소 숨기기|보이기 설정
      var visibility = ( attrs.nodeState != "collapse" ) || 'style="display: none;"';

      //console.log(attrs.nodeState);

      //하위 요소가 존재할 경우
      if( scope.tree.children.length )
      {
        //console.log('[아이콘 클래스 설정 (treeElement)]');
        //console.log(scope.tree.children)

        for(var i in scope.tree.children)
        {
          //하위 요소가 존재하면,
          if( scope.tree.children[i].children.length )
          {
            scope.tree.children[i].className = "eu_" + attrs.nodeState + " eu_deselected";
          }
          else
          {
            scope.tree.children[i].className = "eu_child" + " eu_deselected";
          }
        }

        //하위 요소 등록
        //1단계 : 임의의 HTML 내용을 적용시키기 위해 먼저 HTML을 DOM 요소로 파싱한다.
        var template = angular.element('<ul ' + visibility + '><li ng-repeat="node in tree.children" node-id={{node.' + attrs.nodeId + '}} ng-class="node.className">{{node.' + attrs.nodeName + '}}<tree-element tree="node" node-id=' + attrs.nodeId + ' node-name=' + attrs.nodeName + ' node-state=' + attrs.nodeState + '></tree-element></li></ul>');

        //2단계: 템플릿을 컴파일한다.
        var linkFunction = $compile(template);

        //3단계: 스코프를 컴파일한 템플릿과 연결한다.
        linkFunction(scope);

        //4단계: HTML 요소를 반영한다.
        element.replaceWith( template );
      }
      else
      {
        //하위 요소가 없으면 제거
        element.remove();
      }
    }
  };
})
.directive('euTree', function($compile){
  return {
    restrict: 'E', //Element(태그)
    link: function (scope, element, attrs){
      console.log(">>> Directive : euTree");

      //선택된 노드
      scope.selectedNode = null;

      //TREE를 위한 CSS 적용
      var sheet = document.createElement('style')
      sheet.innerHTML =
      "eu-tree ul{margin:0;padding:0;list-style:none;border:none;overflow:hidden;text-decoration:none;color:#555}" +
      "eu-tree li{position:relative;padding:0 0 0 20px;font-size:13px;font-weight:initial;line-height:18px;cursor:pointer}" +
      "eu-tree .eu_expand{background:url(" + attrs.expandIcon + ") no-repeat}" +
      "eu-tree .eu_collapse{background:url(" + attrs.collapseIcon + ") no-repeat}" +
      "eu-tree .eu_child{background:url(" + attrs.childIcon + ") no-repeat}" +
      "eu-tree .eu_selected{font-weight:bold;}" +
      "eu-tree .hide{display:none;}" +
      "eu-tree .eu_deselected{font-weight:normal;}";
      document.body.appendChild(sheet);

      scope.$watch( attrs.treeData, function(val){
        //console.log('[트리 데이터 변함 (euTree)]');
        //console.log(scope[attrs.treeData]);
        //console.log(scope[attrs.treeData]);


        //console.log('[아이콘 클래스 설정 (euTree)]');
        for(var i in scope[attrs.treeData]){
          console.log(scope[attrs.treeData][i].children.length);
          console.log(attrs.nodeState);
          //하위 요소가 존재하면,
          if( scope[attrs.treeData][i].children.length ){
            scope[attrs.treeData][i].className = "eu_" + attrs.nodeState + " eu_deselected";
          }
          else{
            scope[attrs.treeData][i].className = "eu_child" + " eu_deselected";
          }
        }

        //1차 요소 설정
        //console.log('[1차 요소 설정 (euTree)]');

        //1단계 : 임의의 HTML 내용을 적용시키기 위해 먼저 HTML을 DOM 요소로 파싱한다.
        var template = angular.element('<ul id="euTreeBrowser" class="filetree treeview-famfamfam treeview"><li ng-repeat="node in ' + attrs.treeData + '" node-id={{node.' + attrs.nodeId + '}} ng-class="node.className">{{node.' + attrs.nodeName + '}}<tree-element tree="node" node-id=' + attrs.nodeId + ' node-name=' + attrs.nodeName + ' node-state=' + attrs.nodeState + '></tree-element></li></ul>');
        //<ul id="euTreeBrowser" class="filetree treeview-famfamfam treeview">
	        //<li ng-repeat="node in ' + attrs.treeData + '" node-id={{node.' + attrs.nodeId + '}} ng-class="node.className">{{node.' + attrs.nodeName + '}}
		        //<tree-element tree="node" node-id=' + attrs.nodeId + ' node-name=' + attrs.nodeName + ' node-state=' + attrs.nodeState + '>
		        //</tree-element>
	        //</li>
        //</ul>
        
        //2단계: 템플릿을 컴파일한다.
        var linkFunction = $compile(template);

        //3단계: 스코프를 컴파일한 템플릿과 연결한다.
        linkFunction(scope);

        //4단계: HTML 요소를 반영한다.
        element.html(null).append( template );

        //노드 클릭 이벤트 설정
        //console.log('[노드 클릭 이벤트 설정 (euTree)]');
        angular.element(document.getElementById('euTreeBrowser')).unbind().bind('click', function(e){
          //console.log(e.target);

          //서브 메뉴가 정확히 선택된 경우에만!
          if(angular.element(e.target).length){
            //이전 요소
            scope.previousElement = scope.currentElement;

            //현재 요소
            scope.currentElement = angular.element(e.target);

            //console.log('[선택한 노드 (euTree)]');
            //console.log(scope.currentElement);

            //선택한 노드 브로드캐스팅
            scope.$broadcast('nodeSelected', { selectedNode: scope.currentElement.attr('node-id') });

            //이전 선택 노드 선택 제거
            if( scope.previousElement ){
              scope.previousElement.addClass("eu_deselected").removeClass("eu_selected");
            }
            //현재 노드 선택
            scope.currentElement.addClass("eu_selected").removeClass("eu_deselected");

            //자식 노드가 있으면,
            if( scope.currentElement.children().length ){
              //자식 노드 토글
              scope.currentElement.children().toggleClass("hide");
              //$(e.target).children().slideToggle("fast");

              //아이콘 토글
              scope.currentElement.toggleClass("eu_collapse");
              scope.currentElement.toggleClass("eu_expand");
            }
          }

        });



      }, true ); //true - 실제 값의 변화를 추적 | false - 주소값의 변화를 추적
    }
  };
}).factory('euTreeService', function(){
  return {

  };
});
