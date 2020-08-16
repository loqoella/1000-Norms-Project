
function checkIsovalid()
{
	
	if(sessionStorage.getItem("loginSuccess") != "true"){
	  
		alert("Please login.");
		return;
	}else{
		var age = document.getElementsByName("Age");
		var grip = document.getElementsByName("grip");
		var plantarflexors = document.getElementsByName("Plantarflexors");
		var Dorsiflexors = document.getElementsByName("Dorsiflexors");
		var Knee_flexors = document.getElementsByName("Knee flexors");
		var Knee_extension = document.getElementsByName("Knee extension");
		var Hip_abductors = document.getElementsByName("Hip abductors");
		var Hip_external_rotators = document.getElementsByName("Hip external rotators");
		var Hip_internal_rotators = document.getElementsByName("Hip internal rotators");
		var Elbow_flexors = document.getElementsByName("Elbow flexors");
		var Elbow_extensors = document.getElementsByName("Elbow extensors");
		var Shoulder_external_rotators = document.getElementsByName("Shoulder external rotators");
		var Shoulder_internal_rotators = document.getElementsByName("Shoulder internal rotators");
		if(age[0].value ==""||isNaN(age[0].value) || age[0].value <= 0 || (age[0].value)%1!==0)
		{
		alert("Input Age Not Valid");
		/*
		if(age[0].value.){
			alert("");
		}
		*/
		}else if(isNaN(grip[0].value) || grip[0].value < 0){
			alert("Input Grip Not Valid");
		}else if(isNaN(plantarflexors[0].value) || plantarflexors[0].value < 0){
			alert("Input plantarflexors Not Valid");
		}else if(isNaN(Dorsiflexors[0].value) || Dorsiflexors[0].value < 0){
			alert("Input Dorsiflexors Not Valid");
		}else if(isNaN(Knee_flexors[0].value) || Knee_flexors[0].value < 0){
			alert("Input Knee flexors Not Valid");
		}else if(isNaN(Knee_extension[0].value) || Knee_extension[0].value < 0){
			alert("Input Knee extension Not Valid");
		}else if(isNaN(Hip_abductors[0].value) || Hip_abductors[0].value < 0){
			alert("Input Hip abductors Not Valid");
		}else if(isNaN(Hip_external_rotators[0].value) || Hip_external_rotators[0].value < 0){
			alert("Input Hip external rotators Not Valid");
		}else if(isNaN(Hip_internal_rotators[0].value) || Hip_internal_rotators[0].value < 0){
			alert("Input Hip internal rotators Not Valid");
		}else if(isNaN(Elbow_flexors[0].value) || Elbow_flexors[0].value < 0){
			alert("Input Elbow flexors Not Valid");
		}else if(isNaN(Elbow_extensors[0].value) || Elbow_extensors[0].value < 0){
			alert("Input Elbow extensors Not Valid");
		}else if(isNaN(Shoulder_external_rotators [0].value) || Shoulder_external_rotators [0].value < 0){
			alert("Input Shoulder external rotators Not Valid");
		}else if(isNaN(Shoulder_internal_rotators[0].value) || Shoulder_internal_rotators[0].value < 0){
			alert("Input Shoulder internal rotators Not Valid");
		}else if(grip[0].value =="" && plantarflexors[0].value =="" && Dorsiflexors[0].value =="" && Knee_flexors[0].value =="" &&
		Knee_extension[0].value =="" && Hip_abductors[0].value =="" && Hip_external_rotators[0].value =="" && Hip_internal_rotators[0].value ==""
		&& Elbow_flexors[0].value =="" && Elbow_extensors[0].value =="" && Shoulder_external_rotators [0].value =="" &&
			Shoulder_internal_rotators[0].value ==""){
			alert("Input Nothing!");
		}else {
			data_send = {'age':age[0].value,
				'gender':document.getElementsByName("gender")[0].value,
				'gs':grip[0].value,
				'apfs':plantarflexors[0].value,
				'ads':Dorsiflexors[0].value,
				'kfs':Knee_flexors[0].value,
				'kes':Knee_extension[0].value,
				'has':Hip_abductors[0].value,
				'hers':Hip_external_rotators[0].value,
				'hirs':Hip_internal_rotators[0].value,
				'efs':Elbow_flexors[0].value,
				'ees':Elbow_extensors[0].value,
				'sers':Shoulder_external_rotators [0].value,
				'sirs':Shoulder_internal_rotators[0].value,
			};
			$.ajax({
		        url:"/ims/submit", //提交到那里
		        type:"POST", //提交类型
		        data:JSON.stringify(data_send), //提交的数据
		        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
		　　　　	console.log('responsed data:');

		        cm = data['compare_model'];
		        raw = data['user_raw_data'];

		        console.log(raw);
		        console.log(cm);
		         if(raw === undefined){
		        	alert(data['message']);
				}
				if(grip[0].value != "") {
                    $("#gs").text("Standard value: " + cm['gs_mean'] + ", Evaluation: " + raw['gs_eval']);
                }else{
		         	$("#gs").text("Not input grip value");
				}
				if(plantarflexors[0].value != "") {
		            $("#apfs").text("Standard value: "+ cm['apfs_mean'] + ", Evaluation: " + raw['apfs_eval']);
		         }else{
		            $("#apfs").text("Not input plantarflexors value");
				}
				if(Dorsiflexors[0].value != ""){
		         	$("#ads").text("Standard value: "+ cm['ads_mean'] + ", Evaluation: " + raw['ads_eval']);
		         }else{
		         	$("#ads").text("Not input dorsiflexors value");
				}
				if(Knee_flexors[0].value != ""){
		         	$("#kfs").text("Standard value: "+ cm['kfs_mean'] + ", Evaluation: " + raw['kfs_eval']);
				}else{
		         	$("#kfs").text("Not input knee flexors value");
				}
				if(Knee_extension[0].value != ""){
		         	$("#kes").text("Standard value: "+ cm['kes_mean'] + ", Evaluation: " + raw['kes_eval']);
				}else{
		         	$("#kes").text("Not input knee extension value");
				}
				if(Hip_abductors[0].value != ""){
		         	$("#has").text("Standard value: "+ cm['has_mean'] + ", Evaluation: " + raw['has_eval']);
				}else{
		         	$("#has").text("Not input hip abductors value");
				}
		        if(Hip_external_rotators[0].value != ""){
		         	$("#hers").text("Standard value: "+ cm['hers_mean'] + ", Evaluation: " + raw['hers_eval']);
				}else{
		         	$("#hers").text("Not input hip external rotators value");
				}
				if(Hip_internal_rotators[0].value != ""){
		         	$("#hirs").text("Standard value: "+ cm['hirs_mean'] + ", Evaluation: " + raw['hirs_eval']);
				}else{
		         	$("#hirs").text("Not input hip internal rotators value");
				}
		        if(Elbow_flexors[0].value != ""){
		         	$("#efs").text("Standard value: "+ cm['efs_mean'] + ", Evaluation: " + raw['efs_eval']);
				}else{
		         	$("#efs").text("Not input elbow flextors value");
				}
				if(Elbow_extensors[0].value != ""){
		         	$("#ees").text("Standard value: "+ cm['ees_mean'] + ", Evaluation: " + raw['ees_eval']);
				}else{
		         	$("#ees").text("Not input elbow extensors value");
				}
				if(Shoulder_external_rotators [0].value != ""){
		         	$("#sers").text("Standard value: "+ cm['sers_mean'] + ", Evaluation: " + raw['sers_eval']);
				}else{
		         	$("#sers").text("Not input shoulder external rotators value");
				}
		        if(Shoulder_internal_rotators[0].value != ""){
		         	$("#sirs").text("Standard value: "+ cm['sirs_mean'] + ", Evaluation: " + raw['sirs_eval']);
				}else{
		         	$("#sirs").text("Not input shoulder internal rotators value");
				}

				var x = document.getElementById("iso_result");
				x.style.display = (x.style.display == 'none')?'block':'none';

		    	}


		    })
		}
	}

}


function checkMotionvalid()
{
	if(sessionStorage.getItem("loginSuccess") != "true"){

		alert("Please login.")
		return;
	}else{
		//alert("ok");
		var age = document.getElementsByName("Age");
		var Neck_flexion= document.getElementsByName("Neck flexion");
		var Neck_extension= document.getElementsByName("Neck extension");
		var plantarflexion = document.getElementsByName("Plantarflexion");
		var Dorsiflexion = document.getElementsByName("Dorsiflexion");
		var Knee_flexion = document.getElementsByName("Knee flexion");
		var Knee_extension = document.getElementsByName("Knee extension");
		var Hip_flexion = document.getElementsByName("Hip flexion");
		var Hip_external_rotators = document.getElementsByName("Hip external rotators");
		var Hip_internal_rotators = document.getElementsByName("Hip internal rotators");
		var Elbow_flexion = document.getElementsByName("Elbow flexion");
		var Elbow_extension = document.getElementsByName("Elbow extension");
		var Shoulder_external_rotation = document.getElementsByName("Shoulder external rotation");
		var Shoulder_internal_rotation = document.getElementsByName("Shoulder internal rotation");
		if(age[0].value ==""||isNaN(age[0].value) || age[0].value <= 0 || (age[0].value)%1!==0)
		{
		alert("Input Age Not Valid");
		}else if(isNaN(Neck_flexion[0].value) || Neck_flexion[0].value < 0){
			alert("Input Neck flexion Not Valid");
		}else if(isNaN(Neck_extension[0].value) || Neck_extension[0].value < 0){
			alert("Input Neck extension Not Valid");
		}else if(isNaN(plantarflexion[0].value) || plantarflexion[0].value < 0){
			alert("Input plantarflexion Not Valid");
		}else if(isNaN(Dorsiflexion[0].value) || Dorsiflexion[0].value < 0){
			alert("Input Dorsiflexion Not Valid");
		}else if(isNaN(Knee_flexion[0].value) || Knee_flexion[0].value < 0){
			alert("Input Knee flexion Not Valid");
		}else if(isNaN(Knee_extension[0].value) || Knee_extension[0].value < 0){
			alert("Input Knee extension Not Valid");
		}else if(isNaN(Hip_flexion[0].value) || Hip_flexion[0].value < 0){
			alert("Input Hip flexion Not Valid");
		}else if(isNaN(Hip_external_rotators[0].value) || Hip_external_rotators[0].value < 0){
			alert("Input Hip external rotators Not Valid");
		}else if(isNaN(Hip_internal_rotators[0].value) || Hip_internal_rotators[0].value < 0){
			alert("Input Hip internal rotators Not Valid");
		}else if(isNaN(Elbow_flexion[0].value) || Elbow_flexion[0].value < 0){
			alert("Input Elbow flexion Not Valid");
		}else if(isNaN(Elbow_extension[0].value) || Elbow_extension[0].value < 0){
			alert("Input Elbow extension Not Valid");
		}else if(isNaN(Shoulder_external_rotation [0].value) || Shoulder_external_rotation [0].value < 0){
			alert("Input Shoulder external rotation Not Valid");
		}else if(isNaN(Shoulder_internal_rotation[0].value) || Shoulder_internal_rotation[0].value < 0){
			alert("Input Shoulder internal rotation Not Valid");
		}else if(Neck_flexion[0].value =="" && Neck_extension[0].value =="" && plantarflexion[0].value =="" && Dorsiflexion[0].value ==""
		&& Knee_flexion[0].value =="" && Knee_extension[0].value =="" && Hip_flexion[0].value =="" && Hip_external_rotators[0].value ==""
		&& Hip_internal_rotators[0].value =="" && Elbow_flexion[0].value =="" && Elbow_extension[0].value =="" && Shoulder_external_rotation [0].value ==""
		&& Shoulder_internal_rotation[0].value =="" ){
			alert("Input Nothing!");
		}else {

			data_send = {
				'age':age[0].value,
				'gender':document.getElementsByName("gender")[0].value,
				'nf':Neck_flexion[0].value,
			    'ne':Neck_extension[0].value,
			    'kf':Knee_flexion[0].value,
			    'ke':Knee_extension[0].value,
			    'apf':plantarflexion[0].value,
			    'ad':Dorsiflexion[0].value,
			    'hf':Hip_flexion[0].value,
			    'her':Hip_external_rotators[0].value,
			    'hir':Hip_internal_rotators[0].value,
			    'ef':Elbow_flexion[0].value,
			    'ee':Elbow_extension[0].value,
			    'ser':Shoulder_external_rotation [0].value,
			    'sir':Shoulder_internal_rotation[0].value,
			};
			$.ajax({
		        url:"/jf/submit", //提交到那里
		        type:"POST", //提交类型
		        data:JSON.stringify(data_send), //提交的数据
		        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
		　　　　	console.log('responsed data:');
		        console.log(data);
		        cm = data['compare_model'];
		        raw = data['user_raw_data'];
		        console.log(raw);
		        console.log(cm);
				if(raw === undefined){
		        	alert(data['message']);
				}
				if(Neck_flexion[0].value != ""){
					$("#nf").text("Standard value: "+ cm['nf_mean'] + ", Evaluation: " + raw['ne_eval']);
				}else{
					$("#nf").text("Not input neck flexion value");
				}
		        if(Neck_extension[0].value != ""){
					$("#ne").text("Standard value: "+ cm['ne_mean'] + ", Evaluation: " + raw['ne_eval']);
				}else{
					$("#ne").text("Not input neck extension value");
				}
		        if(Knee_flexion[0].value != ""){
					$("#kf").text("Standard value: "+ cm['kf_mean'] + ", Evaluation: " + raw['kf_eval']);
				}else{
					$("#kf").text("Not input knee flexion value");
				}
				if(Knee_extension[0].value != ""){
					$("#ke").text("Standard value: "+ cm['ke_mean'] + ", Evaluation: " + raw['ke_eval']);
				}else{
					$("#ke").text("Not input knee extension value");
				}
				if(plantarflexion[0].value != ""){
					$("#apf").text("Standard value: "+ cm['apf_mean'] + ", Evaluation: " + raw['apf_eval']);
				}else{
					$("#apf").text("Not input plantarflexion value");
				}
		        if(Dorsiflexion[0].value != ""){
					$("#ad").text("Standard value: "+ cm['ad_mean'] + ", Evaluation: " + raw['ad_eval']);
				}else{
					$("#ad").text("Not input dorsiflexion value");
				}
		        if(Hip_flexion[0].value != ""){
					$("#hf").text("Standard value: "+ cm['hf_mean'] + ", Evaluation: " + raw['hf_eval']);
				}else{
					$("#hf").text("Not input hip flexion value");
				}
		        if(Hip_external_rotators[0].value != ""){
					$("#her").text("Standard value: "+ cm['her_mean'] + ", Evaluation: " + raw['her_eval']);
				}else{
					$("#her").text("Not input hip external rotators value");
				}
		        if(Hip_internal_rotators[0].value != ""){
					$("#hir").text("Standard value: "+ cm['hir_mean'] + ", Evaluation: " + raw['hir_eval']);
				}else{
					$("#hir").text("Not input hip internal rotators value");
				}
		        if(Elbow_flexion[0].value != ""){
					$("#ef").text("Standard value: "+ cm['ef_mean'] + ", Evaluation: " + raw['ef_eval']);
				}else{
					$("#ef").text("Not input elbow flexion value");
				}
		        if(Elbow_extension[0].value != ""){
					$("#ee").text("Standard value: "+ cm['ee_mean'] + ", Evaluation: " + raw['ee_eval']);
				}else{
					$("#ee").text("Not input elbow extension value");
				}
		        if(Shoulder_external_rotation [0].value != ""){
					$("#ser").text("Standard value: "+ cm['ser_mean'] + ", Evaluation: " + raw['ser_eval']);
				}else{
					$("#ser").text("Not input shoulder external rotation value");
				}
		        if(Shoulder_internal_rotation[0].value != ""){
					$("#sir").text("Standard value: "+ cm['sir_mean'] + ", Evaluation: " + raw['sir_eval']);
				}else{
					$("#sir").text("Not input shoulder internal rotation value");
				}

				//window.location.href = 'motionresult.html';
				var x = document.getElementById("motion_result");
				x.style.display = (x.style.display == 'none')?'block':'none';

		    	}
		    })
		}
	}


}



function checkFuncvalid()
{
	if(sessionStorage.getItem("loginSuccess") != "true"){
		alert("Please login.")
		return;
	}else{
		//alert("ok");
		var age = document.getElementsByName("Age");
		var Functional_Dexterity = document.getElementsByName("Functional Dexterity");
		var Vertical_jump = document.getElementsByName("Vertical jump");
		var nine_Hole_Peg = document.getElementsByName("9 Hole Peg");
		var Stair_climb_test = document.getElementsByName("Stair climb test");
		var SEBT = document.getElementsByName("SEBT");
		var Choice_Stepping_Reaction_Time = document.getElementsByName("Choice Stepping Reaction Time");
		var Long_Jump = document.getElementsByName("Long Jump");
		var thirty_sec_sit_to_stand_test = document.getElementsByName("30-sec sit to stand test");
		var six_Minute_Walk = document.getElementsByName("6 Minute Walk");
		var Balance = document.getElementsByName("Balance");

		if(age[0].value ==""||isNaN(age[0].value) || age[0].value <= 0 || (age[0].value)%1!==0)
		{
		alert("Input Age Not Valid");
		}
		else if(isNaN(Functional_Dexterity[0].value) || Functional_Dexterity[0].value < 0){
			alert("Input Functional Dexterity Not Valid");
		}else if(isNaN(Vertical_jump[0].value) || Vertical_jump[0].value < 0){
			alert("Input Vertical jump Not Valid");
		}else if(isNaN(nine_Hole_Peg[0].value) || nine_Hole_Peg[0].value < 0){
			alert("Input 9 Hole Peg Not Valid");
		}else if(isNaN(Stair_climb_test[0].value) || Stair_climb_test[0].value < 0){
			alert("Input Stair climb test Not Valid");
		}else if(isNaN(SEBT[0].value) || SEBT[0].value < 0){
			alert("Input Knee extension Not Valid");
		}else if(isNaN(Choice_Stepping_Reaction_Time[0].value) || Choice_Stepping_Reaction_Time[0].value < 0){
			alert("Input Choice Stepping Reaction Time Not Valid");
		}else if(isNaN(Long_Jump[0].value) || Long_Jump[0].value < 0){
			alert("Input Long Jump Not Valid");
		}else if(isNaN(thirty_sec_sit_to_stand_test[0].value) || thirty_sec_sit_to_stand_test[0].value < 0){
			alert("Input30-sec sit to stand test Not Valid");
		}else if(isNaN(six_Minute_Walk[0].value) || six_Minute_Walk[0].value < 0){
			alert("Input 6 Minute Walk Not Valid");
		}else if(isNaN(Balance[0].value) || Balance[0].value < 0){
			alert("Input Balance Not Valid");
		}else if(Functional_Dexterity[0].value =="" && Vertical_jump[0].value =="" && nine_Hole_Peg[0].value =="" &&
		Stair_climb_test[0].value =="" && SEBT[0].value =="" && Choice_Stepping_Reaction_Time[0].value =="" && Long_Jump[0].value ==""
		&& thirty_sec_sit_to_stand_test[0].value =="" && six_Minute_Walk[0].value =="" && Balance[0].value ==""){
			alert("Input Nothing!");
		}
		else {
			console.log('send data');
			data_send = {
				'age':age[0].value,
				'gender':document.getElementsByName("gender")[0].value,
			    'fdt':Functional_Dexterity[0].value,
			    'hpt9':nine_Hole_Peg[0].value,
			    'seb':SEBT[0].value,
			    'lj':Long_Jump[0].value,
			    'mwt6':six_Minute_Walk[0].value,
			    'vj':Vertical_jump[0].value,
			    'tst':Stair_climb_test[0].value,
			    'csrt':Choice_Stepping_Reaction_Time[0].value,
			    'sts':thirty_sec_sit_to_stand_test[0].value,
			    'botb':Balance[0].value,
			};
			$.ajax({
		        url:"/fp/submit", //提交到那里
		        type:"POST", //提交类型
		        data:JSON.stringify(data_send), //提交的数据
		        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
		　　　　	console.log('responsed data:');
		        console.log(data);
		        cm = data['compare_model'];
		        raw = data['user_raw_data'];
		        console.log(raw);
		        console.log(cm);
				if(raw === undefined){
		        	alert(data['message']);
				}
				if(Functional_Dexterity[0].value != ""){
					$("#fdt").text("Standard value: "+ cm['fdt_mean'] + ", Evaluation: " + raw['fdt_eval']);
				}else{
					$("#fdt").text("Not input functional dexterity value");
				}
		        if(nine_Hole_Peg[0].value != ""){
					$("#hpt9").text("Standard value: "+ cm['hpt9_mean'] + ", Evaluation: " + raw['hpt9_eval']);
				}else{
					$("#hpt9").text("Not input nine hole peg value");
				}
		        if(SEBT[0].value != ""){
					$("#seb").text("Standard value: "+ cm['seb_mean'] + ", Evaluation: " + raw['seb_eval']);
				}else{
					$("#seb").text("Not input SEBT value");
				}
		        if(Long_Jump[0].value != ""){
					$("#lj").text("Standard value: "+ cm['lj_mean'] + ", Evaluation: " + raw['lj_eval']);
				}else{
					$("#lj").text("Not input long jump value");
				}
		        if(six_Minute_Walk[0].value != ""){
					$("#mwt6").text("Standard value: "+ cm['mwt6_mean'] + ", Evaluation: " + raw['mwt6_eval']);
				}else{
					$("#mwt6").text("Not input long jump value");
				}
		        if(Vertical_jump[0].value != ""){
					$("#vj").text("Standard value: "+ cm['vj_mean'] + ", Evaluation: " + raw['vj_eval']);
				}else{
					$("#vj").text("Not input vertical jump value");
				}
		        if(Stair_climb_test[0].value != ""){
					$("#tst").text("Standard value: "+ cm['tst_mean'] + ", Evaluation: " + raw['tst_eval']);
				}else{
					$("#tst").text("Not input stair climb test value");
				}
		        if(Choice_Stepping_Reaction_Time[0].value != ""){
					$("#csrt").text("Standard value: "+ cm['csrt_mean'] + ", Evaluation: " + raw['csrt_eval']);
				}else{
					$("#csrt").text("Not input choice stepping reaction time value");
				}
		        if(thirty_sec_sit_to_stand_test[0].value != ""){
					$("#sts").text("Standard value: "+ cm['sts_mean'] + ", Evaluation: " + raw['sts_eval']);
				}else{
					$("#sts").text("Not input thirty sec sit to stand test value");
				}
		        if(Balance[0].value != ""){
					$("#botb").text("Standard value: "+ cm['botb_mean'] + ", Evaluation: " + raw['botb_eval']);
				}else{
					$("#botb").text("Not input balance value");
				}

		        
				//window.location.href = 'funcresult.html';
				var x = document.getElementById("func_result");
				x.style.display = (x.style.display == 'none')?'block':'none';

		    	}
		    })	
		}
	}
	

}

// perform csrf check
jQuery(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
 
    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});
