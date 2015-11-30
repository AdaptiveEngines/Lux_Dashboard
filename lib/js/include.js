var url = Helper.getJsonFromUrl();
/*
Helper.Ajax('/Lux/CAuth/verifyAccess/', {"rule":5},
function(data){
	if(data.hasOwnProperty("error")){
		window.location = "login.html"
	}
});
*/
window.onload = function(){
	Helper.require('./lib/js/Server.js');
	Helper.require('./lib/js/AssetManagementLib.js');
	Helper.require('./lib/js/AssetManagementField.js');
	Helper.require('./lib/js/Links.js', function(){
		Helper.require('./lib/js/WrapperHeader.js', function(){
			var params = {
				 placement : "wrap_header"
				,logo : new Links({href:"#Landing", alt:"Test1"})
				,links : [
					 new Links({href:"#Landing", alt:"Home", onclick_default : true})
					,new Links({href:"#", alt:"Test3"})
					,new Links({href:"/login.html", alt:"Sign Out"})
				]
				,dropdowns : [
					 new Links({href:"#Inbox", alt:"Test5", onclick_default : true}) // need to be able to add a class here
					,new Links({href:"#Profile", alt:"Test6", onclick_default : true})
				]
			};
			var wrapperHeader = new WrapperHeader(params);
			Helper.require('../bootstrap/js/bootstrap-without-jquery.min.js');
		});
		Helper.require('./lib/js/WrapperFooter.js', function(){
			var params = {
				 placement : "wrap_footer"
				,logo : new Links({href:"", alt:""})
				,links : [
					 new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
				,dropdowns : [
					 new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
					,new Links({href:"", alt:""})
				]
			};
			var wrapperFooter = new WrapperFooter(params);
		});
		Helper.require('./lib/js/WrapperNav.js', function(){
			var params = {
				placement : "wrap_nav"
			};
			
			Helper.loadHTML('./setup/Nav.json', function(data){
				params.nav_object = JSON.parse(data);
				var wrapperNav = new WrapperNav(params);
			});
		});
	});
	if(url["#"] != ""){
		Helper.loadPage(url["#"]);
	}else{
		Helper.loadPage("Landing");
	}
}

