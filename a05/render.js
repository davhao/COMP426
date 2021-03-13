/**
 * Course: COMP 426
 * Assignment: a05
 * Author: <type your name here>
 *
 * This script uses jQuery to build an HTML page with content taken from the
 * data defined in data.js.
 */

/**
 * Given a hero object (see data.js), this function generates a "card" showing
 *     the hero's name, information, and colors.
 * @param hero  A hero object (see data.js)
 */
export const renderHeroCard = function(hero) {
	// TODO: Generate HTML elements to represent the hero
	// TODO: Return these elements as a string, HTMLElement, or jQuery object
	// Example: return `<div>${hero.name}</div>`;
	const card = $(document.createElement('div')).addClass('card hero-card').attr('id', `hero-${hero.id}`);

	const heroImgContainer = $(document.createElement('div'))
		.addClass('card-image')
		.css('background-color', hero.backgroundColor);

	const heroImg = $(document.createElement('img')).attr('src', hero.img);
	const heroName = $(document.createElement('span'))
		.text(hero.name)
		.css({ color: hero.color, 'margin-bottom': '.5rem' })
		.addClass('title is-4');

	const content = $(document.createElement('div')).addClass('card-content');

	const heroSubtitle = $(document.createElement('div'))
		.text(`"${hero.subtitle}"`)
		.addClass('subtitle is-5 hero-subtitle');
	const heroRealName = $(document.createElement('span')).html(
		`<strong>Real Name:</strong> ${hero.first} ${hero.last}<br>`
	);
	const firstSeen = $(document.createElement('span')).html(
		`<strong>First Seen:</strong> ${hero.firstSeen.toLocaleString('en-US', { month: 'long', year: 'numeric' })}<br>`
	);
	const heroDesc = $(document.createElement('p')).text(hero.description).css('margin-top', '.5rem');

	const editButtonContainer = $(document.createElement('div')).addClass('edit-button-container');
	const editButton = $(document.createElement('button')).text('Edit').addClass('button is-dark edit-button');
	editButtonContainer.append(editButton);

	const cardContentContainer = $(document.createElement('div'))
		.addClass('card-content-container')
		.append(content)
		.append(editButtonContainer);

	// Assemblage
	heroImgContainer.append(heroImg);
	heroImgContainer.append(heroName);

	content.append(heroSubtitle);
	content.append(heroRealName);
	content.append(firstSeen);
	content.append(heroDesc);

	card.append(heroImgContainer);
	card.append(cardContentContainer);

	return card;
};

const textField = (label, fieldName, value) =>
	`
	<label class="label">${label}</label>
	<div class="control">
	  <input name=${fieldName} class="input" type="text" value='${value}'>
	</div>`;
/**
 * Given a hero object, this function generates a <form> which allows the
 *     user to edit the fields of the hero. The form inputs should be
 *     pre-populated with the initial values of the hero.
 * @param hero  The hero object to edit (see data.js)
 */
export const renderHeroEditForm = function(hero) {
	// TODO: Generate HTML elements to represent the hero edit form
	// TODO: Return these elements as a string, HTMLElement, or jQuery object
	// Example: return `<form>${hero.name}</form>`;
	const card = $(document.createElement('div')).addClass('card hero-card').attr('id', `edit-${hero.id}`);

	const heroImgContainer = $(document.createElement('div'))
		.addClass('card-image')
		.css('background-color', hero.backgroundColor);

	const heroImg = $(document.createElement('img')).attr('src', hero.img);

	const heroName = $(document.createElement('span'))
		.text(`Edit "${hero.name}"`)
		.css({ color: hero.color, 'margin-bottom': '.5rem' })
		.addClass('title is-4');

	const content = $(document.createElement('div')).addClass('card-content');
	const form = $(document.createElement('form'));

	const name = $(document.createElement('div'))
		.html(textField('Superhero Name', 'name', hero.name))
		.addClass('field');
	const first = $(document.createElement('div')).html(textField('First Name', 'first', hero.first)).addClass('field');
	const last = $(document.createElement('div')).html(textField('Last Name', 'last', hero.last)).addClass('field');
	const desc = $(document.createElement('div'))
		.html(
			`<label class="label">Description</label>
	<div class="control">
	  <textarea name='description' class="textarea">${hero.description}</textarea>
	</div>`
		)
		.addClass('field');
	const firstSeen = $(document.createElement('div')).html(`
	<label class="label">First Seen</label>
	<div class="control">
	  <input name='firstSeen' class="input" type="date" value='${hero.firstSeen.toISOString().split('T')[0]}'>
	</div>
	`);

	const cancelButton = $(document.createElement('button'))
		.text('Cancel')
		.attr('type', 'button')
		.addClass('button is-danger cancel-button')
		.css('margin-right', '5px');
	const saveButton = $(document.createElement('button'))
		.text('Save')
		.attr('type', 'submit')
		.addClass('button is-dark save-button');

	const buttonContainer = $(document.createElement('div')).addClass('cancel-save-button-container');
	buttonContainer.append(cancelButton).append(saveButton);

	const cardContentContainer = $(document.createElement('div'))
		.addClass('card-content-container')
		.append(content)
		.css('width', '100%');

	// Assemble
	heroImgContainer.append(heroImg);
	heroImgContainer.append(heroName);

	form.append(name);
	form.append(first);
	form.append(last);
	form.append(desc);
	form.append(firstSeen);
	form.append(buttonContainer);

	content.append(form);

	card.append(heroImgContainer);
	card.append(cardContentContainer);

	return card;
};

/**
 * Handles the JavaScript event representing a user clicking on the "edit"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditButtonPress = function(event) {
	// TODO: Render the hero edit form for the clicked hero and replace the
	//       hero's card in the DOM with their edit form instead
	const id = $($(event.currentTarget).parents()[2]).attr('id');
	const index = id.slice(5);
	const editForm = renderHeroEditForm(heroicData.find((h) => h.id == index));
	$(`#${id}`).replaceWith(editForm);
	return editForm;
};

/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleCancelButtonPress = function(event) {
	// TODO: Render the hero card for the clicked hero and replace the
	//       hero's edit form in the DOM with their card instead
	const id = $($(event.currentTarget).parents()[4]).attr('id');
	const index = id.slice(5);
	$(`#${id}`).replaceWith(renderHeroCard(heroicData.find((h) => h.id == index)));
	attatchListeners();
};

/**
 * Handles the JavaScript event representing a user clicking on the "cancel"
 *     button for a particular hero.
 * @param event  The JavaScript event that is being handled
 */
export const handleEditFormSubmit = function(event) {
	// TODO: Render the hero card using the updated field values from the
	//       submitted form and replace the hero's edit form in the DOM with
	//       their updated card instead
	const formData = $($(event.currentTarget).parents()[1]).serializeArray();
	const updatedHeroDataObject = {};
	formData.forEach((data) => (updatedHeroDataObject[data.name] = data.value));
	const newDate = updatedHeroDataObject.firstSeen.split('-');
	newDate[1] -= 1;
	updatedHeroDataObject.firstSeen = new Date(...newDate);
	const id = $($(event.currentTarget).parents()[4]).attr('id');
	const index = id.slice(5);
	const heroDataIndex = heroicData.findIndex((h) => h.id == index);
	const heroData = heroicData[heroDataIndex];
	heroicData[heroDataIndex] = { ...heroData, ...updatedHeroDataObject };
	$(`#${id}`).replaceWith(renderHeroCard(heroicData.find((h) => h.id == index)));
	attatchListeners();
};

/**
 * Given an array of hero objects, this function converts the data into HTML,
 *     loads it into the DOM, and adds event handlers.
 * @param  heroes  An array of hero objects to load (see data.js)
 */
export const loadHeroesIntoDOM = function(heroes) {
	// Grab a jQuery reference to the root HTML element
	const $root = $('#root');

	// TODO: Generate the heroes using renderHeroCard()
	const heroCards = heroes.map((hero) => renderHeroCard(hero));

	// TODO: Append the hero cards to the $root element
	heroCards.forEach((card) => {
		$root.append(card);
	});

	// TODO: Use jQuery to add handleEditButtonPress() as an event handler for
	//       clicking the edit button
	// TODO: Use jQuery to add handleEditFormSubmit() as an event handler for
	//       submitting the form
	// TODO: Use jQuery to add handleCancelButtonPress() as an event handler for
	//       clicking the cancel button

	heroCards.forEach((card) => {
		card.find('.edit-button').on('click', (e) => {
			const editForm = handleEditButtonPress(e);
			editForm.find('.cancel-button').on('click', (e) => {
				e.preventDefault();
				handleCancelButtonPress(e);
			});
			editForm.find('.save-button').on('click', (e) => {
				e.preventDefault();
				handleEditFormSubmit(e);
			});
		});
	});
};

const attatchListeners = () => {
	$('#root').find('.edit-button').each(function() {
		$(this).on('click', (e) => {
			const editForm = handleEditButtonPress(e);
			editForm.find('.cancel-button').on('click', (e) => {
				e.preventDefault();
				handleCancelButtonPress(e);
			});
			editForm.find('.save-button').on('click', (e) => {
				e.preventDefault();
				handleEditFormSubmit(e);
			});
		});
	});
};

/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 */
$(function() {
	loadHeroesIntoDOM(heroicData);
});
