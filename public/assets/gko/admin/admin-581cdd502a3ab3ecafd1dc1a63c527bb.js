var shiftHeld=!1,body,loader,dialog_max_width=964;$(document).ready(function(){function a(a,b,c){a.simpledialog({mode:"bool",prompt:b,useModal:!0,buttons:{Annuler:{click:function(){}},Supprimer:{click:function(){c.call()},icon:"bin",theme:"x"}}})}$("a[data-remote], form[data-remote]").bind("ajax:beforeSend",function(a,b){attachLoading("body")}).bind("ajax:complete",function(a,b,c){removeLoading("body")}),add_fields=function(a,b,c){var d=(new Date).getTime(),e=new RegExp("new_"+b,"g");$(a).append(c.replace(e,d))},$("a.remove_fields").live("click",function(){return $(this).prev("input[type=hidden]").val("1"),$(this).closest(".fields").hide(),!1}),$(".observe_field").live("change",function(){target=$(this).attr("data-update"),ajax_indicator=$(this).attr("data-ajax-indicator")||"#busy_indicator",$(target).hide(),$(ajax_indicator).show(),$.ajax({dataType:"html",url:$(this).attr("data-base-url")+encodeURIComponent($(this).val()),type:"get",success:function(a){$(target).html(a),$(ajax_indicator).hide(),$(target).show()}})}),$.rails.allowAction=function(b){var c=b.data("confirm"),d=!1,e;return c?($.rails.fire(b,"confirm")&&a(b,c,function(){e=$.rails.fire(b,"confirm:complete",[d]);if(e){var a=$.rails.allowAction;$.rails.allowAction=function(){return!0},b.trigger("click"),$.rails.allowAction=a}}),!1):!0},parent&&parent.document.location.href!=document.location.href&&$("body#dialog_container.dialog").addClass("iframed"),$("ul.tabs").tabs(),flash_notice(),init_text_editor(),init_modal_dialogs(),init_nested_form_links()});var link_tester={initialised:!1,init:function(a,b){this.test_url=a,this.test_email=b,this.initialised=!0},email:function(a,b){$.getJSON(link_tester.test_email,{email:a},function(a){b(a.result=="success")})},url:function(a,b){$.getJSON(link_tester.test_url,{url:a},function(a){b(a.result=="success")})},validate_textbox:function(a,b,c){var d="",e=$("<img id='"+b.replace("#","")+"_test_loader' src='/images/gko-core/ajax-loader.gif' alt='Testing...' style='display: none;'/>"),f=$("<span id='"+b.replace("#","")+"_test_result'></span>");e.insertAfter($(b)),f.insertAfter(e),$(b).bind("paste blur",function(){$(b).stop(!0),$(b+"_test_loader").hide(),$(b+"_test_result").hide(),$(b+"_test_result").removeClass("success_icon").removeClass("failure_icon"),$(b).delay(300).queue(function(){$(b+"_test_loader").show(),$(b+"_test_result").hide(),$(b+"_test_result").removeClass("success_icon").removeClass("failure_icon"),a(this.value,function(a){a?d="success_icon":d="failure_icon",$(b+"_test_result").addClass(d).show(),$(b+"_test_loader").hide()}),c&&c($(b)),$(this).dequeue()})})},validate_url_textbox:function(a,b){link_tester.validate_textbox(link_tester.url,a,b)},validate_email_textbox:function(a,b){link_tester.validate_textbox(link_tester.email,a,b)}},images_dialog={initialised:!1,init:function(){this.initialised||($("#image_dialog_size_container ul li a").live("click",function(a){$("#image_dialog_size_container ul li").removeClass("selected"),$(this).parent().addClass("selected"),a.preventDefault()}),$("body#dialog_container ul.images a").live("click",function(a){a.preventDefault();var b=$(this),c=$("#image_assignments_form");if(c.length>0){var d=b.closest("li").attr("id"),e=parseValue(d);$("#image_assignment_image_id").val(e),c.live("ajax:beforeSend.rails",function(a,b){attachLoading("body#dialog_container")}).live("ajax:complete.rails",function(a,b){removeLoading("body#dialog_container")}).submit()}else{var f=b.find("img:first"),g=$("#image_dialog_size_container li.selected a").attr("data-size");image_url=f.attr("data-"+g),parent&&((wym_src=parent.document.getElementById("wym_src"))!=null&&(wym_src.value=image_url),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=f.attr("title")),(wym_alt=parent.document.getElementById("wym_alt"))!=null&&(wym_alt.value=f.attr("alt")),(wym_dialog_submit=parent.document.getElementById("wym_dialog_submit"))!=null&&wym_dialog_submit.click())}}),this.initialised=!0)}},link_dialog={initialised:!1,init:function(){this.initialised||(this.init_close(),this.page_tab(),this.web_tab(),this.email_tab(),this.document_tab(),this.initialised=!0)},init_close:function(){parent&&parent.document.location.href!=document.location.href&&parent.document.getElementById("wym_dialog_submit")!=null&&$("#dialog_container input#insert_link_submit").click(function(a){a.preventDefault(),$(parent.document.getElementById("wym_dialog_submit")).click()})},page_tab:function(){$("#link_to_page li a").click(function(a){a.preventDefault(),link_dialog.update_parent($(this).attr("href"))})},document_tab:function(){$("#link_to_document li a").click(function(a){a.preventDefault(),link_dialog.update_parent($(this).attr("href"))})},web_tab:function(){$("#web_address_text").change(function(a){link_dialog.update_parent($("#web_address_text").val(),null,"_blank")})},email_tab:function(){$("#email_address_text, #email_default_subject_text, #email_default_body_text").change(function(a){var b=$("#email_default_subject_text").val(),c=$("#email_default_body_text").val(),d="mailto:"+$("#email_address_text").val(),e="?";b.length>0&&(d+=e+"subject="+b,e="&"),c.length>0&&(d+=e+"body="+c,e="&"),link_dialog.update_parent(d,d.replace("mailto:",""))})},update_parent:function(a,b,c){parent!=null&&((wym_href=parent.document.getElementById("wym_href"))!=null&&(wym_href.value=a),(wym_title=parent.document.getElementById("wym_title"))!=null&&(wym_title.value=b),(wym_target=parent.document.getElementById("wym_target"))!=null&&(wym_target.value=c||""))}};close_dialog=function(a){console.log("close_dialog"),parent&&parent.document.location.href!=document.location.href&&$.isFunction(parent.$)?($(parent.document.body).removeClass("hide-overflow"),parent.$(".ui-dialog").dialog("close").remove()):($(document.body).removeClass("hide-overflow"),$(".ui-dialog").dialog("close").remove()),a.preventDefault()},init_text_editor=function(){$("textarea.wymeditor").each(function(){textarea=$(this),(instance=WYMeditor.INSTANCES[$((textarea.next(".wym_box").find("iframe").attr("id")||"").split("_")).last().get(0)])!=null&&((next=textarea.parent().next())!=null&&next.length>0&&next.find("input, textarea").keydown($.proxy(function(a){shiftHeld=a.shiftKey,shiftHeld&&a.keyCode==$.ui.keyCode.TAB&&(this._iframe.contentWindow.focus(),a.preventDefault())},instance)).keyup(function(a){shiftHeld=!1}),(prev=textarea.parent().prev())!=null&&prev.length>0&&prev.find("input, textarea").keydown($.proxy(function(a){a.keyCode==$.ui.keyCode.TAB&&(this._iframe.contentWindow.focus(),a.preventDefault())},instance)))})},init_nested_form_links=function(){$("form a.add-nested-field").live("click",function(a){a.preventDefault();var b=$(this),c=$(b.attr("href")),d=timestamp,e=b.data("association"),f=b.data("template"),g=new RegExp("new_"+e,"g"),h=f.replace(g,d);$(h).appendTo(c).attr("id",d).addClass("dynamic");var i=$("#"+d);i.find("a.remove-nested-field, a.add-nested-field").each(function(a,b){$(b).attr("href","#"+d)}),i.find('input:[type="text"].date').each(function(a,b){$(b).datepicker()}),i.find("select, input, textarea").each(function(a,b){$(b).textinput()})}),$("form a.remove-nested-field").live("click",function(a){var b=$(this),c=$(b.attr("href"));c.length&&(b.hasClass("dynamic")?(c.fadeOut(500).remove(),b.siblings("input[type='hidden']").val("1"),b.siblings("form").trigger("nested:fieldRemoved")):(c.fadeOut(500),b.siblings("input[type='hidden']").val("1"),b.siblings("form").trigger("nested:fieldRemoved"))),a.preventDefault()})},init_modal_dialogs=function(){$('a[href*="dialog=true"]').not("#dialog_container a").each(function(a,b){$(b).data({"dialog-width":parseInt($($(b).attr("href").match("width=([0-9]*)")).last().get(0),10)||928,"dialog-height":parseInt($($(b).attr("href").match("height=([0-9]*)")).last().get(0),10)||473,"dialog-title":$(b).attr("title")||$(b).attr("name")||$(b).html()||null}).attr("href",$(b).attr("href").replace(/(\&(amp\;)?)?dialog\=true/,"").replace(/(\&(amp\;)?)?width\=\d+/,"").replace(/(\&(amp\;)?)?height\=\d+/,"").replace(/(\?&(amp\;)?)/,"?").replace(/\?$/,"")).bind("vmousedown",function(a){$anchor=$(this),iframe_src=(iframe_src=$anchor.attr("href"))+(iframe_src.indexOf("?")>-1?"&":"?")+"app_dialog=true&dialog=true",iframe=$("<iframe id='dialog_iframe' frameborder='0' marginheight='0' marginwidth='0' border='0'></iframe>"),iframe.dialog({title:$anchor.data("dialog-title"),modal:!0,resizable:!1,autoOpen:!0,width:$anchor.data("dialog-width"),height:$anchor.data("dialog-height"),open:onOpenDialog,close:onCloseDialog}),iframe.attr("src",iframe_src),a.preventDefault()})})},flash_notice=function(){$("#flash .flash").each(function(){jQuery.noticeAdd({type:$(this).data("type"),stay:!1,text:$(this).html()}),$(this).remove()})},selectable_list=function(){$.fn.selectAllRows=function(a){var b,c,d;return b=$.extend({column:"first",selectTip:"Click to Select All",unselectTip:"Click to Un-Select All"},a||{}),isNaN(b.column)?(c=$("thead tr th:"+b.column+"-child input:checkbox",this),d=$("tbody tr td:"+b.column+"-child input:checkbox",this)):(c=$("thead tr th:nth-child("+b.column+") input:checkbox",this),d=$("tbody tr td:nth-child("+b.column+") input:checkbox",this)),c.attr("title",b.selectTip),c.click(function(){var a=this.checked;d.each(function(){this.checked=a}),a==1?$(this).attr("title",b.unselectTip):$(this).attr("title",b.selectTip)}),$(this)}},make_sortable=function(a,b,c,d){c||(c="li"),a.sortable({axis:d,dropOnEmpty:!1,cursor:"drag",items:c,connectWith:".nested",update:function(a,c){item=$(c.item),$.ajax({type:"GET",url:b,data:{position:item.prevAll().length+1,id:parseValue(item.attr("id"))},beforeSend:function(a){attachLoading()},complete:function(a,b){removeLoading()}})}}),a.disableSelection()},make_list_toggable=function(a){a.children("li").each(function(){make_element_toggable($(this))})},make_element_toggable=function(a){var b=a.find(".actions:first");b.fadeOut(100),a.hover(function(){b.fadeIn(100)},function(){b.fadeOut(500)})},parseURL=function(a){var b={href:a},c=a.replace("//","/").split("/");return b.protocol=c[0],b.host=c[1],c[1]=c[1].split(":"),b.hostname=c[1][0],b.port=c[1].length>1?c[1][1]:"",c.splice(0,2),b.pathname="/"+c.join("/"),b.pathname=b.pathname.split("#"),b.hash=b.pathname.length>1?"#"+b.pathname[1]:"",b.pathname=b.pathname[0],b.pathname=b.pathname.split("?"),b.search=b.pathname.length>1?"?"+b.pathname[1]:"",b.pathname=b.pathname[0],b},iframed=function(){return parent&&parent.document.location.href!=document.location.href&&$.isFunction(parent.$)}