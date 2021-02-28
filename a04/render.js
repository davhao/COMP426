/**
 * Course: COMP 426
 * Assignment: a04
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
	const card = $(document.createElement('div')).addClass('card hero-card');

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

	return $(card);
};

const textField = (label, value) =>
	`
	<label class="label">${label}</label>
	<div class="control">
	  <input class="input" type="text" value='${value}'>
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
	const card = $(document.createElement('div')).addClass('card hero-card');

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

	const name = $(document.createElement('div')).html(textField('Superhero Name', hero.name)).addClass('field');
	const first = $(document.createElement('div')).html(textField('First Name', hero.first)).addClass('field');
	const last = $(document.createElement('div')).html(textField('Last Name', hero.last)).addClass('field');
	const desc = $(document.createElement('div'))
		.html(
			`<label class="label">Description</label>
	<div class="control">
	  <textarea class="textarea">${hero.description}</textarea>
	</div>`
		)
		.addClass('field');
	const firstSeen = $(document.createElement('div')).html(`
	<label class="label">First Seen</label>
	<div class="control">
	  <input class="input" type="date" value='${hero.firstSeen.toISOString().split('T')[0]}'>
	</div>
	`);

	const cancelButton = $(document.createElement('button'))
		.attr('type', 'submit')
		.text('Cancel')
		.addClass('button is-danger cancel-button')
		.css('margin-right', '5px');
	const saveButton = $(document.createElement('button'))
		.attr('type', 'submit')
		.text('Save')
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
 * Given an array of hero objects, this function converts the data into HTML and
 *     loads it into the DOM.
 * @param heroes  An array of hero objects to load (see data.js)
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

	// Pick a hero from the list at random
	const randomHero = heroes[Math.floor(Math.random() * heroes.length)];

	// TODO: Generate the hero edit form using renderHeroEditForm()
	const randomForm = renderHeroEditForm(randomHero);

	// TODO: Append the hero edit form to the $root element
	$root.append(randomForm);
};

/**
 * Use jQuery to execute the loadHeroesIntoDOM function after the page loads
 * 
 * Shorthand for $( document ).ready()
 */
$(function() {
	loadHeroesIntoDOM(heroicData);
});
