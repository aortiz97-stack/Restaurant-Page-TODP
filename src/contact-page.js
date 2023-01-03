function createPElements(innerHTML) {
  const p = document.createElement('p');
  p.innerHTML = innerHTML;
  return p;
}

export default function createContactPage() {
  const divContent = document.querySelector('div#content');

  const contactHeader = document.createElement('h1');
  contactHeader.innerHTML = 'Contact';
  divContent.appendChild(contactHeader);

  const contactNames = ['Alessandro Gucci', 'Giovanna Greco', "Bruno D'Amico"];
  const contactTitles = ['Reservation', 'Catering', 'Marketing'];
  const contactNumbers = ['000-000-0000', '111-111-1111', '222-222-2222'];
  const contactEmails = ['agucci@hmm.com', 'ggreco@what.com', 'bdamico@huh.com'];

  const contactsContainer = document.createElement('div');
  contactsContainer.classList.add('contacts-container');

  for (let i = 0; i < contactNames.length; i += 1) {
    const contactCard = document.createElement('div');
    contactCard.classList.add('contact-card');

    const contactName = document.createElement('h3');
    contactName.innerHTML = contactNames[i];
    const contactTitle = createPElements(contactTitles[i]);
    const contactNumber = createPElements(contactNumbers[i]);
    const contactEmail = createPElements(contactEmails[i]);

    contactCard.appendChild(contactName);
    contactCard.appendChild(contactTitle);
    contactCard.appendChild(contactNumber);
    contactCard.appendChild(contactEmail);

    contactsContainer.append(contactCard);
  }

  divContent.appendChild(contactsContainer);
}
