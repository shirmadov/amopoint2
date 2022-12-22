function createMain(){
    let body = document.querySelector('body');
	let html = `<div class="main" style="width:100%;display: flex; flex-direction: column; justify-content: center; position: relative; margin-top:100px;">
		<div class="container" style="width:100%; max-width: 800px; margin: 0 auto; height: 100vh;">
			<h1>Создать поля</h1>
			<div>
				<label for="fileds">Выберите поле:</label>
				<select class="choose__field" style="padding: 5px;border-radius: 5px;" name="fields" id="fileds">
					<option value="text">Text</option>
					<option value="button">Button</option>
					<option value="checkbox">Checkbox</option>
					<option value="date">Date</option>
					<option value="email">email</option>
					<option value="file">File</option>
					<option value="image">Image</option>
					<option value="month">Month</option>
					<option value="number">Number</option>
					<option value="radio">Radio</option>
					<option value="password">Password</option>
					<option value="color">Color</option>
					<option value="time">Time</option>
					<option value="week">Week</option>
				</select>

				<button class="create__field" style="padding:5px; border-radius: 5px;border: 1px solid #000000;">Create</button>

				<div class="fields__list">
				
				</div>
			</div>
		</div>
		
	</div>`;

	body.innerHTML = html;
}


document.addEventListener("DOMContentLoaded", ()=>{
    createMain();

    let list_fields = document.querySelector('select');
	let create_field = document.querySelector('.create__field');
	let fields__list = document.querySelector('.fields__list');


	create_field.onclick = (e)=>{
	
		let create_input = document.createElement('input');

		create_input.type = list_fields.value
		create_input.style.display = "block";
		create_input.style.padding = "7px";
		create_input.style.margin = "5px 0";
		create_input.style.borderRadius = "5px";
		create_input.style.border = "1px solid #000000";

		if(list_fields.value == "button"){
			create_input.value = list_fields.value
		}

		fields__list.appendChild(create_input)

	}
    
})   