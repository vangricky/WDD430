// import { Component } from '@angular/core';
// import { Contact } from '../contact.model';

// @Component({
//   selector: 'app-contact-detail',
//   templateUrl: './contact-detail.component.html',
//   styleUrl: './contact-detail.component.css'
// })
// export class ContactDetailComponent {
//   contacts: Contact[] = [
//     new Contact("1", "R. Kent Jackson", "jacksonk@byui.edu", "208-496-3771", "../../assets/images/jacksonk.jpg", null),
//     new Contact("2", "Rex Barzee", "barzeer@byui.edu", "208-496-3768", "../../assets/images/barzeer.jpg", null)
//   ]
// }
import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']  // fixed typo: 'styleUrl' → 'styleUrls'
})
export class ContactDetailComponent {
  contact: Contact = new Contact(
    "1",
    "R. Kent Jackson",
    "jacksonk@byui.edu",
    "208-496-3771",
    "../../assets/images/jacksonk.jpg",
    null
  );
}
